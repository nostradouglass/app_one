
import { MongoClient, ObjectId } from 'mongodb'

async function handler(req, res) {

    const data = req.body;

        const client = await MongoClient.connect(`mongodb+srv://nextjs:nextjs-course-pass84@cluster0.ctnrv.mongodb.net/app_one?retryWrites=true&w=majority`);
        const db = client.db();
        const users = db.collection('users');

    if (req.method === 'POST') {
        const result = await users.insertOne(data);
        client.close();
        res.status(201).json({ message: 'User inserted' });

    }
    if (req.method === 'DELETE') {
        const result = await users.deleteOne({"_id": ObjectId(req.body.id)})
        client.close();
        res.status(201).json({ message: "user deleted"})
    }
}

export default handler
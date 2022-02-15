import Link from "next/link";



export default function UserCard({ email, firstName, lastName, id }) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{email}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{firstName} {lastName}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                ID: 
                <Link href={`/users/${id}`}>
                <a className="card-link">{id}</a>
                </Link>
            </div>
        </div>
    )
}



import { useState } from 'react'

export default function CreateForm(props) {

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    function handleForm(e) {
        e.preventDefault();
        props.handleForm({ email, firstName, lastName });
    }


    return (
        <form style={{ width: '300px', margin: '0 auto' }} onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input onChange={e => setfirstName(e.target.value)} value={firstName} type="text" className="form-control" id="firstName" aria-describedby="firstName" />
            </div>

            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input onChange={e => setLastName(e.target.value)} value={lastName} type="text" className="form-control" id="lastName" aria-describedby="lastName" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

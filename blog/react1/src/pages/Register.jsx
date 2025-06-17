import { useState } from "react"
import axios from 'axios';

export const Register = () => {

    const [name, setName] = useState();
    const [lang, setLang] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.warn(name + " " + lang + " " + email + " " + password);

        axios.post("http://localhost:3000/user/register", {
            "name": name,
            "email": email,
            "password": password,
            "lang": lang,
            withCredentials: true,
        }).then((response) => console.log(response))
        .catch((error) => console.error(error))

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="htmlForm-label">Full Name</label>
                    <input type="text" className="htmlForm-control" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lang" className="htmlForm-label">Programming Languages</label>
                    <input type="text" className="htmlForm-control" id="lang" onChange={(e) => setLang(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" className="htmlForm-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

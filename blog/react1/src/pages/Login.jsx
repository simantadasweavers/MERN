import { useState } from "react"

export const Login = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(e){
        e.preventDefault();
        console.warn(email+" "+password);
    }

    return (
        <>
            <htmlForm onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" className="htmlForm-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </htmlForm>
        </>
    )
}

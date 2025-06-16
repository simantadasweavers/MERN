import { useEffect, useState } from "react"

export const Contact = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setChecked] = useState(false);
    const [gender, setGender] = useState();
    const [profile, setProfile] = useState();
    const [address, setAddress] = useState();
    const [isSelect, setSelect] = useState();
    const [isDate, setDate] = useState();


    function handleSubmit(e) {
        e.preventDefault();
        console.warn("form submitted");
        console.log("email" + email);
        console.log("status: " + isChecked);
        console.log("gender: " + gender);
        console.log("profile: " + profile);
        console.log("address: " + address);
        console.log("country: " + isSelect);
        console.log("date is; " + isDate);
    }

    function handleChecked() {
        setChecked(!isChecked);
    }

    function handleFile(e) {
        setProfile(e.target.files[0]);
    }


    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="flexRadioDefault" className="form-label">Select gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="female" onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="other" onChange={(e) => setGender(e.target.value)} defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                other
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Select profile</label>
                        <input className="form-control" type="file" id="formFile" onChange={handleFile} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea className="form-control" id="address" onChange={(e) => setAddress(e.target.value)} rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select class="form-select" id="country" onChange={(e) => setSelect(e.target.value)} aria-label="Default select example">
                            <option value="us" selected>united states</option>
                            <option value="in">India</option>
                            <option value="np">Nepal</option>
                            <option value="ban">Bangladesh</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="startDate">Select DOB</label>
                        <input id="startDate" className="form-control" type="date" onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" checked={isChecked} onChange={handleChecked} id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Terms & Conditions</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
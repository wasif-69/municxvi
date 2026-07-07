"use client"

import { useEffect, useState } from "react"
import { toast } from "react-toastify";


const Admin = () => {

    const [views,setviews]=useState("")
    const [Permission, givePermission] = useState(false)
    const [username, setusename] = useState("")
    const [password, setpassword] = useState("")

    const RealName = "VK"
    const RealPass = "pikachu"

      useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => setviews(data.views));
  }, []);

    const checkPassword = () => {

        if (username === RealName && password === RealPass) {
            givePermission(true)
            toast.success("Logged In")
        }
        else {
            givePermission(false)
            toast.error("Wrong Name or Password")
        }
    } 

    return (
        <div>
            {Permission ? (
                <div>
                   <div>
                    <h1>Adding the Admin Panel </h1>
                    <div>Total User:{views} </div>
                    </div>
                </div>
            ) : (
                <div className="bg-amber-50 border-black-4 p-15">

                    <input className="border-r-black text-2xl" placeholder="Enter Name "  type="text" value={username} onChange={(e) => { setusename(e.target.value) }} />
                    <input  className="border-r-black text-2xl" placeholder="Enter Password " type="text" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <button className="" onClick={() => { checkPassword() }} >Login</button>
                </div>
            )}
        </div>
    )
}

export default Admin
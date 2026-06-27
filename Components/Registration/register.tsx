"use client";
import { useState } from "react";

const Register = () => {

    const [Registration_1, setRegistration_1] = useState(true)
    const [Registration_2, setRegistration_2] = useState(false)

    const Registration_Form_1 = [
        {
            Name: "Delegation Name",
            type: "text"
        }
    ]

    const Registration_Form_2 = [
        {
            Name: "Number of Delegates",
            type: "number"
        }
    ]

    return (
        <div>
            <h1>Registration Process!</h1>
            {Registration_Form_1.map((val, index) => {
                return (
                    <div key={index}>
                        <input type={val.type} placeholder={val.Name} />
                    </div>
                )
            })}
        </div>
    )
}

export default Register;

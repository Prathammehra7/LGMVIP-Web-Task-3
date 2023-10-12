import React, { useState } from 'react'
import './App.css'

const Form = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [degreeProgram, setDegreeProgram] = useState('');
    const [agree, setAgree] = useState(false);
    const onsubmit = (event) => {
        event.preventDefault();
        if (!agree) {
            alert("Terms and Condition not checked");
        }
        else {
            const data = { 'name': name, 'email': email, 'phone': phone, 'address': address, 'degreeProgram': degreeProgram }
            console.log(data);
            props.addData(data);
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setDegreeProgram('');
        }
    }


    return (
        <div className='form'>
            <h1>
                Registration Form
            </h1>
            <form className='form-data' onSubmit={onsubmit}>

                <input type='text' name='name' id='name' placeholder='Name' value={name}
                    onChange={event => setName(event.target.value)} required /> <br />

                <input type='email' name='email' id='email' placeholder='Email' value={email}
                    onChange={event => setEmail(event.target.value)} required /> <br />

                <input type='number' name='phone' id='phone' placeholder='Phone' value={phone}
                    onChange={event => setPhone(event.target.value)} required /> <br />

                <input type='text' name='address' id='address' placeholder='Address' value={address}
                    onChange={event => setAddress(event.target.value)} required /> <br />

                <input type='text' name='degreeProgram' id='degreeProgram' placeholder='Degree Program' value={degreeProgram}
                    onChange={event => setDegreeProgram(event.target.value)} required /> <br />

                <div>
                    <input type='checkbox' name='agree' id='agree'
                        onChange={() => setAgree(!agree)} />
                    <label htmlFor='agree' > Terms & Conditions</label>
                </div> <br /> <br />

                <input type='submit' value="Register" />

            </form>
        </div>
    )
}

export default Form
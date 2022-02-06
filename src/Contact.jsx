import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });

    const inputEvent = (event) => {
        const { value, name } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (event) => {
        event.preventDefault();
        alert(`My name is ${data.name}. 
        My mobile number is ${data.mobile} 
        and email is ${data.email}, 
        Here is what I want to say ${data.message}`);
        setData({
            name: '',
            mobile: '',
            email: '',
            message: '',
        });
    }




    return (
        <>
            <div className='container-fluid mt-3 mb-5'>
                <div className='row'>
                    <div className='mx-auto' style={{ width: '30rem' }}>
                        <div className='card shadow-sm'>
                            <div className='card-body'>
                                <h6 className='display-6 text-center'>Contact Form</h6>
                                <hr />
                                <form onSubmit={formSubmit}>
                                    <div className='form-floating mb-3'>
                                        <input type='text' className='form-control' onChange={inputEvent} name='name' value={data.name}
                                            placeholder='Enter your name' />
                                        <label>FullName</label>
                                    </div>
                                    <div className='form-floating mb-3'>
                                        <input type='number' className='form-control' onChange={inputEvent} name='mobile' value={data.mobile}
                                            placeholder='Mobile Number' />
                                        <label>Mobile Number</label>
                                    </div>
                                    <div className='form-floating mb-3'>
                                        <input type='email' className='form-control' onChange={inputEvent} name='email' value={data.email}
                                            placeholder='Email' />
                                        <label>Email Address</label>
                                    </div>
                                    <div className='form-floating mb-3'>
                                        <textarea className='form-control h-100' onChange={inputEvent} name='message' value={data.message}
                                            placeholder='Leave a message here'></textarea>
                                        <label>Message</label>
                                    </div>
                                    <button type='submit' className='btn btn-outline-secondary shadow-sm'>Submit Here</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;
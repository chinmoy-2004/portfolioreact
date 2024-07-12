import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Importing the email icon from react-icons
import { Link } from 'react-router-dom';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!name) {
            validationErrors.name = 'Name is required';
        }

        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Handle form submission (e.g., send the data to a server)
            console.log('Form submitted', { name, email, message });
        }
    };

    return (
        <div className="p-6 bg-slate-800 w-full h-full">
            <Link to='mailto:dude050504@gmail.com'>
                <div className="flex items-center mb-6 text-white cursor-pointer hover:bg-gray-700 hover:text-blue-500 p-2 rounded-lg transition">
                    <FaEnvelope className="mr-2 " /> {/* Email icon */}
                    <span>dude050504@gmail.com</span> {/* Your email */}
                </div>
            </Link>
            <form className="flex flex-col gap-6 justify-center items-center" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <textarea 
                    placeholder="Your Message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-56 md:h-64 w-full"
                ></textarea>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 w-56"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;
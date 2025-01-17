
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(''); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const dataToSend = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        reply_to: "sanjeevcsevec@gmail.com"
    };

    const submit = (e) => {
        e.preventDefault();
        setStatus(''); 

        emailjs.send('service_qzbl0kk', 'template_84autmf', dataToSend, 'DVEC9c-vms-wW03lo').then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            },
            (error) => {
                console.log('FAILED...', error);
                setStatus('Failed to send message. Please try again later.');
            }
        );
    };

    return (
        <>
            <Element className="flex flex-col justify-center items-center "style={{minHeight:"90vh"}} name="contact-section">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-300 to-purple-400">
                    Contact Me
                </h1>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh_-_155px)]   w-3/4 lg:py-0">
                    <div className="w-full bg-opacity-60 bg-gray-50 rounded-lg shadow-md shadow-blue-300 dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-opacity-70 rounded-md">
                            {/* Contact Form */}
                            <form className="space-y-1 md:space-y-1" onSubmit={submit}>
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                                        placeholder="Sanjeev Kumar"
                                        value={formData.name}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                                        placeholder="name@gmail.com"
                                        value={formData.email}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-white">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg mb-2 focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                                        placeholder="Type your message here"
                                        value={formData.message}
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Send Message
                                </button>
                            </form>
                            {/* Status Message */}
                            {status && (
                                <p className={`text-center mt-4 text-sm ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                                    {status}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contact;

// Contact page - Learning about form handling and events
import { useState } from 'react';

function Contact() {
    // State to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload
        setSubmitted(true);

        // In a real app, you'd send this data to a server
        console.log('Form Data:', { name, email, message });
    };

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">This form teaches you about handling user input and events</p>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                    <div>
                        <label className="block font-semibold mb-2">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-2">Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="4"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="bg-green-100 p-6 rounded-lg max-w-md">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">Thank you, {name}! 🎉</h2>
                    <p>We received your message and will get back to you at {email}</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send Another Message
                    </button>
                </div>
            )}
        </div>
    );
}

export default Contact;

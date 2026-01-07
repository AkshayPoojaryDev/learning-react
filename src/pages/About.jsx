// About page - Learning about props and components

function About() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">About React</h1>

            <div className="space-y-4">
                <p className="text-lg">
                    React is a JavaScript library for building user interfaces.
                </p>

                <h2 className="text-2xl font-semibold mt-6">Key Concepts:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Components:</strong> Reusable pieces of UI</li>
                    <li><strong>Props:</strong> Data passed to components</li>
                    <li><strong>State:</strong> Data that changes over time</li>
                    <li><strong>Hooks:</strong> Functions like useState, useEffect</li>
                </ul>
            </div>
        </div>
    );
}

export default About;

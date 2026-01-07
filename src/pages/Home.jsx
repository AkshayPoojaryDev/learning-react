// Step 1: Import React and the useState hook
// useState is a "hook" that lets us add state to our component
import { useState } from 'react';

// Step 2: Create a component called Home
// Components are just JavaScript functions that return JSX (HTML-like code)
function Home() {
    // Step 3: Create a state variable called "count"
    // useState(0) means the initial value is 0
    // count = the current value
    // setCount = a function to update the value
    const [count, setCount] = useState(0);

    // Step 4: Create a function to handle button clicks
    // This will increase the count by 1
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    // Step 5: Return JSX (what gets displayed on screen)
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to React Learning! 🎉</h1>

            <div className="bg-blue-100 p-6 rounded-lg max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Counter Example</h2>
                <p className="mb-4">This teaches you about STATE in React</p>

                {/* Display the current count */}
                <div className="text-6xl font-bold text-blue-600 text-center mb-6">
                    {count}
                </div>

                {/* Buttons that call our functions when clicked */}
                <div className="flex gap-2">
                    <button
                        onClick={handleDecrement}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        - Decrease
                    </button>

                    <button
                        onClick={handleReset}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Reset
                    </button>

                    <button
                        onClick={handleIncrement}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        + Increase
                    </button>
                </div>
            </div>

            {/* Let's show a message based on the count */}
            <div className="mt-6">
                {count > 10 && (
                    <p className="text-green-600 font-bold">🎉 Great job! You've clicked more than 10 times!</p>
                )}
                {count < 0 && (
                    <p className="text-red-600 font-bold">📉 Negative numbers!</p>
                )}
            </div>
        </div>
    );
}

// Step 6: Export the component so we can use it elsewhere
export default Home;

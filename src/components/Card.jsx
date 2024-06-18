import React, { useState } from 'react';
import { CalAvg } from './CalAvg'; // Import the CalAvg function
import calimg from "../assets/calculator_PNG102236.png"

export default function Card() {
    const [inputValue, setInputValue] = useState('');
    const [average, setAverage] = useState(null);
    const [error, setError] = useState('');
    const handleCalculateAverage = () => {
        try {
            const avg = CalAvg(inputValue);
            setAverage(avg);
            setError('');
        } catch (error) {
            setError(error.message);
            setAverage(null);
        }
    };
    const handleCancel = () => {
        setInputValue('');
        setAverage(null);
        setError('');
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen p-10">
            <div className="md:w-1/2 mb-14 md:mb-1/2 text-white">
                <h2 className="text-2xl font-bold mb-4">About the Calculator</h2>
                <p>This calculator allows you to quickly and easily compute the average of a set of numbers.<br/> Simply enter your numbers separated by commas, and the average will be calculated for you. <br/> It's a useful tool for students, teachers, and anyone who needs to perform quick average calculations.</p>
            </div>
            <div className="md:w-1/2 p-5 border-solid border-4 border-rose-500 rounded-lg  bg-violet-200 shadow-2xl">
                <div className="flex justify-center">
                    <img src={calimg} alt="Calculator" className="w-24 h-24 mb-3 mt-5" />
                </div>
                <h5 className="text-lg font-bold text-center mb-3">Calculate Average of Numbers</h5>
                <div className="text-center mb-5">
                    <label htmlFor="commaSeparatedNumbers" className="block text-gray-700 mb-2">Enter comma-separated numbers:</label>
                    <input
                        type="text"
                        id="commaSeparatedNumbers"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="e.g., 1, 2, 3"
                    />
                </div>
                <div className="text-center mb-5">
                    {error && <p className="text-red-500">{error}</p>}
                    {average !== null && !error && (
                        <p className="text-gray-1000">Average: {average}</p>
                    )}
                </div>
                <div className="mt-5 text-center">
                    <button onClick={handleCalculateAverage} className="px-5 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">Calculate Average</button>
                </div>
                <div className="mt-5 text-center">
                    <button onClick={handleCancel} className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">Cancel</button>
                </div>
            </div>
        </div>
    );
}

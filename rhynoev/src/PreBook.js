import React from 'react';
import './PreBook.css';

const PreBook = () => {
    return (
        <div className="pre-book">
            <h1>Pre-Book Your Ride</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="model">Choose Model:</label>
                <select id="model" name="model" required>
                    <option value="se03-lite">SE03 Lite</option>
                    <option value="se03">SE03</option>
                    <option value="se03-max">SE03 Max</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PreBook;

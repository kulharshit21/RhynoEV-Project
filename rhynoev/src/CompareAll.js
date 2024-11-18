import React from 'react';
import './CompareAll.css';

const CompareAll = () => {
    return (
        <div className="compare-all">
            <h1>Compare All Models</h1>
            <table>
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Rhyno SE03 Lite</th>
                        <th>Rhyno SE03</th>
                        <th>Rhyno SE03 Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Battery</td>
                        <td>1.8Kwh</td>
                        <td>2.7Kwh</td>
                        <td>2.7Kwh</td>
                    </tr>
                    <tr>
                        <td>Battery Features</td>
                        <td>LFP with 1500 cycles<br/>Active Balancing<br/>Waterproof (IP67)</td>
                        <td>LFP with 1500 cycles<br/>Active Balancing<br/>Waterproof (IP67)</td>
                        <td>LFP with 1500 cycles<br/>Active Balancing<br/>Waterproof (IP67)</td>
                    </tr>
                    <tr>
                        <td>Battery Warranty</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>3 years</td>
                    </tr>
                    <tr>
                        <td>Charging Time</td>
                        <td>3 hours (12A)</td>
                        <td>4 hours (12A)</td>
                        <td>4 hours (12A)</td>
                    </tr>
                    <tr>
                        <td>Motor</td>
                        <td>1500W</td>
                        <td>1500W</td>
                        <td>2000W</td>
                    </tr>
                    <tr>
                        <td>Max Speed</td>
                        <td>55 km/h</td>
                        <td>55 km/h</td>
                        <td>65 km/h</td>
                    </tr>
                    <tr>
                        <td>Warranty on Electronics</td>
                        <td>1 year</td>
                        <td>1 year</td>
                        <td>1 year</td>
                    </tr>
                    <tr>
                        <td>Max Range (@30km/h)</td>
                        <td>100 km</td>
                        <td>150 km</td>
                        <td>120 km</td>
                    </tr>
                    <tr>
                        <td>Max Range (@45km/h)</td>
                        <td>90 km</td>
                        <td>110 km</td>
                        <td>100 km</td>
                    </tr>
                    <tr>
                        <td>Max Range (@Full Speed)</td>
                        <td>60 km</td>
                        <td>90 km</td>
                        <td>80 km</td>
                    </tr>
                    <tr>
                        <td>Other Key Benefits</td>
                        <td>Fire-safe Battery<br/>Range prediction<br/>Comfortable ride<br/>Stable and safe</td>
                        <td>Fire-safe Battery<br/>Range prediction<br/>Comfortable ride<br/>Stable and safe</td>
                        <td>Fire-safe Battery<br/>Range prediction<br/>Comfortable ride<br/>Stable and safe</td>
                    </tr>
                </tbody>
            </table>
            <button className="buy-now">Buy Now</button>
        </div>
    );
};

export default CompareAll;

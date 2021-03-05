import * as React from 'react';


export default function Card() {
    return (
    <div className="card">
    <h1>Elefant</h1>
    <img alt="Elefant" height="200" width="200"
    src={`${process.env.PUBLIC_URL}/placeholder.png`} />
    <table>
    <tbody>
    <tr><td>Grösse:</td><td>3.3m</td></tr>
    <tr><td>Gewicht:</td><td>3300 Kg</td></tr>
    <tr><td>Alter:</td><td>33</td></tr>
    </tbody>
    </table>
    </div>
    );

}
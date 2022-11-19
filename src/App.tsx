import React from 'react';
import './App.css';
import {TopCars} from "./Topcars";


const App = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <TopCars cars={topCars}/>
        </div>

    );
}

export default App;

//codigo de react.
//con estas dos lineas renderizamos la app
import React from 'react';
import reactDOM from 'react-dom/client';


// import { HolaMundo } from './HolaMundo';  
import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';
import './styles.css';

//renderizar el app
reactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* todo lo que definamos aca, son props,que se van al componente hijo */}
        {/* < CounterApp value={0} /> */}
        <FirstApp title="holaperra"/>
    </React.StrictMode>
)



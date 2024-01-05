import React, { useState } from 'react';

function Buscador() {
    const [busqueda, setBusqueda] = useState('');

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleBuscarClick = () => {
        console.log('Realizar búsqueda con:', busqueda);
    };

    return (
        <div className='flex items-center rounded-3xl bg-white p-2'>
            <button className=' rounded-full p-2 focus:outline-none' onClick={handleBuscarClick}>
                <img className='h-8' src="/imagenbg/lupa.png" alt="Buscar" />
            </button>
            <input
                type="text"
                placeholder="Ingrese su búsqueda"
                value={busqueda}
                onChange={handleBusquedaChange}
                className='ml-2 border-none focus:outline-none'
            />
        </div>

    );
}

export default Buscador;

import "./Breadcrumb.css";
import React from 'react'

const Breadcrumb = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                    <li className="breadcrumb-item"><a href="/category/:id">Relojes</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Hombres</li>
                </ol>
            </nav>
        </div>

    )
}

export default Breadcrumb
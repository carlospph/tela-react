 import React from 'react';
import { Link } from 'react-router-dom';
import './PagerError404.css'; 


const PagerError404 = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oops! A página que você está procurando não foi encontrada.</p>
            <p className="error-suggestion">Você pode voltar para:</p>
            <div className="error-links">
                <Link to="/" className="error-link">Página Inicial</Link>
             </div>
        </div>
    );
};

export default PagerError404;

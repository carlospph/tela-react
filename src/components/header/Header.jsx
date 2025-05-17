import { Link } from "react-router-dom";
 
export const Header = () => {

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="logo">ReactFlex</Link>
                <ul className="menu">
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
import './navbar.css'
import Logo from './Logo/Logo'
import CartWidget from "./CartWidget/CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Logo />
                <ul className="nav-menu">
                    <li className="nav-menu_item">
                        <Link to="/category/torta" className="nav-menu_link">Tortas</Link>
                    </li>
                    <li className="nav-menu_item">
                        <Link to="/category/tarta" className="nav-menu_link">Tartas</Link>
                    </li>
                    <li className="nav-menu_item">
                        <Link to="/category/postre" className="nav-menu_link">Postres</Link>
                    </li>
                </ul>
                <div className="cart-container">
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default NavBar

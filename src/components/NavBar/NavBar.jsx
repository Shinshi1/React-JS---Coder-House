import './navbar.css'
import Logo from './Logo/Logo'
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header className="header">
        <nav className="nav">
            <Logo />
            <ul className="nav-menu">
                <li className="nav-menu_item">
                    <a href="/" className="nav-menu_link">Tortas</a>
                </li>
                <li className="nav-menu_item">
                    <a href="/" className="nav-menu_link">Tartas</a>
                </li>
                <li className="nav-menu_item">
                    <a href="/" className="nav-menu_link">Postres</a>
                </li>
                {/* mover a otro UL lugar↓ */}
            </ul>
            <div className="cart-container">
                <CartWidget />
            </div>
        </nav>
    </header>
  )
}

export default NavBar

import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <a href="/">
                <h2>Postres La Creme</h2>
                </a>
            </li>
            <li>
                <a href="/">Tortas</a>
            </li>
            <li>
                <a href="/">Tartas</a>
            </li>
            <li>
                <a href="/">Postres</a>
            </li>
            <li>
                <CartWidget />
            </li>
        </ul>
    </nav>
  )
}

export default NavBar

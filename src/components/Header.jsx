import Logo from "../assets/starckai-logo.png"
import "./Header.css"
export const Header = () => {
  return (
    <header>
        <img className='logo' src={Logo} alt="Starckai Logo" />
        <a href="/">Home</a>
    </header>
  )
}

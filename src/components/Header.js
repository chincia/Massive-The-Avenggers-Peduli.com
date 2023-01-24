import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
// import "./src/image"

const Header = () => {

  const className=(path) => {
    if (window.location.pathname === path) return "active nav-link"
    return "nav-link"
  }
  // const imgStyle = {
  //   float: 'left'
  // }

  return (
    <Navbar bgcolor="#00ADB5" className="px-3">
      {/* <img style={imgStyle} src="2.png" alt="/image" /> */}
      <Nav className="text-right">
        <Link to={'/'} className={className('/')}>Whats On</Link>
        <Link to={'/program'} className={className('/program')}>Program</Link>
        <Link to={'/kampanye'} className={className('/kampanye')}>Kampanye</Link>
        <Link to={'/akun'} className={className('/akun')}>Akun</Link>
        <Link to={'/lainnya'} className={className('/lainnya')}>Lainnya</Link>
        <Link to={'/login'} className={className('/login')}>Sign In</Link>
      </Nav>
    </Navbar>
  )
}

export default Header
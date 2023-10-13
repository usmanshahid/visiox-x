import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import logoimage from "../images/logo.png"

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={logoimage} alt='logo' />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Test</div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/locations">Locations</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/managed-space-solution">Sponsorship</a>
        </li>
        <li>
          <a href="/partner-with-us">Partnership</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
      <div className="actions">
        <button className="login-button">Login</button>
        <button className="call-now-button">Call Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
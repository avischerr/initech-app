import '../styles.css';

const Footer = (props) => {
  return (
    <header className="navbar" id="footer">
      <br />
      <nav id="footer-nav">
        <ul id="footer-list">
          <li id="navbar-category">
            <a href="#">About</a>
            {/* <ul>
              <a href="#">Our History</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
            </ul> */}
          </li>
          <li id="navbar-category"><a href="#">What We Do</a></li>
          <li id="navbar-category"><a href="#">Our Clients</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Footer;
import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">

        <a className="navbar-brand" href="#">
          Joni Luttinen
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
                        <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
                        <li className="nav-item">
              <a className="nav-link" href="#projects">
                My Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
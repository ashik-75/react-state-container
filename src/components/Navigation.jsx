import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navigation = ({ setUser }) => {
  const { user, fetchData } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navigation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/"}>
                <span className="nav-link">Landing Page</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/posts"}>
                <span className="nav-link">Posts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/dashboard"}>
                <span className="nav-link">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/analytics"}>
                <span className="nav-link">Analytics</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/admin"}>
                <span className="nav-link">Admin</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </li>
          </ul>

          <div className="d-flex gap-5">
            {!user ? (
              <button onClick={() => fetchData()} className="btn btn-primary">
                Login
              </button>
            ) : (
              <span>{user?.name}</span>
            )}

            <button onClick={() => setUser(null)} className="btn btn-secondary">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

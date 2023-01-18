import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="divv">
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Library mangement</NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" to="/employees/add">Add People </NavLink>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header;
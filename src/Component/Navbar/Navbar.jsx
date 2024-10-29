import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/login">Login with Google</Link>
        </div>
    );
};

export default Navbar;
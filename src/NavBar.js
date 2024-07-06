import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">THE BLOG</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create' style={{
                    color:"#fff",
                    backgroundColor:'#f1356d',
                    borderRadius:'6px',
                    marginLeft: '20px',
                    padding: '10px'
                }}>New Blog</Link>
            </div >
        </nav>

    );
}

export default NavBar;
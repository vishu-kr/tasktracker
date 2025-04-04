import "./Navbar.css"
const Navbar = () => {
    return <>
        <div className="navbar">
            <h2>Task Tracker</h2>
            <div>
                <ul className="menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Feature</a></li>
                </ul>
            </div>
        </div>
    </>
}
export default Navbar;

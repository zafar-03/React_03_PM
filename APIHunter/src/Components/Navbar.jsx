import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="list">
            <ul>
                <Link to='/'>
                    <li>Display Data</li>
                </Link>
                <Link to='/api'>
                    <li>Control Data</li>
                </Link>
            </ul>
        </div>
    )
}


export default Navbar;
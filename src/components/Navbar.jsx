import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-indigo-700 p-5">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold flex items-center">
                    <i className="fab fa-react mr-2"></i>React Jobs
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-white hover:text-indigo-300">Home</Link></li>
                        <li><Link to="/jobs" className="text-white hover:text-indigo-300">Jobs</Link></li>
                        <li><Link to="/jobs/add" className="text-white hover:text-indigo-300">Add Job</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Navbar;
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ?
        'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2':
        'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    return (
        <header className="bg-indigo-700 p-5">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold flex items-center">
                    <i className="fab fa-react mr-2"></i>React Jobs
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                        <li><NavLink to="/jobs" className={linkClass}>Jobs</NavLink></li>
                        <li><NavLink to="/jobs/add" className={linkClass}>Add Job</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Navbar;
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Link = <>
        <li> <NavLink to='/'>Home</NavLink> </li>  
        <li> <NavLink to='/tution'>Tution</NavLink> </li> 
        <li> <NavLink to='/job'>Job</NavLink> </li> 
        <li> <NavLink to='/course'>Courses</NavLink> </li>
    </>
    return (
        <div className="navbar bg-base-100 relative z-10 container mx-auto">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Link}
                    </ul>
                </div> */}
                <a className="text-4xl font-bold">Tutor Point</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {Link}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a href="/teacherLogin"><button type="button" className="px-4 py-2 font-semibold border rounded border-gray-800 text-gray-800">Teacher Login</button></a>
                <a href="/studentLogin"><button type="button" className="px-4 py-2 font-semibold border rounded border-gray-800 text-gray-800">Student Login</button></a>
            </div>

        </div>
    );
};

export default Navbar;
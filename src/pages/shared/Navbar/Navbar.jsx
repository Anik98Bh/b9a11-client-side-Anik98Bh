import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import useAuth from "../../../hooks/useAuth/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('luxury')
        }
        else {
            setTheme('light')
        }
    }
    console.log(theme);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Home">
            <li><NavLink to="/" className="font-acma">Home</NavLink></li>
        </a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Queries">
            <li><NavLink to="/queries" className="font-acma">Queries</NavLink></li>
        </a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Recommendations
            For Me">
            {user && <li><NavLink to="/recommendationsForMe" className="font-acma">Recommendations
                For Me</NavLink></li>}
        </a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="My Queries ">
            {user && <li><NavLink to="/myQueries" className="font-acma">My Queries </NavLink></li>}
        </a>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="My recommendations ">
            {user && <li><NavLink to="/myRecommendation" className="font-acma">My recommendations </NavLink></li>}
        </a>

        <Tooltip id="my-tooltip" />
    </>

    return (
        <div className="navbar rounded  px-5 animate__animated animate__fadeInLeft">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-acma"><span className="text-red-500">A$</span> Alternative Stocks</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end mr-5 gap-9">
                {/* theme change */}
                <div className="">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle}
                            type="checkbox"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                {/* profile */}
                {
                    user?.email ? <div className="dropdown dropdown-end dropdown-hover">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                <img src={
                                    user.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rlHILcxkNp4iwSUhRCeGjQAnZcisSGs9txj5d4FvFr782-NoItG0iDd0GD0eK4WITxU&usqp=CAU'
                                } />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost">
                                    {user?.displayName || user?.email}
                                </button>
                            </li>
                            <li>
                                <button onClick={handleSignOut} className="btn btn-sm btn-ghost">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                        :
                        <Link to="/login">
                            <button className="btn btn-sm bg-green-500 text-white font-bold">
                                Login
                            </button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
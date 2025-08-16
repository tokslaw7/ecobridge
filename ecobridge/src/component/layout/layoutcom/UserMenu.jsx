import React from 'react'
import {Link, Route, useLocation, useNavigate} from 'react-router-dom'
import siteLinks from '../../../links/siteLinks'
import { IoIosArrowDown } from 'react-icons/io'
import HomePage from "../../../views/HomePage.jsx";
export default function UserMenu() {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate(siteLinks.login, {replace: true})
        window.location.reload()
    }

    return (
        <>
            <div className="sidebar-nav scrollbar scroll_dark">
                <ul className="metismenu " id="sidebarNav">
                    <li className="nav-static-title">Panel</li>
                    <li className={`${pathname == siteLinks.dash ? 'active' : ''}`}>
                        <Link className="has-arrow" to='#' data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="nav-icon ti ti-rocket"></i>
                            <div className='d-flex gap-2 justify-content-between align-items-center'>
                                <span className="nav-title">Dashboard</span>
                                <IoIosArrowDown />
                            </div>
                            {/* <span className="nav-label label label-danger">9</span> */}
                        </Link>
                        <ul id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#sidebarNav">
                            <li className={`${pathname == siteLinks.dash ? 'active' : ''}`}><Link to={siteLinks.dash}>Home</Link></li>
                            <li className={`${pathname == siteLinks.music ? 'active' : ''}`}><Link to={siteLinks.music}>Music</Link></li>
                            <li className={`${pathname == siteLinks.activity ? 'active' : ''}`}><Link to={siteLinks.activity}>Activity</Link></li>
                            <li className={`${pathname == siteLinks.storytelling ? 'active' : ''}`}><Link to={siteLinks.storytelling}>Story Telling</Link></li>
                            <li className={`${pathname == siteLinks.contact ? 'active' : ''}`}><Link to={siteLinks.contact}>Contact</Link></li>
                            <li className={`${pathname == siteLinks.comments ? 'active' : ''}`}><Link to={siteLinks.comments}>Comments</Link></li>
                        </ul>
                    </li>
                    <li className={`${pathname == siteLinks.reports ? 'active' : ''}`}>
                        <Link to={siteLinks.reports} aria-expanded="false"><i className="nav-icon ti ti-comment">
                            </i><span className="nav-title">Reports</span>
                        </Link>
                    </li>
                    <li className={`${pathname == siteLinks.error ? 'active' : ''}`}>
                        <Link className="has-arrow" to='#' data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="nav-icon ti ti-calendar"></i>
                            <div className='d-flex gap-2 justify-content-between align-items-center'>
                                <span className="nav-title">Account</span>
                                <IoIosArrowDown />
                            </div>
                        </Link>
                        <ul id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#sidebarNav">
                            <li className={`${pathname == siteLinks.user ? 'active' : ''}`}><Link to={siteLinks.user}>Users</Link></li>
                            <li className={`${pathname == siteLinks.settings ? 'active' : ''}`}><Link to={siteLinks.settings}>Settings</Link></li>
                        </ul>
                    </li>


                    <li className="sidebar-banner p-4 bg-gradient text-center m-3 d-block rounded">
                        <h5 className="text-white mb-1">EcoBridge</h5>
                        <Link className="btn btn-square btn-inverse-light btn-xs d-inline-block mt-2 mb-0" to='' onClick={logout}> Log Out</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

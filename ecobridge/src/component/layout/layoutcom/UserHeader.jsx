import React from "react";
import getImage from "../../../utils/getImage";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import siteLinks from "../../../links/siteLinks";


export default function UserHeader(){

    const { userDetails } = useSelector((state) => state?.userDetails); // CHECKS IF USER Details are avaliable, to determine if user is active

    const toggleSidebar = (e) => {
        e.preventDefault()
        document.body.classList.toggle('sidebar-toggled')
        document.querySelector('.navbar-collapse').classList.remove('show')
    }

    const removeSidebar = (e) => {
        e.preventDefault()
        document.body.classList.remove('sidebar-toggled')
    }

    // const toggleSidebarMini = (e) => {
    //     e.preventDefault()
    // }

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate(siteLinks.login, {replace: true})
        window.location.reload()
    }

    return (
        <header className="app-header top-bar">
            <nav className="navbar navbar-expand-md">
                <div className="navbar-header d-flex align-items-center">
                    <a href="#" onClick={toggleSidebar} className="mobile-toggle"><i className="ti ti-align-right"></i></a>
                    <a className="navbar-brand" href="/dash">
                        <img src={getImage('EcoBridge_logo.png')} className="img-fluid logo-desktop" alt="logo"/>
                        <img src={getImage('EcoBridge_logo.png')} className="img-fluid logo-mobile" alt="logo"/>
                    </a>
                </div>
                <button onClick={removeSidebar} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <i className="ti ti-align-left"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navigation d-flex align-items-center">
                        <ul className="navbar-nav nav-left">
                            <h4 className="text-info pt-1">{userDetails?.account_name}</h4>
                           {/* <li className="nav-item">
                               <a href="#" className="nav-link sidebar-toggle">
                                   <i className="ti ti-align-right"></i>
                               </a>
                           </li> */}

                           {/* <li className="nav-item full-screen d-none d-lg-block" id="btnFullscreen">
                               <a href="#" className="nav-link expand">
                                   <i className="icon-size-fullscreen"></i>
                               </a>
                           </li> */}
                        </ul>

                        <ul className="navbar-nav nav-right ml-auto">
                            <li className="nav-item user-profile">
                                <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                    <img src={getImage('avtar/02.jpg')} alt="avtar-img" />
                                    <span className="bg-success user-status"></span>
                                </a>
                                <div className="dropdown-menu animated fadeIn">
                                    <div className="bg-gradient px-4 py-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="mr-1">
                                                <h5 className="text-white mb-0">{userDetails?.firstname} {userDetails?.lastname}</h5>
                                                <small className="text-white">{userDetails.email}</small>
                                            </div>
                                            <a href="#" onClick={logout} className="text-white font-20 tooltip-wrapper" data-toggle="tooltip"
                                               data-placement="top" title="" data-original-title="Logout"> <i
                                                className="zmdi zmdi-power"></i></a>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <Link className="dropdown-item d-flex nav-link" to={siteLinks.user}>
                                            <i className="fa fa-user pr-2 text-success"></i> Users</Link>
                                        <Link className="dropdown-item d-flex nav-link" to={siteLinks.contact}>
                                            <i className="fa fa-envelope pr-2 text-primary"></i> Contact
                                            <span className="badge badge-primary ml-auto">6</span>
                                        </Link>
                                        <Link className="dropdown-item d-flex nav-link" to={siteLinks.settings}>
                                            <i className=" ti ti-settings pr-2 text-info"></i> Settings
                                        </Link>
                                        <a className="dropdown-item d-flex nav-link" href="#">
                                            <i className="fa fa-compass pr-2 text-warning"></i> Need help?</a>

                                        {/*<div className="row mt-2">*/}
                                        {/*    <div className="col">*/}
                                        {/*        <a className="bg-light p-3 text-center d-block" href="#">*/}
                                        {/*            <i className="fe fe-mail font-20 text-primary"></i>*/}
                                        {/*            <span className="d-block font-13 mt-2">My messages</span>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col">*/}
                                        {/*        <a className="bg-light p-3 text-center d-block" href="#">*/}
                                        {/*            <i className="fe fe-plus font-20 text-primary"></i>*/}
                                        {/*            <span className="d-block font-13 mt-2">Compose new</span>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )

}
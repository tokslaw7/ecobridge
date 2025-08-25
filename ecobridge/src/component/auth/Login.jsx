import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'


import { Link, useNavigate } from 'react-router-dom'
import siteLinks from '../../links/siteLinks'
import { loginUser } from '../../services/services'
import { updateUserDetails } from '../../store/UserDetails'

import GoogleDownload from '../../assets/img/download/andriod.jpg'
import IOSDownload from '../../assets/img/download/apple.jpg'

export default function Login() {

    const { userDetails: { token, room }} = useSelector((state) => state?.userDetails); // CHECKS IF USER Details are avaliable, to determine if user is active
    let loggedIn = token && room ? true : false; // variable to determine if user is logged in

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [fields, setFields] = useState({
        username: '',
        password: '',
        remember: false
    })

    const handleChange = ({target:{name, value}}) => {
        if(name == 'remember'){
            return setFields(prev => ({...prev, remember:!prev.remember}))
        }
        setFields(prev => ({...prev, [name]:value}))
    }

    const login = useMutation({
        mutationFn: (fields) => {
            if(!fields.username || !fields.password){
                throw new Error('Please provide all fields marked *')
            }
            rememberMe(fields.remember) // FUNCTION TO SAVE USERNAME OF THE USER TO LOCAL STORAGE
            delete fields.remember // REMOVING REMEMBER FROM THE PAYLOAD
            return loginUser(fields)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (res) => {
            if(res?.data?.error_message){
                throw({message: res?.data?.error_message})
            }
            const {token, room, uid} = res?.data
            if(!token || !room){
                throw({message: 'something went wrong, try again!'})
            }
            localStorage.setItem('token', token)
            localStorage.setItem('room', room)
            localStorage.setItem('uid', uid)
            dispatch(updateUserDetails({ ...res?.data }));
            navigate('/dash') // later add redux to dispatch state
        }
    })

    const rememberMe = (checked) => {
        if(checked){
            localStorage.setItem('username', fields.username)
        }else{
            localStorage.removeItem('username')
        }
    }

    useEffect(()=>{ // NAVIGATES USER TO HOME PAGE IF USER IS ACTIVE
        if(loggedIn){
            navigate(siteLinks.dash)
        }
    },[])

    return (
        <div className="app">
            <div className="app-wrap">
                <div className="app-contant">
                    <div className="vh-100 custom-bg">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters justify-content-center">
                                <div className="col-11 col-sm-6 col-lg-5 col-xxl-4 align-self-center order-2 order-sm-1" style={{maxWidth: '520px'}}>
                                    <div className="mt-5 d-flex">
                                        <div className="bg-white register px-5 pt-5 pb-3">
                                            <h1 className="mb-2">EcoBridge</h1>
                                            <p>Welcome back, please login to your account.</p>
                                            <form className="mt-3 mt-sm-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label className="control-label text-black fw-bold">User Name*</label>
                                                            <input maxLength={55} name='username' value={fields.username} onChange={handleChange} type="text" className="form-control" placeholder="Username" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label className="control-label text-black fw-bold">Password*</label>
                                                            <input maxLength={55} name='password' value={fields.password} onChange={handleChange} type="password" className="form-control" placeholder="Password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="d-block d-sm-flex  align-items-center">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="gridCheck" name='remember' checked={fields.remember || false} onChange={handleChange} disabled={!fields.username ? true : false} />
                                                                <label className="form-check-label text-black" htmlFor="gridCheck">
                                                                    Remember Me
                                                                </label>
                                                            </div>
                                                            <Link to={siteLinks.forgetpwd} className="ml-auto">Forgot Password ?</Link>
                                                        </div>
                                                    </div>
                                                    {login.error &&
                                                    <>
                                                        <div className="col-12">
                                                            <p className='text-danger'>{login.error.message}</p>
                                                        </div>
                                                    </>
                                                    }
                                                    <div className="col-12 mt-3 text-end">
                                                        <button type='button' onClick={()=>{login.mutate(fields)}} className="btn btn-primary text-uppercase">{login.isPending ? 'loading...' : 'Sign In'}</button>
                                                    </div>
                                                    <div className="col-12  mt-3">
                                                        <p>Don't have an account ?<Link to={siteLinks.signup}><span style={{fontWeight: 'bolder'}}>Sign Up</span></Link></p>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="row" style={{marginTop: '20px'}}>
                                                <div className="col-6">
                                                    <div className="app-store-icons-wrap text-center">
                                                        <a className="icon google"
                                                           href='#' >
                                                            <img src={IOSDownload} className='w-80 h-auto' alt='IOS Download' />
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="app-store-icons-wrap text-center">
                                                        <a className="icon apple"  href='#'>
                                                            <img src={GoogleDownload} className='w-80 h-auto' alt='IOS Download' />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="login-links">
                                                {/*<a href={process.env.REACT_APP_HOME_LINK}>Home</a>*/}
                                                {/*<a href={process.env.REACT_APP_ABOUT_LINK}>About</a>*/}
                                                {/*<a href={process.env.REACT_APP_CONTACTS_LINK}>Contact</a>*/}
                                                {/*<a href={process.env.REACT_APP_TERMS_LINK}>Terms</a>*/}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <div className="custom-bg col-sm-6 col-xxl-9 col-lg-7 b-gradient o-hidden order-1 order-sm-2">
                                <div className="row align-items-center h-100">
                                    <div className="col-7 mx-auto ">
                                        <img className="img-fluid" src={LoginImg} alt="" />
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

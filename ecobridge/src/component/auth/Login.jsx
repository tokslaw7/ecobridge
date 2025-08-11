import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'

// import LoginImg from '../../assets/bg/login.svg'

import { Link, useNavigate } from 'react-router-dom'
import siteLinks from '../../links/siteLinks'
import { loginUser } from '../../services/services'
import { updateUserDetails } from '../../store/UserDetails'

import GoogleDownload from '../../assets/img/download/andriod.jpg'
import IOSDownload from '../../assets/img/download/apple.jpg'

export default function Login() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [fields, setFields] = useState({
    username: localStorage.getItem('username') || '',
    password: '',
    remember: localStorage.getItem('username') ? true : false
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
        return loginUser(fields)
    },
    onError: (error) => {
        console.log(error)
    },
      onSuccess: (res) => {
        const {token, room} = res?.data?.data
        if(token){
            localStorage.setItem('token', token)
            localStorage.setItem('room', room)
            // const data = {token}
            // dispatch(updateUserDetails({ ...data }));
            navigate('/dash') // later add redux to dispatch state
        }
    }
  })

  const rememberMe = (checked) => {
    if(checked){
        localStorage.setItem('username', fields.username)
    }else{
        localStorage.removeItem('username')
    }
  }

  return (
    <div className="app">
        <div className="app-wrap">
            <div className="app-contant">
                <div className="vh-100 custom-bg">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-11 col-sm-6 col-lg-5 col-xxl-3 align-self-center order-2 order-sm-1">
                                <div className="mt-5 d-flex">
                                    <div className="bg-white register px-5 pt-5 pb-3">
                                        <h1 className="mb-2">MERMS Panel</h1>
                                        <p>Welcome back, please login to your account.</p>
                                        <form className="mt-3 mt-sm-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="control-label text-black fw-bold">User Name*</label>
                                                        <input name='username' value={fields.username} onChange={handleChange} type="text" className="form-control" placeholder="Username" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="control-label text-black fw-bold">Password*</label>
                                                        <input name='password' value={fields.password} onChange={handleChange} type="password" className="form-control" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-block d-sm-flex  align-items-center">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="gridCheck" name='remember' checked={fields.remember} onChange={handleChange} disabled={!fields.username ? true : false} />
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
                                                    <p>Don't have an account ?<Link to={siteLinks.signup}> Sign Up</Link></p>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row" style={{marginTop: '20px'}}>
                                            <div className="col-6">
                                                <div className="app-store-icons-wrap text-center">
                                                    <a className="icon google"
                                                        href='#' >
                                                        <img src={IOSDownload} className='w-100 h-auto' alt='IOS Download' />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="app-store-icons-wrap text-center">
                                                    <a className="icon apple"  href='#'>
                                                        <img src={GoogleDownload} className='w-100 h-auto' alt='IOS Download' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="login-links">
                                            <a href={process.env.REACT_APP_HOME_LINK}>Home</a>
                                            <a href={process.env.REACT_APP_ABOUT_LINK}>About</a>
                                            <a href={process.env.REACT_APP_CONTACTS_LINK}>Contact</a>
                                            <a href={process.env.REACT_APP_TERMS_LINK}>Terms</a>
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

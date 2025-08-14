import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from 'react-router-dom'
import { updateUserDetails } from "../../store/UserDetails";
import MainLoaderBS from '../loaders/MainLoaderBS'
import Layout from '../layout/Layout'
import siteLinks from '../../links/siteLinks'

import debounceFunction from '../../utils/debounceFunction'
import { accountDashboard } from '../../services/services';
import { SocketContextValues } from '../context/SocketIOContext';


export default function UserExist() {

    const {joinRoom} = SocketContextValues() // Destructures values from socket context

    const navigate = useNavigate()
  
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    
    const [lastActivityTime, setLastActivityTime] = useState(Date.now()); // HOLDS THE INITIAL TIME USER LOGS IN

    const { userDetails: { lastname }} = useSelector((state) => state?.userDetails); // CHECKS IF USER Details are avaliable, to determine if user is active
  
    let loggedIn = lastname ? true : false; // variable to determine if user is logged in
    // console.log('loggedIn', loggedIn)
  
    // Function to log the user out
    const logoutUser = () => {
      localStorage.clear()
      navigate(siteLinks.login)
      window.location.reload()
    };
  
    // Function to reset the activity time
    const resetTimer = () => {
      debounceFunction(setLastActivityTime(Date.now()), 1000)
    };

    useEffect(()=>{
      const timer = setTimeout(()=>{
        if(Date.now() - Number(lastActivityTime) >= Number()){
          logoutUser()
        }
      }, Number()) //Number(process.env.REACT_APP_TIMEOUT))

      // Listen for activity events
      const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];

      // Adding event listeners
      events.forEach(event => {
        window.addEventListener(event, resetTimer);
      });
      
      return () => {
        clearTimeout(timer)
        events.forEach(event => {
          window.removeEventListener(event, resetTimer);
        })
      }
    },[lastActivityTime])

    useEffect(()=>{
      accountDashboard().then(res => {
        const {dash_data} = res?.data
        setLoading(false)
        dispatch(updateUserDetails({ ...dash_data }));
      }).catch(err => {
        navigate(siteLinks.login)
        setLoading(false)
      })
    },[])
  
  
    // useEffect(()=>{
    //   let token = localStorage.getItem('token')
    //   const timer = setTimeout(()=>{
    //     if(token && loggedIn){
    //       setLoading(false)
    //     }else if(token && !loggedIn){
    //       const data = {token}
    //       dispatch(updateUserDetails({ ...data }));
    //       setLoading(false)
    //       // dispatch(updateUserDetails({ ...res.data }));
    //     }else{
    //       navigate('auth/login')
    //     }
    //   },1000)
  
    //   return () => clearTimeout(timer)
    // },[])

    useEffect(()=>{
      if(localStorage.getItem('room')){
        joinRoom(localStorage.getItem('room'));
        joinRoom("merms_global_events"); // global room for all
      }
    },[])

  return (
    <>
    {loading ? 
        <MainLoaderBS />
        :
        <Layout>
          <Outlet />
        </Layout>
    }
    </>
  )
}

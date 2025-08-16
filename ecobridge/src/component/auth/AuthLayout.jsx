import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainLoaderBS from '../loaders/MainLoaderBS'

export default function AuthLayout() {

    const [loading, setLoading] = useState(true)
  
    useEffect(()=>{
      const timer = setTimeout(()=>{
          setLoading(false)
      },500)
  
      return () => clearTimeout(timer)
    },[])
  return (
    <div className="bg-white">
        {loading ? 
        <MainLoaderBS />
        :
        <Outlet />
        }
    </div>
  )
}

import {useEffect} from 'react'
import { useMutation } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import MainLoaderBS from '../loaders/MainLoaderBS'

// import { userToken } from '../../services/services' //

import  { userToken } from '../../services/services'

export default function BearerToken() {
    const bearerToken = useMutation({
        mutationFn: (fields) => {
            return userToken(fields)
        },
        onError: (error) => {
            console.log(error)
            // window.location.reload(true)
        },
        onSuccess: (res) => {
            if(res?.data?.resultCode != '0'){
                throw({message: 'Something went wrong'})
            }
            const {access_token, refresh_token} = res?.data?.data
            if(access_token){
                localStorage.setItem('access_token', access_token)
            }else{
                throw({message: 'Something went wrong'})
            }
        }
    })

    useEffect(()=>{
        let reqData = {
            "username": "user",
            "password": "password"
        }
        bearerToken.mutate(reqData)
    },[])

    return (
        <>
            {bearerToken.isPending  ?
                <MainLoaderBS />
                :
                <Outlet />
            }
        </>
    )
}
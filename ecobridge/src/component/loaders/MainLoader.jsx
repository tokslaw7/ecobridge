import React from 'react'
import Loader from '../../assets/loader/loader.svg'

export default function MainLoader() {
  return (

        <div className="h-screen flex justify-center">
            <div className="self-center">
                <img src={Loader} alt="loader" />
            </div>
        </div>
  )
}

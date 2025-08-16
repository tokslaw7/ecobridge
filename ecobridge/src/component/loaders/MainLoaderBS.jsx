import React from 'react'
import Loader from '../../assets/loader/loader.svg'

export default function MainLoaderBS() {
  return (
    <div className="loader">
        <div className="vh-100 d-flex justify-content-center">
            <div className="align-self-center">
                <img src={Loader} alt="loader" />
            </div>
        </div>
    </div>
  )
}

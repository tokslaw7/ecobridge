import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MainLoaderBS from '../loaders/MainLoaderBS'
import Layout from '../layout/Layout'
import siteLinks from "../../links/siteLinks.js";

export default function UserExist2() {
    const [ isLoading ] = useState(true);

    const navigate = useNavigate();

    navigate(siteLinks.login22)

    return (
        <>
            {isLoading ?
                <MainLoaderBS />
                :
                <Layout>
                    <Outlet />
                </Layout>
            }
        </>
    )
}

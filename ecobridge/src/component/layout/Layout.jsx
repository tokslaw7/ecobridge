import React from 'react'
import UserMenu from "./layoutcom/UserMenu";
import UserHeader from "./layoutcom/UserHeader";
import UserFooter from "./layoutcom/UserFooter";
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
      <div className="app">
        <div className="app-wrap">
          <UserHeader />
          <div className="app-container">
            <aside className="app-navbar">
              <UserMenu />
            </aside>
            <div className="app-main" id="main">
              <div className="container-fluid">
                <Outlet />
              </div>
            </div>
          </div>
          <UserFooter />
        </div>
      </div>
  )
}

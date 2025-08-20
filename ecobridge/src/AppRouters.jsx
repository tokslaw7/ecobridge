import { Routes, Route } from 'react-router-dom';

import UserExist from './component/authorization/UserExist';
import AuthLayout from './component/auth/AuthLayout';
import siteLinks from './links/siteLinks';
import BearerToken from './component/authorization/BearerToken';
// import LoginPage from './views/LoginPage';
import LoginPage2 from './views/LoginPage2';
import DashboardPage from './views/DashboardPage';
import MusicPage from './views/MusicPage';
import ActivityPage from './views/ActivityPage';
import AboutPage from './views/AboutPage';
// import SignupPage from './views/SignupPage';
// import ForgetpwdPage from './views/ForgetpwdPage';
import HomePage from './views/HomePage';
import ContactPage from './views/ContactPage'
import SocketIOContextProvider from './component/context/SocketIOContext';
import StoryTellingPage from "./views/StoryTellingPage";
import Layout from "./component/layout/Layout.jsx";
import LandingPage from "./views/LandingPage.jsx";

import PublicLayout from "./component/layout/PublicLayout"; // import new public NAVBAR layout-NO AUTHORIZATION PAGES
import Navbar from "./component/layout/Navbar"; // optional: direct import if needed

function AppRouters() {
  return (
    <div className="">
      <Routes>
        {/* Public Routes/Navbar */}
      <Route element={<PublicLayout />}>
        <Route path={siteLinks.home} element={<LandingPage />} />
        <Route path={siteLinks.about} element={<AboutPage />} />
        <Route path={siteLinks.contact} element={<ContactPage />} />
      </Route>
        <Route path={siteLinks.home} element={<LandingPage />} />
        <Route path={siteLinks.login} element={<LoginPage2 />} />
        <Route path={siteLinks.dashboard} element={<DashboardPage />} />


        {/*<Route path={siteLinks.home} element={<LoginPage2 />} />*/}
        {/*  <Route path={siteLinks.dashboard} element={<DashboardPage />} />*/}

        <Route element={<BearerToken />}>
        {/* auth routes wrapper */}
        <Route element={<AuthLayout />}>
          {/* <Route path={siteLinks.home} element={<LoginPage />} /> */}
          {/*<Route path={siteLinks.signup} element={<SignupPage />} />*/}
          {/*<Route path={siteLinks.forgetpwd} element={<ForgetpwdPage />} />*/}
        </Route>


          <Route element={<AuthLayout />}>
            {/* <Route path={siteLinks.login} element={<LoginPage2 />} /> */}
            {/*<Route path={siteLinks.signup} element={<SignupPage />} />*/}
            {/*<Route path={siteLinks.forgetpwd} element={<ForgetpwdPage />} />*/}
          </Route>

        {/* protected routes */}
        {/*<Route element={<SocketIOContextProvider />}>*/}
        {/* */}
        {/*</Route>*/}

          <Route element={<UserExist />}>
          </Route>

            <Route path={siteLinks.about} element={<AboutPage/>} />
          {/*<Route path={siteLinks.home} element={<LandingPage />} />*/}
        


        </Route>

        {/*<Route path={siteLinks.landing} element={<LandingPage />} />*/}

        <Route element={<Layout />}>
          <Route path={siteLinks.dash} element={<HomePage />} />
          <Route path={siteLinks.music} element={<MusicPage />} />
          <Route path={siteLinks.activity} element={<ActivityPage />} />
          <Route path={siteLinks.contact} element={<ContactPage />} />
          <Route path={siteLinks.storytelling} element={<StoryTellingPage />} />
        </Route>



      </Routes>

    </div>
  );
}

export default AppRouters;

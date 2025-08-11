import { Routes, Route } from 'react-router-dom';

import UserExist from './component/authorization/UserExist';
import AuthLayout from './component/auth/AuthLayout';
import siteLinks from './links/siteLinks';
import BearerToken from './component/authorization/BearerToken';
import LoginPage from './views/LoginPage';
import MusicPage from './views/MusicPage';
import ActivityPage from './views/ActivityPage';

// import SignupPage from './views/SignupPage';
// import ForgetpwdPage from './views/ForgetpwdPage';
import HomePage from './views/HomePage';
import ContactPage from './views/ContactPage'
import SocketIOContextProvider from './component/context/SocketIOContext';
import StoryTellingPage from "./views/StoryTellingPage";


function AppRouters() {
  return (
    <div className="">
      <Routes>
        <Route element={<BearerToken />}>
        {/* auth routes wrapper */}
        <Route element={<AuthLayout />}>
          <Route path={siteLinks.home} element={<LoginPage />} />
          {/*<Route path={siteLinks.signup} element={<SignupPage />} />*/}
          {/*<Route path={siteLinks.forgetpwd} element={<ForgetpwdPage />} />*/}
        </Route>

        {/* protected routes */}
        <Route element={<SocketIOContextProvider />}>
          <Route element={<UserExist />}> 
            <Route path={siteLinks.dash} element={<HomePage />} />
            <Route path={siteLinks.music} element={<MusicPage />} />
            <Route path={siteLinks.activity} element={<ActivityPage />} />
            <Route path={siteLinks.contact} element={<ContactPage />} />
            <Route path={siteLinks.storytelling} element={<StoryTellingPage />} />
          </Route>
        </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default AppRouters;

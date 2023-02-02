import { Fragment } from 'react';
import Counter from './components/Counter';
import Headers from "./components/Header"
import Auth from "./components/Auth"
import UserProfile from "./components/UserProfile"
import { useSelector } from "react-redux";
function App() {

  let isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Headers></Headers>
      
      {(isAuth) && <Auth></Auth>}
      {!(isAuth) &&<UserProfile></UserProfile>}
    <Counter />
    </Fragment>
  );
}

export default App;

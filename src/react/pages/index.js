import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Login from "./Login";
import Registration from "./Registration";

export default {
  Login: { path: "/", component: Login },
  Home: { path: "/home/:username", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Register: { path: "/register", component: Registration },
  NotFound: { path: "*", component: NotFound }
};

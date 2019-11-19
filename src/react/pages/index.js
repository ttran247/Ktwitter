import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Login from "./Login";

export default {
  Login: { path: "/", component: Login },
  Home: { path: "/home", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound }
};

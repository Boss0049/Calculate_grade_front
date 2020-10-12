import Home from "../containers/pages/Home";
import Login from "../containers/pages/Login";
import Register from "../containers/pages/Register";
import Profile from "../containers/pages/Profile";

const components = {
  login: {
    url: "/",
    page: Login,
  },
  register: {
    url: "/register",
    page: Register,
  },
  home: {
    url: "/",
    page: Home,
  },
  profile: {
    url: "/profile",
    page: Profile,
  },
};

export default {
  guest: [components.register, components.login],
  user: [components.home, components.profile],
};

import { createRouter, createWebHistory } from "vue-router";

import FirstScreen from "../views/FirstSreen";
import Home from "../views/Home.vue";
import LoginFailed from "../components/LoginFailed.vue";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: FirstScreen,
  },

  {
    path: "/loginSuccess",
    name: "Home",
    component: Home,
  },

  {
    path: "/loginFailed",
    name: "LoginFailed",
    component: LoginFailed,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/calculator",
    name: "HomePageCalculator",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalculatorHome.vue"),
  },
  {
    path: "/feedback",
    name: "FeedbackPage",
    component: () =>
      import(
        /* webpackChunkName: "feedbackPage" */ "../views/FeedbackPage.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

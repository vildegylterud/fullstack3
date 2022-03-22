<template>
  <div id="nav">
    <router-link class="kontaktskjema" to="/feedback"
      >Kontaktskjema</router-link>
    <router-link class="kalkulator" to="/calculator">Kalkulator</router-link>
    <h2 id="header">Du er nå logget inn!</h2>

    <img id="img" src="../styles/bilde.jpg" />

    <button id="button" v-on:click="logout">Sign out</button>
    <label id="loginstatusLabel">{{ logoutStatus }}</label>
    <p id="text">Laget av Vilde</p>
    <router-view />
  </div>
</template>

<script>
import {doLogout} from '../utils/apiutil.js';

export default {

  data() {
    return {
      logoutStatus: "",
    };
  },
  methods: {
    async logout() {
      alert("du prøver å logge ut")
      const loginResponse = await doLogout();
      if (loginResponse.logoutStatus === "Success") {
        await this.$router.push("/");
      } else if (loginResponse.loginStatus === null) {
        alert("Det skjedde noe feil")
      }
    },
  },
};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #857f72;
}

feedbackPage a {
  color: #857f72;
}

#img {
  place-self: center;
}
#nav {
  padding: 30px;
  gap: 30px;
  margin: auto;
  color: #423d33;
  display: grid;
  text-align: center;
  flex-direction: row-reverse;
  width: 70%;
  place-self: center;
  grid-template-areas:
    "kalkulator kontaktskjema"
    "header"
    "img"
    "button"
    "text";
}

button {
  background-color: #857f72;
  cursor: pointer;
  place-self: center;
  width: 60%;
  height: 40px;
}
</style>

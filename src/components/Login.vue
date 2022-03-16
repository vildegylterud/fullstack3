<template>
  <div id="login">
    <h2 id="title">Login</h2>
    <input type="text" name="username" v-model= "username" placeholder="Username"/>
    <input type="password" name="password" v-model= "password" placeholder="Password"/>
    <button class="button" v-on:click="handleClickSignin_2">Sign in</button>
    <label id="loginstatusLabel">{{ users.loginStatus }}</label>
  </div>
</template>

<script>
import axios from "axios";
import { doLogin } from '../utils/apiutil.js'





export default {
  name: "Login",
  data() {
    return {
      users: {
        username: "",
        password: "",
        loginStatus: "",
      },
    };
  },
  methods: {

    handleClickSignin_2 () {
      const loginRequest = { username: this.username, password: this.password };
      const loginResponse = doLogin(loginRequest);
      console.log(loginResponse)
      loginResponse.then((resolvedResult) => {
        this.loginStatus = resolvedResult.loginStatus;
        // alert("Login2: " + resolvedResult.data.loginStatus);
      });
    },


    async handleClickSignin() {
      const loginRequest = { username: this.username, password: this.password };
      const loginResponse = await axios.post("http://localhost:8085/calculator/login", loginRequest);

      console.log(loginResponse);
      alert(loginResponse.data.loginStatus);
      if (loginResponse.data.loginStatus === "Success") {
        await this.$router.push("/loginSuccess");
      } else if (loginResponse.data.loginStatus === "Fail") {
        await this.$router.push("/loginFailed");
      }
    },
  },


};
</script>

<style scoped>
#login {
  width: 1000px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

input {
  width: 100%;
  display: flex;
  float: top;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

.button {
  background-color: #857f72;
  cursor: pointer;
}
</style>

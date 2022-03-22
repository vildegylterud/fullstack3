<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <div id="registerContainer">
      <h2>Registrer deg her:</h2>

      <input type="text" name="fullName" v-model="fullName" placeholder="Full name" />
      <input type="text" name="address" v-model="address" placeholder="Address" />
      <input type="username" name="username" v-model="username" placeholder="Username" />
      <input type="password" name="password" v-model="password" placeholder="Password" />
      <input type="email" name="email" v-model="email" placeholder="Email" />
      <input type="phone" name="phone" v-model="phone" placeholder="Phone number" />

      <input class="button" type="submit" value="Login" />
      <label id="registerstatusLabel">{{ registerStatus }}</label>
    </div>
  </form>
</template>

<script>

import { doRegister } from '../utils/apiutil.js'

export default {
  name: "Register",

  data() {
    return {
      fullName: "",
      address: "",
      username: "",
      password: "",
      email: "",
      phone: "",
      registerStatus: ""

    };
  },

  methods: {

    inputIsEmpty: function () {
      if (!this.fullName || !this.address|| !this.username || !this.password || !this.email || !this.phone ) {
        return true;
      } else {
        return false;
      }
    },
    async onSubmit() {
      if (this.inputIsEmpty()) {
        alert("Fyll inn alle felt, registrering feilet");
      } else {
          const registerRequest= {
            name: this.name,
            address: this.address,
            username: this.username,
            password: this.password,
            email: this.email,
            phone: this.phone
          };
          const registerResponse = await doRegister(registerRequest);
          if (registerResponse.registerStatus === "Success") {
            await this.$router.push("/loginSuccess");
          } else if (registerResponse.registerStatus === "Fail") {
            alert("brukeren finnes fra før, prøv et annet brukernavn")
            await this.$router.push("/register");
          }
      }
    },
  },
};
</script>
¨
<style scoped>
#registerContainer {
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

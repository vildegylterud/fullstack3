<template>
  <form class="feedback-form" @submit.prevent="onSubmit">
    <div class="feedback-container" v-if="feedback">
      <h1>Calculator feedback</h1>
      <h3>Leave a review</h3>

      <label for="name">Navn:</label>
      <input id="name" v-model="name" type="name" />

      <label for="email">Epostadresse: </label>
      <input id="email" v-model="email" type="email" />

      <label for="message">Tilbakemelding:</label>
      <textarea id="message" v-model="message"></textarea>

      <input class="button" type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      feedback: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    isValidName: function (name) {
      const validCharacterRegex = /^[a-å ,.'-]+$/i;
      return validCharacterRegex.test(name);
    },

    inputIsEmpty: function () {
      if (!this.name || !this.email || !this.message) {
        return true;
      } else {
        return false;
      }
    },

    onSubmit() {
      if (this.inputIsEmpty()) {
        alert("Alle input felt må fylles ut!");
      } else if (!this.isValidName(this.name)) {
        alert("Navn kan ikke inneholde spesialtegn");
      } else {
        alert(
          "Sender --->>" +
            setTimeout(function () {
              alert("Sender ---> Sendt");
            }, 500)
        );

        this.$store.state.id = uuidv4();
        this.$store.state.email = this.email;
        this.$store.state.name = this.name;
        this.$store.state.message = this.message;

        console.log("Lagring i state:", this.$store.state);
      }
      /**const fs = require("fs")

    fs.writeFile("feedbacks.json", JSON.stringify(this.feedback), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });*/
    },
  },
};
</script>

<style scoped>
feedback-container {
  font-family: tahoma, serif;
  color: #423d33;
  width: 1000px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: 200px auto auto;
  padding: 20px;
}

.button {
  margin: 30px;
  background-color: #423d33;
  color: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  width: 160px;
  height: 60px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px rgba(0, 0, 0, 0.57);
}

input {
  height: 40px;
  margin-bottom: 20px;
  width: 95%;
  padding: 10px;
  font-size: 15px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

p {
  font-size: 22px;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .review-form {
    width: 90%;
  }
}
</style>

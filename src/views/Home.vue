<template>
  <div id="nav">
    <router-link class="kontaktskjema" to="/feedback"
      >Kontaktskjema</router-link>
    <router-link class="kalkulator" to="/calculator">Kalkulator</router-link>
    <h2 id="header">Du er nå logget inn!</h2>

    <img id="img" src="../styles/bilde.jpg" />
    <p id="text">Laget av Vilde</p>
    <router-view />
  </div>

</template>

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
  grid-template-areas:
    "kalkulator kontaktskjema"
    "header"
    "img"
    "text";
}
</style>

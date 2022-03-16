<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style>
#nav {
  display: flex;
  text-align: center;
  flex-direction: row-reverse;
  padding: 30px;
  gap: 30px;
  margin-right: 200px;
}
#nav a {
  font-weight: bold;
  color: #857f72;
}

feedbackPage a {
  color: #857f72;
}
</style>

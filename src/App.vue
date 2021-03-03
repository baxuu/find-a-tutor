<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
export default {
  components: {
    TheHeader
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto Condensed", sans-serif;
}

body {
  margin: 0;
}
</style>

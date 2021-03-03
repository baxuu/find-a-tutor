<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">
          <span>Find a Tutor</span>
          <img src="../../assets/logo.png"
        /></router-link>
      </h1>
      <ul>
        <li><router-link to="/tutors">All Tutors</router-link></li>
        <li><router-link to="/messages">Messages</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #fec8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

header a {
  text-decoration: none;
  color: #e24a3b;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #e24a3b;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 img {
  margin-left: 1rem;
  height: 40px;
  width: 40px;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>

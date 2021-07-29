<template>
  <div class="navbar-container">
    <header class="navbar-header">
      <Logo />
      <div class="spacer"></div>
      <nav class="navbar-items">
        <ul class="navbar-list">
          <li class="nav-item">
            <nuxt-link to="/">
              <img
                src="@/assets/icons/bell-icon.svg"
                width="80"
                height="20"
                class="navbar-img"
                alt="navbar-logo"
              />
            </nuxt-link>
          </li>
          <!-- <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar-header {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
}

.spacer {
  flex: 1;
}

</style>

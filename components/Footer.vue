<template>
  <footer class="app-footer">
    <ul>
      <li style="border-top: 5px solid #0070FF;">
        <nuxt-link to="/" class="text-center active app-footer-link">
          <img
            src="@/assets/icons/home-icon.svg"
            width="80"
            height="20"
            class="navbar-img"
            alt="navbar-logo"
          />
          <span class="d-block text-bold"> Home </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" class="text-center app-footer-link">
          <img
            src="@/assets/icons/xmlid-icon.svg"
            width="80"
            height="20"
            class="navbar-img"
            alt="navbar-logo"
          />
          <span class="d-block text-bold text-dark"> Track </span>
        </nuxt-link>
      </li>
      <li>
         <nuxt-link to="/" class="text-center app-footer-link">
          <img
            src="@/assets/images/account-img.png"
            width="80"
            height="20"
            class="navbar-img"
            alt="navbar-logo"
          />
          <span class="d-block text-bold text-dark"> Account </span>
        </nuxt-link>

      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.app-footer {
  flex-shrink: 0;
  padding: 10px;
  font-size: 12px;
  margin-top: 10px;
  text-transform: uppercase;
}

.app-footer ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.app-footer ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active {
  color: #0070FF;
}

.app-footer-link {
  margin-top: 1em;
}
</style>

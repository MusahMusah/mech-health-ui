<template>
  <div class="section">
    <Navbar />
    <Analysis />
    <Services />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'DefaultLayout',
}
</script>
<style>
html {
  scrollbar-color: #d4aa70 #e4e4e4;
  scrollbar-width: thin;
  overflow-y: auto;
  direction: ltr;
}
html::-webkit-scrollbar {
  width: 15px;
}

html::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

html::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 6px solid rgba(0, 0, 0, 0.18);
  border-left: 0;
  border-right: 0;
  background-color: var(--secondary-color);
}
</style>

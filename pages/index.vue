<template>
  <div class="wrapper">
    <Navbar />
    <Analysis />
    <Services />
    <ModalCard :show-modal="showModal" @openModal="reportEmergency" @closeModal="reportEmergency" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'DefaultLayout',
  data: () => ({
    showModal: false,
  }),
  methods: {
    reportEmergency() {
      this.showModal = !this.showModal
    },
  },
}
</script>
<style scoped>
.wrapper {
  height: 100%;
}
</style>

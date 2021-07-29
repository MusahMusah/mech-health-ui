<template>
  <div class="services-wrapper">
    <h4 class="text-center md services-title">Services</h4>
    <div class="services text-center">
      <div class="service">
        <div class="service-icon">
          <img
            src="@/assets/icons/doctor-icon.svg"
            width="60"
            height="30"
            class="navbar-img"
            alt="navbar-logo"
          />
        </div>
        <div class="service-text text-left">
          <h5 class="sm">Get checked</h5>
          <p>Take virtual assessment</p>
        </div>
      </div>
      <div class="service">
        <div class="service-icon">
          <img
            src="@/assets/icons/kit-icon.svg"
            width="60"
            height="30"
            class="navbar-img"
            alt="navbar-logo"
          />
        </div>
        <div class="service-text text-left">
          <h5 class="sm">See a doctor</h5>
          <p>Book an appointment</p>
        </div>
      </div>
      <div class="service" @click="reportEmergencyPopup">
        <div class="service-icon">
          <img
            src="@/assets/icons/ambulance-icon.svg"
            width="60"
            height="30"
            class="navbar-img"
            alt="navbar-logo"
          />
        </div>
        <div class="service-text text-left">
          <h5 class="sm">Report Emergency</h5>
          <p>Tap twice to alert the hospital</p>
        </div>
      </div>
    </div>
    <ModalCard :show-modal="showModal" @closeModal="reportEmergency" />
  </div>
</template>

<script>
export default {
  name: 'Services',
  data: () => ({
    showModal: false,
    clickCount: 0,
    result: [],
    delay: 200,
    timer: null,
  }),
  methods: {
    reportEmergency() {
      this.showModal = !this.showModal
    },
    reportEmergencyPopup(event) {
      this.clickCount++
      if (this.clickCount === 1) {
        const self = this
        this.timer = setTimeout(function () {
          self.showModal = !this.showModal
          self.clickCount = 0
        }, this.delay)
      } else {
        clearTimeout(this.timer)
        alert('hello')
        this.clickCount = 0
      }
    },
  },
}
</script>

<style scoped>
.services-wrapper {
  margin-bottom: 5rem;
}

.services {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

@media (min-width: 40rem) {
  .services {
    flex-direction: row;
  }
}

@media (max-width: 40rem) {
  .services-title {
    text-align: left;
    margin-left: 1em;
  }
  .service-text {
    margin-left: 2em;
  }
}

.service {
  cursor: pointer;
  background: var(--primary-color);
  flex-basis: 30%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #dceeff;
  border-radius: 16px;
  padding: 2em;
  margin: 1em;
}
.service-icon {
  width: 5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dceeff;
  border-radius: 4rem;
}
</style>

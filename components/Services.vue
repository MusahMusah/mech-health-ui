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
          <p>
            Take virtual assessment
          </p>
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
          <p>
            Book an appointment
          </p>
        </div>
      </div>
      <div class="service">
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
          <p>
            Tap twice to alert the hospital
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
}
</script>

<style scoped>
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
    margin-left: 2em
  }
}

.service {
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

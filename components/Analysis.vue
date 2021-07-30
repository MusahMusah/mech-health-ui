<template>
  <div class="analysis-wrapper">
    <h4 class="text-center sm">Today</h4>
    <div class="progress-items">
      <div class="progress-circle over50 p70">
        <span>
          <img
            src="@/assets/icons/calories-icon.svg"
            width="80"
            height="30"
            class="navbar-img"
            alt="navbar-logo"
          />
        </span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
        <span class="progress-lg-text"> 213 </span>
        <span class="progress-sm-text"> Calls </span>
      </div>
      <div class="progress-circle progress-grow over50 p79">
        <span>
          <img
            src="@/assets/icons/feet-icon.svg"
            width="80"
            height="30"
            class="navbar-img"
            alt="navbar-logo"
          />
        </span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
        <span class="progress-lg-text"> 5,022 </span>
        <span class="progress-sm-text"> Steps </span>
      </div>
      <div class="progress-circle p33">
        <span>
          <img
            src="@/assets/icons/moon-icon.svg"
            width="80"
            height="30"
            class="navbar-img"
            alt="navbar-logo"
          />
        </span>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
        <span class="progress-lg-text"> 4Hr55 </span>
        <span class="progress-sm-text"> Minutes </span>
      </div>
    </div>
    <div class="flex my-6">
      <span class="text-center">More</span>
      <img
        src="@/assets/icons/arrow-right-icon.svg"
        width="30"
        height="20"
        class="navbar-img"
        alt="navbar-logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analysis',
}
</script>

<style scoped>
@import url('~assets/css/circle-progress.css');

.analysis-wrapper {
  height: 100%;
}

.progress-items {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.progress-grow {
  font-size: 20px;
}
.progress-lg-text {
  width: 3em !important;
  line-height: 0em !important;
  margin-top: 4.5em;
  color: var(--black-color) !important;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center !important;
}
.progress-sm-text {
  margin-top: 7em;
  color: var(--black-color) !important;
  font-size: 0.9em;
  font-weight: 500;
}
</style>

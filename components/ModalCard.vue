<template>
  <div>
    <transition name="fade" appear>
      <div
        v-if="showModal"
        class="modal-overlay"
        @click="toggleModal"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div v-if="showModal" class="modal-content text-center card">
        <h4 class="modal-title">
          Allow "Meck" to access your location while you use the app?
        </h4>
        <p class="modal-text">
          Meck helps you get healthcare even in an emergency!
        </p>
        <div class="modal-buttons">
          <a class="modal-link" @click.prevent="toggleModal"> Don't Allow </a>
          <span class="spacer"></span>
          <a class="modal-link" @click.prevent="allowNotification"> Allow </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ModalCard',
  props: {
    showModal: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggleModal() {
      this.$emit('closeModal')
    },
    allowNotification() {
      localStorage.setItem('location-access', true)
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  width: 100%;
  height: 130vh;
  left: 0;
  top: 0;
  z-index: 98;
  overflow: auto;
  padding-top: 38vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 40rem) {
  .modal-overlay {
    height: 175vh;
  }
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

.modal-buttons {
  display: flex;
  margin: 0 -1.2em;
  margin-top: 1.5em;
  margin-bottom: -0.5em;
  padding-top: 1em;
  justify-content: space-between;
  border-top: 1px solid #e0e0e0;
}

.modal-link {
  cursor: pointer;
  color: var(--secondary-color);
  margin: 0 auto;
  font-weight: bold;
  width: 100%;
}

.spacer {
  border-left: 1px solid #e0e0e0;
  margin-top: -1em;
  height: 3.2rem;
  position: absolute;
  left: 50%;
}
</style>

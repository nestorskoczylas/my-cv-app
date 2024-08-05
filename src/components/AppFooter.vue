<template>
  <q-footer bordered class="bg-white text-black">
    <q-toolbar class="q-pa-md">
      <div class="footer-content">
        <!-- Accordion Menu for Mobile -->
        <q-expansion-item
          v-if="isSmallScreen"
          class="footer-accordion"
          :label="$t('MoreInfo')"
        >
          <div class="footer-accordion-content">
            <div class="footer-left">
              <span>&copy; {{ currentYear }} {{ $t('fullName') }}</span>
            </div>
            <div class="footer-right">
              <span>{{ $t('license') }}</span>
              <span>(+33) 7 83 59 04 23</span>
              <span>nestor.skoczylas23@gmail.com</span>
              <div>
                <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
                  <img src="/src/assets/github.png" alt="GitHub" />
                </q-btn>
                <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
                  <img src="/src/assets/linkedin.png" alt="LinkedIn" />
                </q-btn>
              </div>
            </div>
          </div>
        </q-expansion-item>

        <!-- Footer Content for Desktop -->
        <div v-else class="footer-desktop">
          <div class="footer-left">
            <span>&copy; {{ currentYear }} {{ $t('fullName') }}</span>
          </div>
          <div class="footer-right">
            <span>{{ $t('license') }}</span>
            <span>(+33) 7 83 59 04 23</span>
            <span>nestor.skoczylas23@gmail.com</span>
            <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
              <img src="/src/assets/github.png" alt="GitHub" />
            </q-btn>
            <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
              <img src="/src/assets/linkedin.png" alt="LinkedIn" />
            </q-btn>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
const isSmallScreen = ref(false)

const openLink = (url: string) => {
  window.open(url, '_blank')
}

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 600
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.footer-content {
  width: 100%;
}

/* Accordion Menu Styles */
.footer-accordion {
  display: flex;
  flex-direction: column;
  font-weight: 300;
}

/* Desktop Styles */
.footer-desktop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.social-btn img {
  width: 1.6rem;
  height: 1.6rem;
}

/* Media Query for Small Screens */
@media (max-width: 599px) {
  .footer-desktop {
    display: none;
  }

  .footer-accordion-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-left {
    margin-bottom: 1rem;
  }

  .footer-right span {
    display: block;
    margin-bottom: 0.5rem;
  }

  .social-btn {
    margin-top: 0.5rem;
  }
}

@media (min-width: 600px) {
  .footer-left,
  .footer-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .footer-accordion {
    display: none;
  }

  .footer-left {
    margin-right: auto;
  }

  .footer-right {
    margin-left: auto;
    gap: 15px;
  }

  .footer-right span {
    margin-right: 10px;
    font-weight: 300;
  }

  .footer-right .q-btn {
    font-size: 0.9rem;
    font-weight: 300;
  }
}
</style>

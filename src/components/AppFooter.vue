<template>
  <q-footer bordered class="bg-white text-black">
    <q-toolbar class="q-pa-md">
      <div class="footer-content">
        <!-- begin:: Accordion Menu for Mobile -->
        <q-expansion-item
          v-if="isSmallScreen"
          class="footer-accordion"
          :label="$t('MoreInfo')"
        >
          <!-- begin:: Footer Content for Mobile -->
          <div class="footer-accordion-content">
            <!-- begin:: Left Section: CopyRight -->
            <div class="footer-left">
              <span>&copy; {{ currentYear }} {{ $t('fullName') }}</span>
            </div>
            <!-- end:: Left Section: CopyRight -->

            <!-- begin:: Right Section: Contact Info and Social Links -->
            <div class="footer-right">
              <span>{{ $t('license') }}</span>
              <span>(+33) 7 83 59 04 23</span>
              <span>nestor.skoczylas23@gmail.com</span>

              <!-- begin:: Social Links -->
              <div>
                <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
                  <img src="../assets/github.png" alt="GitHub" />
                </q-btn>
                <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
                  <img src="../assets/linkedin.png" alt="LinkedIn" />
                </q-btn>
              </div>
              <!-- end:: Social Links -->
            </div>
            <!-- end:: Right Section: Contact Info and Social Links -->
          </div>
        </q-expansion-item>
        <!-- end:: Accordion Menu for Mobile -->

        <!-- begin:: Footer Content for Desktop -->
        <div v-else class="footer-desktop">
          <!-- begin:: Left Section: CopyRight -->
          <div class="footer-left">
            <span>&copy; {{ currentYear }} {{ $t('fullName') }}</span>
          </div>
          <!-- end:: Left Section: CopyRight -->

          <!-- begin:: Right Section: Contact Info and Social Links -->
          <div class="footer-right">
            <span>{{ $t('license') }}</span>
            <span>(+33) 7 83 59 04 23</span>
            <span>nestor.skoczylas23@gmail.com</span>
            <q-btn flat @click="openLink('https://github.com/nestorskoczylas')" class="social-btn">
              <img src="../assets/github.png" alt="GitHub" />
            </q-btn>
            <q-btn flat @click="openLink('https://linkedin.com/in/nestorskoczylas')" class="social-btn">
              <img src="../assets/linkedin.png" alt="LinkedIn" />
            </q-btn>
          </div>
          <!-- end:: Right Section: Contact Info and Social Links -->
        </div>
        <!-- end:: Footer Content for Desktop -->
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
const isSmallScreen = ref(false)

// Open a link in a new tab
const openLink = (url: string) => {
  window.open(url, '_blank')
}

// Check if the screen size is small
const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 600
}

// Lifecycle hooks to manage event listeners for screen size
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

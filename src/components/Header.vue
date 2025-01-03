<template>
  <header
    class="p-4 flex justify-between items-center fixed top-0 w-full z-50  text-white"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Section -->
      <button @click="navigateTo('/')" class="flex items-center space-x-2">
        <!-- Brand Name -->
        <h1 class="text-xl font-bold hover:text-yellow-400">Mits Pizzeria</h1>
      </button>

      <!-- Burger Menu Button (Visible on Mobile) -->
      <button
        class="burger-button md:hidden"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon
          :icon="menuOpen ? 'times' : 'bars'"
          class="text-xl"
        />
      </button>

      <!-- Navigation Menu -->
      <nav
        :class="[
          'absolute top-full left-0 w-full md:bg-transparent md:relative md:top-0',
          menuOpen ? 'block' : 'hidden',
        ]"
        class="md:flex md:items-center"
      >
        <ul
          class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center"
        >
          <!-- Home Link -->
          <li>
            <button
              @click="navigateTo('/')"
              class="hover:text-gray-400 px-4 py-2 bg-transparent"
            >
              Home
            </button>
          </li>
          <!-- Menu Link -->
          <li>
            <button
              @click="navigateTo('/menu')"
              class="hover:text-gray-400 px-4 py-2 bg-transparent"
            >
              Menu
            </button>
          </li>
          <!-- Contact Link -->
          <li>
            <button
              @click="navigateTo('/contact')"
              class="hover:text-gray-400 px-4 py-2 bg-transparent"
            >
              Contact
            </button>
          </li>
          <!-- Cart Link -->
          <li class="relative">
            <button
              @click="navigateTo('/cart')"
              class="relative hover:text-gray-400 px-4 py-2 bg-transparent"
            >
              <font-awesome-icon icon="shopping-cart" class="text-xl" />
              <!-- Badge -->
              <span
                v-if="cartCount > 0"
                class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ cartCount }}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add icons to FontAwesome library
library.add(faShoppingCart, faBars, faTimes, faUtensils);

export default {
  name: "AppHeader",
  components: {
    FontAwesomeIcon,
  },
  props: {
    cartCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      menuOpen: false, // Tracks the state of the burger menu
    };
  },
  methods: {
    // Programmatically navigate to a route
    navigateTo(route) {
      this.$router.push(route);
    },
    // Toggles the burger menu open/close state
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      console.log("Menu Open State:", this.menuOpen); // Debug menu state
    },
  },
};
</script>

<style scoped>
/* Ensure burger menu button is visible only on small screens */
.burger-button {
  display: none;

}

/* Display burger button on mobile screens */
@media (max-width: 768px) {
  .burger-button {
    display: block;
    background: transparent;
  }

  /* Hide navigation menu by default on mobile */
  nav.md\\:flex {
    display: none;
  }
}

.fork{
  color: #f87193;
}

/* Navigation Menu Styles */
nav ul {
  display: none; /* Default state */
}

nav.block ul {
  display: flex; /* Show menu items when menuOpen is true */
  flex-direction: column;
  background-color: #b4a4ed; /* Match the header background */
  width: 100%; /* Ensure it spans the full width */
  padding: 1rem 0;
}

nav ul li {
  margin: 0.5rem 0; /* Add spacing between items */
  text-align: center; /* Center-align menu items */
}

/* Align items horizontally on larger screens */
@media (min-width: 768px) {
  nav ul {
    display: flex; /* Show inline for larger screens */
    flex-direction: row;
    background-color: transparent; /* Remove background on larger screens */
  }
}

nav ul li {
  margin: 0.5rem 0; /* Spacing between items on mobile */
  text-align: center; /* Center-align menu items */
}

/* Style brand name */
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-left: 0px;
  color: #2c2f4b;
  font-style: italic;
}

</style>

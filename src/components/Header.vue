<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Food Delivery</h1>
      <!-- Burger Menu -->
      <button class="burger-button" @click="toggleMenu">
        <font-awesome-icon :icon="menuOpen ? 'times' : 'bars'" class="text-xl" />
      </button>

      <!-- Navigation -->
      <nav :class="['md:flex', menuOpen ? 'block' : 'hidden']" class="space-x-4 items-center">
      <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <li><button @click="$emit('navigate', 'home')" class="hover:text-gray-400">Home</button></li>
        <li><button @click="$emit('navigate', 'menu')" class="hover:text-gray-400">Menu</button></li>
        <li><button @click="$emit('navigate', 'contact')" class="hover:text-gray-400">Contact</button></li>
        <li class="relative">
          <button @click="$emit('navigate', 'cart')" class="relative">
            <font-awesome-icon icon="shopping-cart" class="text-xl" />
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
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add icons to FontAwesome library
library.add(faShoppingCart, faBars, faTimes);

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
      menuOpen: false,
    };
  },
  methods: {
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
  display: none; /* Hidden by default */
}

@media (max-width: 768px) {
  .burger-button {
    display: block; /* Visible on smaller screens */
  }

  nav.md\\:flex {
    display: none; /* Hide the nav flex on smaller screens */
  }
}

nav ul {
  display: none; /* Default state */
}

nav.block ul {
  display: flex; /* Show menu items when menuOpen is true */
  flex-direction: column;
  background-color: #1a202c; /* Match the header background */
  width: 100%; /* Ensure it spans the full width */
  padding: 1rem 0;
}

nav ul li {
  margin: 0.5rem 0; /* Add spacing between items */
  text-align: center; /* Center-align menu items */
}

@media (min-width: 768px) {
  nav ul {
    display: flex; /* Show inline for larger screens */
    flex-direction: row;
    background-color: transparent; /* Remove background on larger screens */
  }
  nav ul li {
    margin: 0; /* Reset margin for horizontal layout */
  }
}

</style>

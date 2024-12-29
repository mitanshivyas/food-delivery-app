<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Food Delivery</h1>
      <nav class="flex space-x-4 items-center">
        <ul class="flex space-x-4">
          <li>
              <button @click="$emit('navigate', 'home')" class="hover:text-gray-400">
                Home
              </button>
            </li>
            <li>
              <button @click="$emit('navigate', 'menu')" class="hover:text-gray-400">
                Menu
              </button>
            </li>
          <li><button @click="$emit('navigate', 'contact')" class="hover:text-gray-400">
                Contact
              </button>
          </li>
          <li class="relative">
              <button @click="$emit('navigate', 'cart')" class="relative">
                <font-awesome-icon icon="shopping-cart" class="text-xl" />
                <!-- Badge for Cart Items -->
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faShoppingCart);

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
};
</script>

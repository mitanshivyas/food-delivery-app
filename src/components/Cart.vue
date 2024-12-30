<template>
   <aside
      class="fixed bottom-0 right-0 bg-gray-800 text-white w-80 pt-4 shadow-lg flex flex-col items-center"
      style="z-index: 50;"
    >
    <!-- Toggle Button -->
    <button
      @click="toggleCollapse"
      class=" w-[90%] bg-gray-700 text-white px-4 py-2 text-center font-bold rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      {{ collapsed ? "Show Cart" : "Hide Cart" }}
    </button>

    <!-- Cart Content -->
    <div v-if="!collapsed" class="flex flex-col">
      <h3 class="text-xl font-bold mb-4 p-2 text-center">Your Cart</h3>
      <!-- Scrollable Items Section -->
      <div class="flex-grow overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800" :style="{ maxHeight: 'calc(70vh - 120px)' }">
        
        <ul>
          <li
            v-for="(item, index) in cartItems"
            :key="index"
            class="flex justify-between items-center p-2 bg-gray-700 rounded"
          >
            <div class="flex items-center">
              <img
                :src="item.img"
                :alt="item.name"
                class="w-12 h-12 object-cover rounded mr-2"
              />
              <div>
                <p>{{ item.name }}</p>
                <div class="flex items-center">
                  <button
                    @click="$emit('decrease-quantity', item)"
                    class="bg-gray-800 text-white px-2 rounded mr-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"
                  >
                    -
                  </button>
                  <span class="px-2">{{ item.quantity }}</span>
                  <button
                    @click="$emit('increase-quantity', item)"
                    class="bg-gray-800 text-white px-2 rounded shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
          </li>
        </ul>
      </div>

      <!-- Buttons Section -->
      <div class="pt-4 border-t border-gray-700 p-4">
        <p class="text-lg font-bold mb-4">Total: ${{ total }}</p>
        <!-- <button
          v-if="cartItems.length"
          @click="$emit('checkout')"
          class="bg-yellow-400 text-white px-4 py-2 rounded w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Checkout
        </button> -->
        <button
          v-if="cartItems.length"
          @click="goToCheckout"
          class="bg-yellow-400 text-white px-4 py-2 rounded w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Checkout
        </button>
        <button
          v-if="cartItems.length"
          @click="handleClearCart"
          class="bg-red-500 text-white px-4 py-2 rounded mt-2 w-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Clear Cart
        </button>
        <p v-else class="text-gray-400 text-center">Your cart is empty.</p>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmation" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded shadow-lg text-center text-black">
        <p>Are you sure you want to clear the cart?</p>
        <div class="mt-4">
          <button @click="confirmClearCart" class="bg-red-500 text-white px-4 py-2 rounded mr-2 p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110">Yes</button>
          <button @click="cancelClearCart" class="bg-gray-300 px-4 py-2 rounded p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110">No</button>
        </div>
      </div>
    </div>
  </aside>
</template>


---

### CSS Simplifications:

```vue
<style scoped>
aside {
  transition: max-height 0.3s ease-in-out;
}

.flex-grow {
  overflow-y: auto;
}

</style>

<script>
export default {
  name: "AppCart",
  props: {
    cartItems: Array,
    total: String,
  },
  data() {
    return {
      collapsed: true,
      showConfirmation: false,
    };
  },
  methods: {
    goToCheckout(){
      this.$router.push('/cart') // Programmatically navigate to Checkout page
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    handleClearCart() {
      this.showConfirmation = true;
    },
    confirmClearCart() {
      this.$emit("clear-cart");
      this.showConfirmation = false;
    },
    cancelClearCart() {
      this.showConfirmation = false;
    },
  },
  watch: {
    cartItems: {
      handler(newItems) {
        if (newItems.length > 0) {
          this.collapsed = false; // Automatically show cart when an item is added
        }
      },
      deep: true,
    },
  },
};
</script>


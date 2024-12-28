<template>
  <aside class="fixed bottom-0 right-0 bg-gray-800 text-white p-4 w-80 shadow-lg max-h-[50vh] overflow-y-auto">
        <!-- Toggle Button -->
        <button
      @click="toggleCollapse"
      class="w-full bg-gray-700 text-white px-4 py-2 text-center"
    >
      {{ collapsed ? "Show Cart" : "Hide Cart" }}
    </button>

    <!-- Cart Content -->
    <div v-if="!collapsed" class="p-4 max-h-[50vh] overflow-y-auto">
      <h3 class="text-xl font-bold">Your Cart</h3>
      <ul>
        <li
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between my-2"
        >
          <div class="flex items-center">
            <img 
            :src="item.img"
            :alt="item.name"
            class="w-12 h-12 object-cover rounded mr-2"/>
            <div>
              <p>{{ item.name }}</p>
              <div class="flex items-center">
                <button
                @click="$emit('decrease-quantity', item)"
                class="bg-gray-700 text-white px-2 rounded mr-2"
                >
                  -
                </button>
                <span class="px-2">{{ item.quantity }}</span>
                <button
                  @click="$emit('increase-quantity', item)"
                  class="bg-gray-700 text-white px-2 rounded"  
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </li>
      </ul>
      <div class="mt-4">
        <p class="text-lg font-bold">Total: ${{ total }}</p>
        <button
          v-if="cartItems.length"
          @click="$emit('checkout')"
          class="bg-yellow-400 text-white px-4 py-2 rounded mt-2"
        >
          Checkout
        </button>
        <p v-else class="text-gray-400 mt-4">Your cart is empty.</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside {
  transition: max-height 0.3s ease-in-out;
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
      collapsed: false, // State to control collapse/expand
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

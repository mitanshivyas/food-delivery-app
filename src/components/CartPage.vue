<template>
  <!-- Notification -->
  <div
    v-if="showNotification"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="relative bg-green-500 text-white px-6 py-4 rounded shadow-lg w-80 text-center animate-scale-up"
    >
      <!-- Close Button -->
      <button
        @click="showNotification = false"
        class="absolute top-2 right-2 text-white hover:text-gray-300 text-3xl font-bold"
      >
        &times;
      </button>
      <!-- Notification Content -->
      <h2 class="text-2xl font-bold mb-2">Order Placed!</h2>
      <p>Your order has been placed successfully.</p>
    </div>
  </div>

  <section class="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-transparent py-8 mt-20 rounded-t">
    <h1 class="text-3xl font-bold text-gray-800 text-center">Your Order</h1>

    <div v-if="cartItems.length > 0" class="grid md:grid-cols-3 gap-8 mt-16">
      <!-- Cart Items -->
      <div class="md:col-span-2 space-y-4 ">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="grid grid-cols-3 items-start gap-4 bg-gray-100 p-2 rounded shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]"
        >
          <div class="col-span-2 flex items-start gap-4">
            <div
              class="w-64 h-48 max-sm:w-24 max-sm:h-24 shrink-0 rounded-md"
            >
              <img
                :src="item.img"
                :alt="item.name"
                class="w-full h-full object-contain"
              />
            </div>

            <div class="flex flex-col">
              <h3 class="text-base font-bold text-gray-800">{{ item.name }}</h3>

            </div>
          </div>

          <div class="ml-auto">
            <h4 class="text-lg max-sm:text-base font-bold text-gray-800">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </h4>

            <div
              class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-2.5 fill-current cursor-pointer"
                viewBox="0 0 124 124"
                @click="$emit('decrease-quantity', item)"
              >
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
              </svg>

              <span class="mx-3 font-bold">{{ item.quantity }}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-2.5 fill-current cursor-pointer"
                viewBox="0 0 42 42"
                @click="$emit('increase-quantity', item)"
              >
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <hr class="border-gray-300" />
      </div>

      <!-- Order Summary -->
      <div class="bg-gray-100 rounded-md p-4 h-max">
        <h3
          class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2"
        >
          Order Summary
        </h3>

        <ul class="text-gray-800 mt-6 space-y-3">
          <li class="flex flex-wrap gap-4 text-sm">
            Subtotal <span class="ml-auto font-bold">${{ total }}</span>
          </li>
          <li class="flex flex-wrap gap-4 text-sm">
            Shipping <span class="ml-auto font-bold">$5.00</span>
          </li>
          <li class="flex flex-wrap gap-4 text-sm">
            Tax <span class="ml-auto font-bold">${{ (0.0625*total).toFixed(2) }}</span>
          </li>
          <hr class="border-gray-300" />
          <li class="flex flex-wrap gap-4 text-sm font-bold">
            Total <span class="ml-auto">${{ total }}</span>
          </li>
        </ul>

        <div class="mt-6 space-y-3">
          <button
            type="button"
            @click="handleCheckout"
            class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
          >
            Checkout
          </button>
          <button
            type="button"
            @click="navigateTo('/menu')"
            class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center mt-10">
      <p class="text-lg text-gray-500">Your cart is empty.</p>
    </div>
    <div
      v-if="showConfirmation"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg text-center">
        <p>Are you sure you want to clear the cart?</p>
        <div class="mt-4">
          <button
            @click="confirmClearCart"
            class="bg-red-500 text-white px-4 py-2 rounded mr-2 p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"
          >
            Yes
          </button>
          <button
            @click="cancelClearCart"
            class="bg-gray-300 px-4 py-2 rounded p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CartPage",
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    shipping_cost: {
      type: String,
      required: true,
    },
    tax: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showNotification: false,
      showConfirmation: false,

    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    handleCheckout() {
      this.$emit("checkout"); // Clear the cart
      this.showNotification = true; // Show notification

      // Hide the notification after 3 seconds
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
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
};
</script>

<style scoped>
@keyframes scaleUp {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scaleUp 0.3s ease-out forwards;
}
</style>

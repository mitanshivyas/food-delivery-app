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
  
    <section class="container mx-auto py-8">
      <h2 class="text-2xl font-bold text-center mt-20 mb-6">Your Cart</h2>
      <div v-if="cartItems.length > 0">
        <div class="grid grid-cols-1 gap-6">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-white p-4 shadow rounded flex justify-between items-center"
          >
            <div>
              <img 
                :src="item.img"
                :alt="item.name"
                class="w-12 h-12 object-cover rounded mr-2"
              />
              <h3 class="text-xl font-bold">{{ item.name }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="font-bold">Price: ${{ item.price.toFixed(2) }}</p>
              <p class="text-sm text-gray-500">
                Quantity:
                <button @click="$emit('decrease-quantity', item)" class="bg-gray-300 text-black px-2 rounded">-</button>
                <span class="px-2">{{ item.quantity }}</span>
                <button @click="$emit('increase-quantity', item)" class="bg-gray-300 text-black px-2 rounded">+</button>
              </p>
            </div>
            <p class="text-lg font-bold">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>
        <div class="mt-8 text-right">
          <p class="text-xl font-bold">Total: ${{ total }}</p>
          <button
            class="bg-green-500 text-white px-6 py-3 rounded mt-4 hover:bg-green-600"
            @click="handleCheckout"
          >
            Checkout
          </button>
          <button
            class="bg-red-500 text-white px-6 py-3 rounded mt-4 hover:bg-red-600"
            @click="handleClearCart"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div v-else class="text-center">
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
    },
    data() {
      return {
        showNotification: false,
        showConfirmation: false,
      };
    },
    methods: {
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
  
<template>
    <section class="container mx-auto py-8">
      <h2 class="text-2xl font-bold text-center mb-6">Your Cart</h2>
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
              class="w-12 h-12 object-cover rounded mr-2"/>
              <h3 class="text-xl font-bold">{{ item.name }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="font-bold">Price: ${{ item.price.toFixed(2) }}</p>
              <!-- <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p> -->
              <p class="text-sm text-gray-500">Quantity: 
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
            @click="checkout"
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
      <div v-if="showConfirmation" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded shadow-lg text-center">
            <p>Are you sure you want to clear the cart?</p>
            <div class="mt-4 ">
            <button @click="confirmClearCart" class="bg-red-500 text-white px-4 py-2 rounded mr-2 p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110">Yes</button>
            <button @click="cancelClearCart" class="bg-gray-300 px-4 py-2 rounded p-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110">No</button>
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
        showConfirmation: false,
      };
    },
    methods: {
      checkout() {
        alert("Order placed successfully!");
        this.$emit("clear-cartb");
      },
      handleClearCart() {
        this.showConfirmation = true;
      },
      confirmClearCart() {
        this.$emit('clear-cart');
        this.showConfirmation = false;
      },
      cancelClearCart() {
        this.showConfirmation = false;
    },
    },
  };
  </script>

  
  
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
              <h3 class="text-xl font-bold">{{ item.name }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="font-bold">Price: ${{ item.price.toFixed(2) }}</p>
              <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
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
            @click="$emit('clear-cart')"
        >
            Clear Cart
            </button>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-lg text-gray-500">Your cart is empty.</p>
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
    methods: {
      checkout() {
        alert("Order placed successfully!");
        this.$emit("clear-cart");
      },
    },
  };
  </script>

  
  
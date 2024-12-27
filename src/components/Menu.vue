<template>
  <section class="min-h-screen flex flex-col">
    <!-- Banner Section -->
    <section
      class="bg-cover bg-center h-64 flex items-center justify-center"
      style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')"
    >
      <h2 class="text-3xl text-white font-bold">Our Menu</h2>
    </section>
    <section class="container mx-auto py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in menuItems"
          :key="item.id"
          class="bg-white p-4 shadow rounded"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 class="text-xl font-bold">{{ item.name }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
          <p class="font-bold">${{ item.price.toFixed(2) }}</p>
          <button
            class="bg-yellow-400 text-white px-4 py-2 rounded mt-2"
            @click="addToCart(item)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      menuItems: [], 
    };
  },
  methods: {
    async fetchMenu() {
      const response = await fetch("/menu.json"); 
      this.menuItems = await response.json();
    },
    addToCart(item) {
      this.$emit("add-to-cart", item); 
    },
  },
  created() {
    this.fetchMenu();
  },
};
</script>

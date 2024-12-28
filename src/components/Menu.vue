<template>
  <section class="min-h-screen flex flex-col">
    <!-- Banner Section -->
    <section
      class="bg-cover bg-center h-64 flex items-center justify-center"
      style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')"
    >
      <h2 class="text-3xl text-white font-bold">Our Menu</h2>
    </section>

    <!-- Categories Section -->
    <section class="container mx-auto py-8">
      <div class="flex space-x-4 justify-center mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="fetchMenu(category)"
          class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          {{ category }}
        </button>
      </div>

      <!-- Menu Items Section -->
      <div v-if="menuItems.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in menuItems"
          :key="item.id"
          class="bg-white p-4 shadow rounded"
        >
          <img
            :src="item.img || item.image || 'https://via.placeholder.com/150'"
            :alt="item.name"
            class="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 class="text-xl font-bold">{{ item.name }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
          <p class="font-bold">${{ item.price }}</p>
          <button
            class="bg-yellow-400 text-white px-4 py-2 rounded mt-2"
            @click="addToCart(item)"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <!-- Loading or Empty State -->
      <div v-else class="text-center">
        <p v-if="isLoading" class="text-gray-500">Loading menu...</p>
        <p v-else class="text-gray-500">No items found for this category.</p>
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
      categories: ["pizzas", "desserts"], // Categories available in the API
      isLoading: false,
    };
  },
  methods: {
    async fetchMenu(category = 'pizzas') {
      this.isLoading = true;
      try {
        const response = await fetch(`https://pizza-and-desserts.p.rapidapi.com/${category}`, {
          method: "GET",
          headers: {
            "x-rapidapi-key": "1bf1ce62e0msh1196b9fd7ccd351p147dc3jsn940fa904a174",
            "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
          },
        });
        const data = await response.json();
        console.log(`Fetched data for ${category}:`, data);
        this.menuItems = data || [];
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
        this.menuItems = [];
      } finally {
        this.isLoading = false;
      }
    },
    addToCart(item) {
      const cartItem = {
        id: item.id,
        name: item.name,
        description: item.description || "No description available",
        price: item.price,
        img: item.img || item.image || "https://via.placeholder.com/150",
        quantity: 1,
      };
      this.$emit("add-to-cart", cartItem);
    },
  },
  created() {
    this.fetchMenu("pizzas"); // Fetch default category
  },
};
</script>

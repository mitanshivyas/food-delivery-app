<template>
  <section class="min-h-screen flex flex-col">
    <section class="container mx-auto py-4 mt-20">
      <div class="w-full max-w-sm min-w-[200px]">
        <div
          class="relative flex items-center bg-gray-100 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          

          <!-- Input Field -->
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for items..."
            class="w-full bg-transparent placeholder:text-gray-500 text-gray-700 text-sm border-none rounded-full pr-3 pl-7 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="searchItems"
          />

          <!-- Search Button -->
          <button
            class="rounded-full ml-2 bg-gray-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="container mx-auto py-8">
      <div class="flex space-x-4 justify-center mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="fetchMenu(category)"
          class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 flex items-center justify-center mr-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"
        >
          <img :src="categoryIcons[category]" :alt="category" class="w-8 h-8" />
        </button>
      </div>

      <!-- Menu Items Section -->
      <div
        v-if="menuItems.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
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
            class="bg-yellow-400 text-white px-4 py-2 rounded mt-2 mr-2 shadow-md hover:shadow-lg transition duration-50 ease-in-out transform hover:scale-110"
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
      selectedCategory: "pizzas",
      searchQuery: "",
      isLoading: false,
      categoryIcons: {
        pizzas: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
        desserts: "https://i.postimg.cc/8c0Tdzp4/dessert.png",
      },
    };
  },
  methods: {
    async fetchMenu(category) {
      // Fetch a single category's menu items
      this.isLoading = true;
      try {
        const response = await fetch(
          `https://pizza-and-desserts.p.rapidapi.com/${category}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "1bf1ce62e0msh1196b9fd7ccd351p147dc3jsn940fa904a174",
              "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        console.log(`Fetched data for ${category}:`, data);
        this.menuItems = data; // Show only the selected category's items
        this.selectedCategory = category;
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
        this.menuItems = [];
      } finally {
        this.isLoading = false;
      }
    },
    async fetchAllCategories() {
      // Fetch all categories at once
      this.isLoading = true;
      try {
        const allItems = [];
        for (const category of this.categories) {
          const response = await fetch(
            `https://pizza-and-desserts.p.rapidapi.com/${category}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-key":
                  "1bf1ce62e0msh1196b9fd7ccd351p147dc3jsn940fa904a174",
                "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
              },
            }
          );
          const data = await response.json();
          allItems.push(...data);
          console.log(`Fetched data for ${category}:`, data);
        }
        this.allItems = allItems; // Store all items for search functionality
        this.menuItems = [...this.allItems]; // Initially display all items
      } catch (error) {
        console.error("Error fetching all categories:", error);
        this.menuItems = [];
      } finally {
        this.isLoading = false;
      }
    },
    addToCart(item) {
      const cartItem = {
        id: `${this.selectedCategory}-${item.id}`,
        name: item.name,
        description: item.description || "No description available",
        price: item.price,
        img: item.img || item.image || "https://via.placeholder.com/150",
        quantity: 1,
      };
      this.$emit("add-to-cart", cartItem);
    },
    searchItems() {
      const query = this.searchQuery.toLowerCase();
      this.menuItems = this.allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
      );
    },
  },
  created() {
    this.fetchMenu("pizzas"); // Fetch default category
  },
  created() {
    this.fetchAllCategories();
  },
};
</script>

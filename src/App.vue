<template>
  <div id="app">

    <!-- Render the routed components here -->
    
    <AppHeader :cartCount="cartQuantity" @navigate="currentPage = $event" />

    <!-- Conditional Cart Display -->
    <AppCart
      v-if="$route.name === 'AppMenu' || $route.name === 'Contact'"
      :cartItems="cartItems"
      :total="total"
      @increase-quantity="handleIncreaseQuantity"
      @decrease-quantity="handleDecreaseQuantity"
      @checkout="handleCheckout"
      @clear-cart="clearCart"
    />
    <div class="content-container">
      <!-- <AppBanner v-if="$route.name === 'Home'" /> -->

      <router-view 
      :cartItems="cartItems" 
      :total="total" 
      @clear-cart="clearCart" 
      @clear-cartb="clearCartb" 
      @checkout="handleCheckout"
      @add-to-cart="handleAddToCart"
      @increase-quantity="handleIncreaseQuantity" 
      @decrease-quantity="handleDecreaseQuantity"> </router-view>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppBanner from "./components/Banner.vue";
import AppFooter from "./components/Footer.vue";
import AppCart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBanner,
    AppCart,
    AppFooter,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    },

    cartQuantity() {
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
  methods: {
    handleAddToCart(item) {
      const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity += 1;
      }
      else {
        this.cartItems.push({...item, quantity: 1});
      }
    },
    clearCart() {
      this.cartItems = [];
    },
    clearCartb() {
      this.cartItems = [];
    },
    handleIncreaseQuantity(item) {
      const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if(cartItem) {
        cartItem.quantity += 1;
      }
    },
    handleDecreaseQuantity(item) {
      const cartItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if(cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      }
      else {
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.id != item.id);
      }
    },
    handleCheckout() {
      this.cartItems = [];
    },
  },
  created() {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  },
  watch: {
    cartItems: {
      handler(newCart) {
        localStorage.setItem("cartItems", JSON.stringify(newCart));
      },
      deep: true,
    },
  },

};
</script>


<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(90deg, hsl(229, 69%, 87%), white, #f4ccec)
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes up the full viewport height */
}

.content-container {
  flex: 1; /* Ensures it stretches to take up remaining space */
  display: flex;
  flex-direction: column;
}

</style>


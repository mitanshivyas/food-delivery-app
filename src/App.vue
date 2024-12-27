<template>
  <div id="app">
    <AppHeader @navigate="currentPage = $event" />
    <main>
      <!-- Conditionally Render Pages -->
      <Home v-if="currentPage === 'home'" />
      <AppMenu v-if="currentPage === 'menu'" @add-to-cart="handleAddToCart" />
    </main>
    <AppBanner />
    <AppCart :cartItems="cartItems" :total="total" @increase-quantity="handleIncreaseQuantity" @decrease-quantity="handleDecreaseQuantity" @checkout="handleCheckout"/>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import Home from "./components/Home.vue";
import AppBanner from "./components/Banner.vue";
import AppMenu from "./components/Menu.vue";
import AppCart from "./components/Cart.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBanner,
    Home,
    AppMenu,
    AppCart,
    AppFooter,
  },
  data() {
    return {
      currentPage: "home",
      cartItems: [],
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
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
      alert("Order Placed Successfully!");
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
  font-family: "Arial", sans-serif;
}
</style>

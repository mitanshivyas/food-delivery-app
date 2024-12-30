<template>
  <div id="app">
    <AppHeader :cartCount="cartQuantity" @navigate="currentPage = $event" />
    <!-- <AppBanner /> -->
    <div class="content-container">
      <main class="pt-[64px] w-full px-4 overflow-visible">
        <!-- Add top padding equal to the header height -->
        <AppHome v-if="currentPage === 'home'" @navigate="currentPage = $event"/>
        <AppMenu v-if="currentPage === 'menu'" @add-to-cart="handleAddToCart" />    
        <ContactsPage v-if="currentPage === 'contact'" />
        <CartPage
          v-if="currentPage === 'cart'"
          :cartItems="cartItems"
          :total="total"
          @clear-cart="clearCart"
          @clear-cartb = "clearCartb"
          @checkout="handleCheckout"
          @increase-quantity="handleIncreaseQuantity" @decrease-quantity="handleDecreaseQuantity"
        />
      </main>
      <AppCart v-if = "currentPage != 'cart'" :cartItems="cartItems" :total="total" @increase-quantity="handleIncreaseQuantity" @decrease-quantity="handleDecreaseQuantity" @checkout="handleCheckout" @clear-cart="clearCart"/>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppHome from "./components/Home.vue";
import AppBanner from "./components/Banner.vue";
import AppMenu from "./components/Menu.vue";
import AppCart from "./components/Cart.vue";
import CartPage from "./components/CartPage.vue";
import AppFooter from "./components/Footer.vue";
import ContactsPage from "./components/ContactsPage.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBanner,
    AppHome,
    AppMenu,
    CartPage,
    AppCart,
    AppFooter,
    ContactsPage
  },
  data() {
    return {
      currentPage: "home",
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
  font-family: "Arial", sans-serif;
  background: linear-gradient(90deg, hsl(229, 69%, 87%), white, #f4ccec)
}

/* .container {
  max-width: 1200px;
  margin: 0 auto;
} */
</style>

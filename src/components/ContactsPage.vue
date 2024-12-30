<template>
    <section class="min-h-screen flex flex-col items-center">
      <!-- Banner Section -->
      <section
        class="bg-cover bg-center h-64 flex items-center justify-center w-full"
        style="background-image: url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg');"
      >
        <h2 class="text-3xl text-white font-bold">Contact Us</h2>
      </section>
  
      <!-- Contact Information -->
      <section class="container mx-auto py-8">
        <h3 class="text-2xl font-bold mb-4 text-center">We're Here to Help!</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <p><strong>Phone:</strong> +1 800-FOOD-123</p>
            <p><strong>Email:</strong> support@fooddelivery.com</p>
            <p><strong>Address:</strong> 456 Gourmet Avenue, Food City, USA</p>
            <p><strong>Business Hours:</strong> Mon-Sun, 10 AM - 10 PM</p>
          </div>
  
          <!-- Feedback Form -->
          <form @submit.prevent="submitFeedback" class="space-y-4 bg-gray-100 p-6 rounded shadow">
            <div>
              <label for="name" class="block text-sm font-bold mb-1">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label for="orderId" class="block text-sm font-bold mb-1">Order ID (Optional)</label>
              <input
                type="text"
                id="orderId"
                v-model="formData.orderId"
                class="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-bold mb-1">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-2 border rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600"
            >
              Submit Feedback
            </button>
          </form>
          <div v-if="feedbackSubmitted" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded shadow-lg text-center">
                <p>Feedback submitted successfully!</p>
                <button @click="closeFeedbackModal" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">OK</button>
            </div>
          </div>

        </div>
      </section>
  
      <!-- Map Section -->
      <section class="container mx-auto py-8">
        <h3 class="text-2xl font-bold mb-4 text-center">Our Location</h3>
        <div class="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0858474569175!2d144.9560543153165!3d-37.81362797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjkiUyAxNDTCsDU3JzI3LjciRQ!5e0!3m2!1sen!2sus!4v1635812726590!5m2!1sen!2sus"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            class="rounded shadow"
          ></iframe>
        </div>
      </section>
    </section>
  </template>
  
  <script>
export default {
  name: "ContactsPage",
  data() {
    return {
      feedbackSubmitted: false,
      formData: {
        name: "",
        email: "",
        orderId: "",
        message: "",
      },
    };
  },
  methods: {
    submitFeedback() {
      if (this.formData.name && this.formData.email && this.formData.message) {
        this.feedbackSubmitted = true;
      }
      console.log(this.formData);
    },
    closeFeedbackModal() {
      this.feedbackSubmitted = false;
      // Reset form data
      this.formData = {
        name: "",
        email: "",
        orderId: "",
        message: "",
      };
    },
  },
};
</script>

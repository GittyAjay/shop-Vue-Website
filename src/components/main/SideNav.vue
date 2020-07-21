<template>
  <cv-side-nav-items>
    <cv-side-nav-link v-for="item in  menu" :key="item.route" @click="navigateTo(item.route)">
      <template slot="nav-icon">
        <component v-bind:is="item.icon"></component>
      </template>
      {{ item.name }}
    </cv-side-nav-link>
  </cv-side-nav-items>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menu: [
        { name: "DASHBOARD", route: "Dashboard", icon: "Dashboard" },
        { name: "ORDER", route: "orders", icon: "Order" },
        // { name: "SUBJECT", route: "subject", icon: 'Bee' },
        { name: "PRODUCT", route: "products", icon: "Product" },
        { name: "COUPON", route: "coupons", icon: "Coupone" },
        { name: "CUSTOMER", route: "customers", icon: "customer" },
        { name: "BLOGS", route: "blogs", icon: "Blogs" },
        { name: "NOTIFICATION", route: "notifications", icon: "Notification" },
        { name: "SETTINGS", route: "settings", icon: "Setting" },
        { name: "APP DOWNLOAD", route: "AppDownload", icon: "AppDownload" }
      ]
    };
  },
  methods: {
    navigateTo(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<template>
  <div class="container w-100">
    <h3>Ledger</h3>
    <b-button variant="success" @click="addCustomer">Add Customer</b-button>
    <b-form-input class="search-box" placeholder="Search Customer..." />
    <b-button>
      <b-icon icon="search" font-scale="1"></b-icon>
    </b-button>
    <b-dropdown text="Hello, Test User" class="m-2">
      <b-dropdown-item href="#" @click="userProfile">Profile</b-dropdown-item>
      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  methods: {
    userProfile() {
      this.$router.push({ name: "profile", params: { id: "1" } });
    },
    addCustomer() {
      this.$router.push({ name: "add" });
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
}

.search-box {
  justify-content: center;
}
</style>

<template>
  <div>
    <h1>This the Add Customer Page</h1>
    <CustomerForm />
  </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "Add",
  components: {
    CustomerForm,
  },
};
</script>

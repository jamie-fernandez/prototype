<template>
  <div>
    <h1>This the Edit Customer Page</h1>
    <CustomerForm />
  </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm.vue";

export default {
  name: "Edit",
  components: {
    CustomerForm,
  },
};
</script>

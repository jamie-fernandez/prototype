<template>
  <div>
    <!-- ToolBar - which includes Add Customer Modal, Search Box, Profile View Link  -->
    <Toolbar />
    <!-- List - Loops through each customer and displays a list - Includes link to customer page  -->
    <List />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "Ledger",
  components: {
    Toolbar,
    List,
  },
};
</script>

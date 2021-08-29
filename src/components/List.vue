<template>
  <div>
    <b-table hover selectable :items="items" @row-clicked="customerProfile" />
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      items: [
        {
          event: "IHCC Graudation 2021",
          date: "05/21/2022",
          contact: "Jamie",
        },
        {
          event: "Iowa State Graudation 2021",
          date: "05/21/2022",
          contact: "Matt",
        },
      ],
    };
  },
  methods: {
    customerProfile(item) {
      console.log("route to customer view", item);
    },
  },
};
</script>

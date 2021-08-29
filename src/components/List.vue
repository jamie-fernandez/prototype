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
          id: "1",
          event: "IHCC Graudation 2021",
          date: "05/21/2022",
          contact: "Jamie",
        },
        {
          id: "2",
          event: "Iowa State Graudation 2021",
          date: "05/21/2022",
          contact: "Matt",
        },
      ],
    };
  },
  methods: {
    customerProfile(item) {
      this.$router.push({ name: "edit", params: { id: item.id } });
    },
  },
};
</script>

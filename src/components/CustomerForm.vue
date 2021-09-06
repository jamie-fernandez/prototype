<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group id="event-group" label="Event:" label-for="event">
        <b-form-input
          id="event"
          v-model="form.event"
          type="text"
          placeholder="Enter event name"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="contact-group" label="Contact:" label-for="contact">
        <b-form-input
          id="contact"
          v-model="form.contact"
          placeholder="Enter contact"
          required
        />
      </b-form-group>

      <b-form-group id="date-group" label="Event Date:" label-for="date">
        <b-form-input
          id="date"
          v-model="form.date"
          type="date"
          placeholder="Enter event date"
          required
        />
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "CustomerForm",
  data() {
    return {
      form: {
        event: null,
        date: null,
        contact: null,
      },
    };
  },
  props: {},
  methods: {
    onSubmit() {
      this.console.log("Save Form on Submit");
      alert(JSON.stringify(this.form));
    },
    onReset() {
      this.form.event = null;
      this.form.date = null;
      this.form.contact = null;
      this.console.log("Reset Form");
    },
  },
};
</script>

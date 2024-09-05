<script>
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";
import emailjs from "@emailjs/browser";
export default {
  components: { Button, FormInput, FormTextarea },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          process.env.VUE_APP_SEND_MAIL_SERVICE_ID,
          process.env.VUE_APP_SEND_MAIL_TEMPLATE_ID,
          this.$refs.form,
          {
            publicKey: process.env.VUE_APP_SEND_MAIL_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            this.$toast.open({
              message: "Email sent successfully!",
              type: "success",
              duration: 3000,
              dismissible: true,
            });
          },
          (error) => {
			console.log(error);
            this.$toast.open({
              message: "Falied to send email",
              type: "error",
              duration: 3000,
              dismissible: true,
            });
          }
        );
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact Form
      </p>
      <form
        ref="form"
        class="font-general-regular space-y-7"
        @submit.prevent="sendEmail"
      >
        <FormInput label="Full Name" inputIdentifier="name" name="from_name" />
        <FormInput
          label="Email"
          inputIdentifier="email"
          inputType="email"
          name="from_email"
        />
        <FormTextarea
          label="Message"
          textareaIdentifier="message"
          name="message"
        />

        <div class="flex justify-end">
          <Button
            title="Send"
            class="px-4 py-1 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

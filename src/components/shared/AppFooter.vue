<script>
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
import { socialLinks } from "../../data/socialLinks";

export default {
  components: { FooterCopyright },
  data() {
    return {
      socials: socialLinks,
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div
      class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
    >
      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>

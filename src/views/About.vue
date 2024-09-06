<script>
import AboutMe from "@/components/about/AboutMe";
import AboutCounter from "@/components/about/AboutCounter";
import AboutSkills from "@/components/about/AboutSkills";
import feather from "feather-icons";

export default {
  name: "About",
  components: {
    AboutMe,
    AboutCounter,
    AboutSkills,
  },
  data: () => {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <!-- About counter -->
    <AboutCounter />

    <!-- About Skills -->
    <div class="container mx-auto flex justify-center align-center">
      <AboutSkills />
    </div>
  </div>
</template>

<style scoped></style>

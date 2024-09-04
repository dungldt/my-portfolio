<script>
import AppBanner from "@/components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";

export default {
  name: "Home",
  components: {
    AppBanner,
    ProjectsGrid,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8" />

    <!-- Projects -->
    <ProjectsGrid />
  </div>
</template>

<style scoped></style>

<script>
export default {
  props: ["project"],
};
</script>

<template>
  <router-link
    :to="{ name: 'Single Project', params: { project_id: project.id } }"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>

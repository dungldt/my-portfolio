<script>
import counter from "vue3-autocounter";
export default {
  components: {
    counter,
  },
  data: () => {
    return {
      experienceTitle: "Years of experience",
      feedbackTitle: "Positive feedback",
      projectsTitle: "Projects completed",
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <!-- About me counters -->
    <div
      class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center
      max-w-[1000px]"
    >
      <!-- Years of experience counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="12"
          :duration="1"
          :autoinit="true"
          class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
          aria-label="About Status Counter"
        />
        <span class="block text-md text-ternary-dark dark:text-ternary-light">
          {{ experienceTitle }}
        </span>
      </div>

      <!-- Projects completed counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="77"
          :duration="1"
          :autoinit="true"
          class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
        />
        <span class="block text-md text-ternary-dark dark:text-ternary-light">
          {{ projectsTitle }}
        </span>
      </div>

      <!-- Positive feedback counter -->
      <div class="mb-20 sm:mb-0">
        <counter
          ref="counter"
          :startAmount="0"
          :endAmount="92"
          :duration="1"
          suffix="%"
          :autoinit="true"
          class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
        />
        <span class="block text-md text-ternary-dark dark:text-ternary-light">
          {{ feedbackTitle }}
        </span>
      </div>
    </div>
  </div>
</template>

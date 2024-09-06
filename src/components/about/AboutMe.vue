<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "• More than 11 years of experience in software development",
        },
        {
          id: 2,
          bio: "• Mainly work as a back-end developer",
        },
        {
          id: 3,
          bio: "• Be able to work independently or as part of a team",
        },
        {
          id: 4,
          bio: "• Have experience in website development",
        },
        {
          id: 4,
          bio: "• Have experience with client-server API interaction",
        },
        {
          id: 5,
          bio: "• Have the ability of training members and team management",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20 pl-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0 grid place-items-center flex-[0.4]">
      <img src="@/assets/images/profile.jpeg" class="rounded-xl w-60" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left flex-[0.6]">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>

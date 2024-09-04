<script>
import AboutSkillSingle from "./AboutSkillSingle.vue";

export default {
  components: {
    AboutSkillSingle
  },
  data: () => {
    const technologies = [
        "PHP", "HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "ReactJS", "Vue.js", "Next.js", "Node.js",
        "jQuery", "Tailwind", "Bootstrap", "Express", "NestJs", "Slim", "Phalcon", "Silex", "Symfony",
        "Laravel", "AWS", "MySQL", "Spanner", "BigQuery", "PostgreSQL", "MongoDB", "PHPUnit", "PHPCS",
        "Psalm", "PHPStan", "APC", "Memcached", "Redis", "Xdebug", "Git", "Jenkins", "Docker",
        "Vagrant", "JIRA", "Confluence", "Trello"
    ];

    const skills = technologies.map((tech, index) => ({
        id: index + 1,
        name: tech
    }));
    return {
      skillsHeading: "Skills",
      skills,
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ skillsHeading }}
    </p>
    <div class="grid mt-10 sm:mt-14">
        <ul
                class="flex flex-wrap justify-center
                    gap-3 text-sm text-gray-800"
        >
      <AboutSkillSingle
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      />
      </ul>
    </div>
  </div>
</template>

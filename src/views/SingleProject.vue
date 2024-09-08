<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import projectsData from "../data/projects";

export default {
  name: "Project",
  setup() {
    const projects = ref(projectsData);
    const router = useRouter();
    const route = useRoute();
    const project = computed(() => {
      return projects.value.find(p => p.id === parseInt(route.params.project_id));
    });
    const checkProject = () => {
      if (!project.value) {
        router.push({ name: 'Home' });
      }
    };
    onMounted(() => {
      checkProject();
    });
    return {
      project
    };
  },
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
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
  <div class="container mx-auto mt-10 sm:mt-20" v-if="project">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="project.detail.singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="project.detail.projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="project.detail.projectInfo" />
  </div>
  <div v-else>
    <p class="text-center font-general-medium text-lg text-primary-dark dark:text-primary-light">project not found.</p>
  </div>
</template>

<style scoped></style>

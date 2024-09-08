<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: "Project Management UI",
        singleProjectDate: "Jul 26, 2021 - Jul 26, 2022",
        singleProjectTag: "UI / Frontend",
      },
      projectImages: [
        {
          id: 1,
          title: "Kabul Project Management UI",
          img: require("@/assets/images/ui-project-1.jpg"),
        },
        {
          id: 2,
          title: "Kabul Project Management UI",
          img: require("@/assets/images/web-project-2.jpg"),
        },
        {
          id: 3,
          title: "Kabul Project Management UI",
          img: require("@/assets/images/mobile-project-2.jpg"),
        },
      ],
      projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: 2,
            title: "Address",
            details: "Ho Chi Minh city",
          },
          {
            id: 3,
            title: "REF",
            details: "https://project-company1.com",
          },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
          "Lorem ipsu objective content",
        technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "Vue.js",
              "TailwindCSS",
              "AdobeXD",
            ],
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: [
          {
            id: 1,
            details:
              "Lorem ips detail 1",
          },
          {
            id: 2,
            details:
              "Lorem ipsum detail 2",
          },
          {
            id: 3,
            details:
              "Lorem ipsum dolor detail 3",
          },
        ],
      },
    };
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
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />
  </div>
</template>

<style scoped></style>

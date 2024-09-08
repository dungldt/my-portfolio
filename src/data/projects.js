// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectDetail = {
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
const projects = [
    {
        id: 1,
        title: 'Google Health Platform',
        category: 'Web Application',
        img: require('@/assets/images/web-project-2.jpg'),
        detail: projectDetail
    },
    {
        id: 2,
        title: 'Phoenix Digital Agency',
        category: 'Mobile Application',
        img: require('@/assets/images/mobile-project-2.jpg'),
        detail: projectDetail
    },
    {
        id: 3,
        title: 'Project Management UI',
        category: 'UI/UX Design',
        img: require('@/assets/images/ui-project-1.jpg'),
        detail: projectDetail
    },
    {
        id: 4,
        title: 'Cloud Storage Platform',
        category: 'UI/UX Design',
        img: require('@/assets/images/ui-project-2.jpg'),
        detail: projectDetail
    },
    {
        id: 5,
        title: 'React Social App',
        category: 'Mobile Application',
        img: require('@/assets/images/mobile-project-1.jpg'),
        detail: projectDetail
    },
    {
        id: 6,
        title: 'Apple Design System',
        category: 'Web Application',
        img: require('@/assets/images/web-project-1.jpg'),
        detail: projectDetail
    },
];

export default projects;

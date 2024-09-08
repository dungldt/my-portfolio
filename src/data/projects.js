// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectDetail = {
    singleProjectHeader: {
        singleProjectTitle: "Urala - fortune telling app/web",
        singleProjectDate: "Jul 26, 2021 - Jul 26, 2022",
        singleProjectTag: "UI / Frontend",
    },
    projectImages: [
        {
            id: 1,
            title: "Kabul Project Management UI",
            img: require("@/assets/images/urala_01.png"),
        },
        {
            id: 2,
            title: "Kabul Project Management UI",
            img: require("@/assets/images/urala_02.png"),
        },
        {
            id: 3,
            title: "Kabul Project Management UI",
            img: require("@/assets/images/urala_03.png"),
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
                details: "https://uranaiapp.jp",
            },
        ],
        objectivesHeading: "Objective",
        objectivesDetails:
            "Urala - fortune telling app/web A fortune-telling app that allows you to enjoy various types of fortune telling, such as chat, telephone and email, safely and securely consult with over a thousand fortune tellers. Fortune tellers can provide consultation through both app or website freely.",
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "Silex",
                    "Symfony",
                    "TWIG",
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "Javascript",
                    "jQuery",
                    "Ajax",
                    "MySQL",
                    "AWS",
                    "Jaspersoft",
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
        title: 'Urala - fortune telling app/web',
        category: 'Web Application',
        img: require('@/assets/images/urala_01.png'),
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

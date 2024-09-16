// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projectDetailUrala = {
    singleProjectHeader: {
        singleProjectTitle: "Urala - fortune telling app/web",
        singleProjectDate: "June 2021 - present",
        singleProjectTag: "Full-stack developer",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/urala_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/urala_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/urala_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "Sharing-Innovations Vietnam Co., Ltd.",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://uranaiapp.jp",
            },
        ],
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
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "Urala - fortune telling app/web A fortune-telling app that allows you to enjoy various types of fortune telling, such as chat, telephone and email, safely and securely consult with over a thousand fortune tellers. Fortune tellers can provide consultation through both app or website freely.",
            },
        ],
    },
};
const projectDetailHamee = {
    singleProjectHeader: {
        singleProjectTitle: "Hamee-MF (Testing)",
        singleProjectDate: "April 2017 - September 2020",
        singleProjectTag: "Back-end developer and then Leader",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/hamee_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/hamee_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/hamee_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "Mulodo Vietnam Co., Ltd.",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://next-engine.net/",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "PHPUnit",
                    "Codeception",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "Implement UnitTest and E2E Testing to Next Engine, an EC management system (Japan) which make EC mall operations easier, centralized management of orders for all stores, automation of order processing, and streamlining of shipping operations.",
            },
        ],
    },
};
const projectDetailMYNGLE = {
    singleProjectHeader: {
        singleProjectTitle: "MYNGLE",
        singleProjectDate: "October 2016 – March 2017",
        singleProjectTag: "Back-end developer",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/MYNGLE_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/MYNGLE_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/MYNGLE_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "Ndex Technologies, Inc.",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://www.myngle.com/",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "Smarty",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "jQuery",
                    "Ajax",
                    "SCSS",
                    "PHPUnit",
                    "Codeception",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "An online language learning website which provides professional native teachers are chosen based on their experience, online teaching skills & qualifications, and flexible courses booking system to fit your busy schedule.",
            },
        ],
    },
};
const projectDetailCONSOLE = {
    singleProjectHeader: {
        singleProjectTitle: "CONSOLE",
        singleProjectDate: "July 2014 – September 2016",
        singleProjectTag: "Back-end developer",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/CONSOLE_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/CONSOLE_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/CONSOLE_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "Zinio Vietnam",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://www.zinio.com/sg",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "MySQL",
                    "eZ Publish",
                    "Smarty",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "jQuery",
                    "Ajax",
                    "Bootstrap",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "A digital magazines reading platform covering a host of wide-ranging categories in over 30 languages. Save time by purchasing a digital magazine with instant delivery to your library, access our magazines across multiple devices and enjoy listening to your articles with text-to-speech feature.",
            },
        ],
    },
};
const projectDetailWEBSHOP = {
    singleProjectHeader: {
        singleProjectTitle: "WEBSHOP",
        singleProjectDate: "December 2013 – June 2014",
        singleProjectTag: "Back-end developer",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/WEBSHOP_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/WEBSHOP_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/WEBSHOP_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "Lazada Vietnam",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://www.lazada.com/en/",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "Zend",
                    "MySQL",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "jQuery",
                    "Ajax",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "An eCommerce platform with presence in six countries of South East Asia provides end-to-end logistics capabilities, connects consumers to brands, ensures secure and seamless transactions for digital payments and financial services.",
            },
        ],
    },
};
const projectDetailDATION = {
    singleProjectHeader: {
        singleProjectTitle: "DATION",
        singleProjectDate: "September 2012 - November 2013",
        singleProjectTag: "Back-end & Front-end developer",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/DATION_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/DATION_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/DATION_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "Success Software Services",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://www.dation.nl/",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "Smarty",
                    "MySQL",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "jQuery",
                    "Ajax",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "A driving school management system of Netherlands with clear agenda makes it easy to manage lessons, vehicles and availability and even schedule an exam. With apps for students and instructors, everyone is always up to date on lessons, payments and progress.",
            },
        ],
    },
};
const projectDetailAUTOORDER = {
    singleProjectHeader: {
        singleProjectTitle: "AUTO-ORDER (database switching)",
        singleProjectDate: "July 2012 - August 2012",
        singleProjectTag: "Back-end developer",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/AUTO_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/AUTO_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/AUTO_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "FUJINET SYSTEMS JSC",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://www.cosmospc.co.jp/",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "VB 6.0",
                    "PL/SQL",
                    "Batch",
                    "SQLServer 2005",
                    "Oracle 11g",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "AUTO-ORDER (database switching) A management system of Cosmos Pharmaceutical (Japan) which develops a business model of opening multiple mega drugstores targeting small trade areas. They aim for offering quality products at the lowest possible price to enrich the lives of local customers.",
            },
        ],
    },
};
const projectDetailHYBRID = {
    singleProjectHeader: {
        singleProjectTitle: "HYBRID",
        singleProjectDate: "July 2011 - June 2012",
        singleProjectTag: "UI / Frontend",
    },
    projectImages: [
        {
            id: 1,
            img: require("@/assets/images/HYBRID_01.png"),
        },
        {
            id: 2,
            img: require("@/assets/images/HYBRID_02.png"),
        },
        {
            id: 3,
            img: require("@/assets/images/HYBRID_03.png"),
        },
    ],
    projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
            {
                id: 1,
                title: "Name",
                details: "FUJINET SYSTEMS JSC",
            },
            {
                id: 2,
                title: "Address",
                details: "Ho Chi Minh City, Vietnam",
            },
            {
                id: 3,
                title: "REF",
                details: "https://www.actnet.co.jp/",
            },
        ],
        technologies: [
            {
                title: "Tools & Technologies",
                techs: [
                    "PHP",
                    "Symfony",
                    "Postgres",
                    "Apache",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "jQuery",
                    "Ajax",
                ],
            },
        ],
        projectDetailsHeading: "Project Info",
        projectDetails: [
            {
                id: 1,
                details:
                    "A management system (Japan) which provides contract development, consultation, portal site development/management and leasing in real estate industry.",
            },
        ],
    },
};
const projects = [
    {
        id: 1,
        title: 'Urala - fortune telling app/web',
        category: 'Web Application',
        img: require('@/assets/images/urala_00.png'),
        detail: projectDetailUrala
    },
    {
        id: 2,
        title: 'Hamee-MF (Testing)',
        category: 'Web Application',
        img: require('@/assets/images/hamee_00.jpeg'),
        detail: projectDetailHamee
    },
    {
        id: 3,
        title: 'MYNGLE',
        category: 'Web Application',
        img: require('@/assets/images/MYNGLE_00.jpeg'),
        detail: projectDetailMYNGLE
    },
    {
        id: 4,
        title: 'CONSOLE',
        category: 'Web Application',
        img: require('@/assets/images/CONSOLE_00.jpeg'),
        detail: projectDetailCONSOLE
    },
    {
        id: 5,
        title: 'WEBSHOP',
        category: 'Web Application',
        img: require('@/assets/images/WEBSHOP_00.png'),
        detail: projectDetailWEBSHOP
    },
    {
        id: 6,
        title: 'DATION',
        category: 'Web Application',
        img: require('@/assets/images/DATION_00.png'),
        detail: projectDetailDATION
    },
    {
        id: 7,
        title: 'AUTO-ORDER (database switching)',
        category: 'Web Application',
        img: require('@/assets/images/AUTO_00.png'),
        detail: projectDetailAUTOORDER
    },
    {
        id: 8,
        title: 'HYBRID',
        category: 'Web Application',
        img: require('@/assets/images/HYBRID_00.jpeg'),
        detail: projectDetailHYBRID
    },
];

export default projects;

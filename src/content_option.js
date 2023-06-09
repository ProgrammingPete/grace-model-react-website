import mainImg from "./assets/images/main-img.jpg";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img5.jpg";

const logotext = "GRACE GUANDU";
const meta = {
    title: "Grace Romig",
    description: "I’m Grace Romig, independent model located in Cleveland Ohio",
};

const introdata = {
    title: "Welcome",
};

const dataAbout = {
    title: "About Myself",
    aboutme: "Hello and Welcome (or welcome back!) My name is Grace Guandu and I am located in Northeast Ohio, frequenting the Cleveland and Akron-Canton (Kent) areas. I began pursuing modeling consistently during the beginning of 2023. I am currently working with Orlando, Florida-based mother agency, modelscout non-exclusively making me open to signing with other agencies. I am also an active member of the Casting Networks site. So far, I have walked for two Cleveland fashion shows, \"A Tale of Two Cities\" and \"The Culture.\" At this time I am open for paid bookings and time-for-print (TFP) collaborations. Please see the \"Contact Me\" tab for inquiries and updated information. Thank you and have a great day!",
};
const agencies = [{
        agency: "modelscout",
        where: "Florida",
        date: "2023",
    },
    {
        agency: "Casting Networks",
        where: "Online",
        date: "2023",
    }
];
const fashionshows = [
    {
        name: "A Tale of Two Cities",
    },
    {
        name: "Casting Networks",
    }   

];

const dataPortfolio = [{
        img: mainImg,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img1,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img2,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img3,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img4,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "graceguandu@gmail.com",
    //description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
};

const socialprofiles = {
    instagram: "https://www.instagram.com/graceguandu/"

};
export {
    meta,
    dataAbout,
    dataPortfolio,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
    agencies,
    fashionshows
};
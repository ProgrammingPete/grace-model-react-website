import mainImg from "./assets/images/main-img.jpg";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img5.jpg";
import img5 from "./assets/images/img4.jpg";

const logotext = "GRACE GUANDU";
const meta = {
    title: "Grace Guandu",
    description: "I’m Grace Guandu, model located in Cleveland Ohio",
};

const introdata = {
    title: "Welcome",
};

const dataAbout = {
    title: "About Me",
    aboutme: "Hello and Welcome (or welcome back!) My name is Grace Guandu and I am located in Northeast Ohio, frequenting the Cleveland and Akron-Canton (Kent) areas. I began pursuing modeling consistently during the beginning of 2023. I am currently working with Orlando, Florida-based mother agency, modelscout non-exclusively making me open to signing with other agencies. I am also an active member of the Casting Networks site. So far, I have walked for two Cleveland fashion shows, \"A Tale of Two Cities\" and \"The Culture.\" At this time I am open for paid bookings and time-for-print (TFP) collaborations. Please see the \"Contact Me\" tab for inquiries and updated information. Thank you and have a great day!",
};
const agencies = [{
        agency: "modelscout",
        where: "Florida",
        date: "2023",
    }
];
const fashionshows = [
    {
        name: "A Tale of Two Cities", 
        where: "Cleveland, Ohio",
        date: "January 2023"
    },
    {
        name: "The Culture",
        where: "Cleveland, Ohio",
        date: "April 2023"
    },
];

const otherLinks = [
    {
        name: "Casting Networks",
        link: "https://app.castingnetworks.com/talent/public-profile/a6640410-9b56-11ed-b14a-99353f9eb690"
    },
    {
        name: "Comp Card",
        link: "https://modelscout.modasphere.com/pdfize/?orientation=portrait&name=Compcard_Grace_Guandu.pdf&url=modelscout.modasphere.com/contact/compcard_pdf/2014645/"
    },
    {
        name: "modelscout Agency",
        link: "https://www.modelscout.com/talent/grace-guandu-01452"
    },
    {
        name: "Sign the Petition",
        link: "https://www.change.org/p/stop-hate-speech-from-kent-state-republicans?recruiter=1304392936&recruited_by_id=7201daf0-d89e-11ed-9a65-4fd73c74412c&utm_source=share_petition&utm_campaign=share_for_starters_page&utm_medium=copylink&fbclid=PAAabqSp00qtPY004Iwvq"
    },    
];


const dataPortfolio = [{
        img: mainImg,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img4,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img1,
        // description: "The wisdom of life consists in the elimination of non-essentials.",
        // link: "#",
    },
    {
        img: img5,
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

];

const contactConfig = {
    YOUR_EMAIL: "graceguandu@gmail.com",
    //description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
};

const socialprofiles = {
    instagram: "https://www.instagram.com/graceguandu/",
    tiktok: "https://tiktok.com/@graceguandu",
    youtube: "https://youtube.com/@GraceGuandu"
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
    fashionshows,
    otherLinks
};
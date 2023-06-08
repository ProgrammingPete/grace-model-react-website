import mainImg from "./assets/images/main-img.jpg";
import img1 from "./assets/images/img1.jpeg";
import img2 from "./assets/images/img2.jpeg";
import img3 from "./assets/images/img3.jpeg";
import img4 from "./assets/images/img4.JPEG";

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
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
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
};
const body = document.querySelector('body')

// Sélectionne et créer les tags principaux du site
const html = document.querySelector("html");
html.classList.add("overflow-hidden"); //overflow-hidden

const head = document.querySelector("head");
body.classList.add("overflow-hidden", "bg-black"); //overflow-hidden // background-color: noir

const main = document.createElement("main");
const title = document.createElement("title");

title.textContent = "Jajou";

head.appendChild(title);

// Icône du site
const linkIcon = document.createElement("link");
linkIcon.setAttribute("rel", "icon");
linkIcon.setAttribute("href", "assets/images/profile-pic.png");
linkIcon.setAttribute("type", "image/x-icon");
head.appendChild(linkIcon);

body.appendChild(main);

// Grouper les éléments de la photo de profile
const contentProfile = document.createElement("div");
contentProfile.classList.add("content-profile");

const profileCard = document.createElement("div");

profileCard.classList.add(
  "profile-card",
  "min-h-screen", //min-height: 100vh
  "flex", // display:flex
  "items-center", // align-items:center
  "justify-center", // justify-content:center
  "flex-col" // flex-direction: column
  //   "pt-16", // padding-top: 64px
  //   "pr-4", //padding-right: 16px
  //   "pb-8" //pading-bottom: 32px
);

body.appendChild(contentProfile);
contentProfile.appendChild(profileCard);

// Le profil
const profilePicture = document.createElement("img");
profilePicture.src = "./assets/images/profile-pic.png";

profilePicture.classList.add("rounded-full", "w-auto", "m-3.5"); // border-radius: 100%; width: 25%; margin: 14px
profileCard.appendChild(profilePicture);

// Pseudo
const rgbName = document.createElement("div");
rgbName.classList.add("rgb-border-name");
profileCard.appendChild(rgbName);

const pseudo = document.createElement("h1");
pseudo.classList.add("pseudo", "text-2xl", "font-bold", "mt-1.5");

pseudo.textContent = "Jajou";
profileCard.appendChild(pseudo);

// Description
const description = document.createElement("p");
description.textContent = "Youtuber & Web dev";
description.classList.add("description");
profileCard.appendChild(description);

let index = 0;

const descriptions = ["Youtuber & Web Dev", "I Love Play Video Games"];

function changeDescription() {
  description.textContent = descriptions[index];

  index = (index + 1) % descriptions.length;
}

setInterval(changeDescription, 15000);

const languageNames = ["Jajou", "Caca"];

function changeLanguageName() {
  pseudo.textContent = languageNames[index];

  index = (index + 1) % languageNames.length;
}

setInterval(changeLanguageName, 15000);

changeDescription();

// Les boutons de réseaux
function socialsLink(parent, url, className, btnName) {
  const socialLink = document.createElement("div");
  socialLink.classList.add(
    className,
    "w-6/12",
    "text-center",
    "m-4",
    "p-4",
    "rounded-2xl",
    "cursor-pointer",
    "font-bold"
  );

  const link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.setAttribute("href", url);
  link.textContent = btnName;

  socialLink.appendChild(link);
  parent.appendChild(socialLink);
}

socialsLink(
  profileCard,
  "https://www.youtube.com/@Jajou64",
  "link-profile-youtube",
  "YouTube"
);
socialsLink(
  profileCard,
  "https://www.twitch.tv/jajoouuu",
  "link-profile-twitch",
  "Twitch"
);
socialsLink(
  profileCard,
  "https://discord.gg/yQHWpFT7uZ",
  "link-profile-discord",
  "Discord"
);

socialsLink(profileCard, "", "link-profile-speedrun", "Speedrun");

const linkProfileTwitch = document.querySelector(".link-profile-twitch");

const textTwitch = document.createElement("p");
textTwitch.textContent = "bientôt actif là-bas";
textTwitch.classList.add("text-xs", "font-normal");

linkProfileTwitch.appendChild(textTwitch);

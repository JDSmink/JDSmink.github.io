const myProfile = {
    username: "J. Smink",
    mail: "302669073@student.rocmondriaan.nl",
    birthday: "08-08-2005",
    profilePicture: "...",
    biography: "Ik ben 17 jaar, ik ben afkomstig uit Nederland, studeer op de school ROC Mondriaan.",
    bannerColor: "...",
    projects: [
        {
            projectName: "Hoger Lager",
            teamMates: [],
            description: "Het spel Hoger Lager was mijn eerste Jacascript Project.",
            img: "...",
            link: "#"
        }
    ],
    socialMedia: [
        {
            instagram: "jaydensmink",

        }
    ]
}

console.log(myProfile);

const myUserNameView = document.querySelector(".my-username");
myUserNameView.textContent = myProfile.username;

const myBiographyView = document.querySelector(".my-biography");
myBiographyView.textContent = myProfile.biography;
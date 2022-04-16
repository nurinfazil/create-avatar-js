"use strict"

const avatarCreator = new AvatarMaker();
avatarCreator.createGenerator(".avatar-generator")
avatarCreator.hide("eyes")
avatarCreator.hide("facialHair", true)
avatarCreator.hide("base")
avatarCreator.hide("hair", false)
avatarCreator.hide("clothes")

const avatarCreator2 = new AvatarMaker();
avatarCreator2.createGenerator(".avatar-generator")


document.getElementById("get-avatars-btn").addEventListener("click", () => displaySavedAvatars());

function displaySavedAvatars() {
    const avatars = avatarCreator2.getAvatars()
    const displayAvatarsElement = document.querySelector(`#avatars-container`)
    displayAvatarsElement.style.display = "flex"
    displayAvatarsElement.style.flexDirection = "row"
    displayAvatarsElement.style.flexWrap = "wrap"
    displayAvatarsElement.innerHTML = ""
    console.log(avatars)
    avatars.map((avatar) => {
        console.log("svgs", avatar)
        const avatarContainer = document.createElement("div")
        avatarContainer.id = "display-avatar"
        avatarContainer.style.display = "flex"
        avatarContainer.style.alignItems = "center"
        avatarContainer.style.justifyContent = "center"
        avatar.svgs.map((featureSVG, i) => {
            const svgContainer = document.createElement("div")
            if (i != 0) {
                svgContainer.style.position = "absolute"
            }
            svgContainer.innerHTML = featureSVG
            avatarContainer.append(svgContainer)
            displayAvatarsElement.append(avatarContainer)
        })
    })
}
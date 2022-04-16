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

function onAvatarSave() {
    console.log("Avatar saved!")
    const avatar = avatarCreator2.getAvatars()[avatarCreator2.getAvatars().length - 1]

    // Can save this object in your database for later use
    console.log(avatar)
}


avatarCreator2.onSave(onAvatarSave)

document.getElementById("get-avatars-btn").addEventListener("click", () => {
    avatarCreator2.displayAllAvatars("#avatars-container");
    const avatars = avatarCreator2.getAvatars();
    console.log(avatars)
});

document.getElementById("get-avatar-btn").addEventListener("click", (e) => {
    var avatarId = document.getElementById("avatar-id-input").value;
    avatarCreator2.displayAvatar(avatarId, "#avatar-container");
    const avatar = avatarCreator2.getAvatar(avatarId);
    console.log(avatar)
})
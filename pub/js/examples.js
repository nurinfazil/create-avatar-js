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
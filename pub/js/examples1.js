"use strict"

const avatarCreator = new AvatarMaker();
avatarCreator.createGenerator("#ex1-generator")

const avatarCreator2 = new AvatarMaker();
avatarCreator2.createGenerator("#ex2a-generator")
avatarCreator2.hide("nose")
avatarCreator2.hide("hair")

const avatarCreator3 = new AvatarMaker();
avatarCreator3.createGenerator("#ex2b-generator")
avatarCreator3.hide("hair")
avatarCreator3.hide("facialHair")
avatarCreator3.hide("clothes")

const avatarCreator4 = new AvatarMaker();
avatarCreator4.createGenerator("#ex2c-generator")
avatarCreator4.hide("nose", false)
avatarCreator4.hide("mouth", false)
avatarCreator4.hide("hair", false)
"use strict"

function AvatarMaker() {
    this.id = generateRandomId()
    this.currentlyEditing = 0
    this.features = {
        0: "Base",
        1: "Mouth",
        2: "Eyes",
        3: "Mouth",
        4: "Facial Hair",
        5: "Clothes",
        6: "Accessories",
        7: "Glasses "
    }
}

AvatarMaker.prototype = {
    createGenerator: makeNewGenerator
}

/**
 * Creates new Avatar Maker Window
 * @param {*} containerSelector selector for the container in which the AvatarMaker window will reside in
 */
function makeNewGenerator(containerSelector) {

    // link css
    var linkTag = document.createElement("link");
    linkTag.setAttribute("rel", "stylesheet");
    linkTag.setAttribute("type", "text/css");
    linkTag.setAttribute("href", "AvatarMaker.css");
    document.getElementsByTagName("head")[0].appendChild(linkTag);

    // Outer window
    const generatorWindow = document.createElement("div")
    generatorWindow.id = "avatar-maker-" + this.id
    generatorWindow.className = "avatar-maker"

    // Title div
    const title = document.createElement("div")
    title.className = "maker-title"
    title.innerText = "Create Your Avatar"

    // Contents div
    const contents = document.createElement("div")
    contents.className = "contents"

    const legendContainer = document.createElement("div")
    const viewAvatar = document.createElement("div")
    const changeColorAndSave = document.createElement("div")

    // Save button div
    const saveDiv = document.createElement("div")
    const saveButton = document.createElement("button")
    saveDiv.id = "save-button-div"
    saveButton.innerText = "Save"
    saveDiv.append(saveButton)

    generatorWindow.append(title)
    generatorWindow.append(contents)
    generatorWindow.append(saveDiv)

    contents.append(legendContainer)
    contents.append(viewAvatar)
    contents.append(changeColorAndSave)

    legendContainer.innerText = "hi"
    viewAvatar.innerText = "hi"
    changeColorAndSave.innerText = "hi"


    const container = document.querySelector(containerSelector)
    container.append(generatorWindow)
}



// Helpers

function generateRandomId() {
    const dateNum = Date.now()
    const randomNum = Math.floor(Math.random() * 100)

    const uniqueID = dateNum + randomNum

    return uniqueID
}
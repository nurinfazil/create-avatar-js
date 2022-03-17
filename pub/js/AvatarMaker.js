"use strict"

function AvatarMaker() {
    this.id = generateRandomId()
    this.currentlyEditing = 0
    this.features = [
        "Base",
        "Hair",
        "Eyes",
        "Mouth",
        "Facial Hair",
        "Clothes",
        "Accessories",
        "Glasses"
    ]
}

AvatarMaker.prototype = {
    createGenerator: makeNewGenerator,
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
    legendContainer.className = "legend"
    const viewAvatar = document.createElement("div")
    viewAvatar.className = "view-avatar"
    const colourSelector = document.createElement("div")
    colourSelector.className = "colour-selector"

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
    contents.append(colourSelector)

    // Set up legend 
    this.features.map((feature, i) => {
        const featureContainer = document.createElement("div")
        featureContainer.className = "legend-feature"
        featureContainer.id = feature.toLowerCase()
        const arrowContainer = document.createElement("div")
        arrowContainer.className = "arrow-container"
        const featureName = document.createElement("div")
        featureName.className = "feature-name"


        if (i == this.currentlyEditing) {
            featureName.classList.add("currently-selected")
            arrowContainer.innerHTML = `<svg width="20" height="20" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.34602 24.2986 0.34602 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85786L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM0 21.5H41V16.5H0V21.5Z" fill="black"/>
            </svg>`
        }

        featureContainer.appendChild(arrowContainer)
        featureContainer.appendChild(featureName)
        featureContainer.addEventListener("click", () => { this.updateCurrentlyEditing(feature.toLowerCase()) })

        featureName.innerText = feature
        legendContainer.appendChild(featureContainer)
    })

    viewAvatar.innerText = "hi"
    colourSelector.innerText = "hi"


    const container = document.querySelector(containerSelector)
    container.append(generatorWindow)
}

AvatarMaker.prototype.updateCurrentlyEditing = function (feature) {

    const lowercaseFeatures = this.features.map(feature => feature.toLowerCase());
    const allLegendItems = document.querySelector(".legend")

    // Remove underline on old item 
    const oldEditingItem = document.querySelector(`#${lowercaseFeatures[this.currentlyEditing]}`)
    const featureNameElement = document.querySelector(".feature-name.currently-selected")
    featureNameElement.classList.remove("currently-selected")
    allLegendItems.childNodes[this.currentlyEditing].getElementsByClassName("arrow-container")[0].innerHTML = ""
    // console.log(allLegendItems.childNodes[this.currentlyEditing])

    this.currentlyEditing = lowercaseFeatures.indexOf(feature)

    // Add to new item

    // Change underline
    allLegendItems.childNodes[this.currentlyEditing].getElementsByClassName("feature-name")[0].classList.add("currently-selected")
    allLegendItems.childNodes[this.currentlyEditing].getElementsByClassName("arrow-container")[0].innerHTML = `<svg width="20" height="20" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.34602 24.2986 0.34602 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85786L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM0 21.5H41V16.5H0V21.5Z" fill="black"/>
    </svg>`
}


// Generates a unique id for every instance of the Avatar Maker
function generateRandomId() {
    const dateNum = Date.now()
    const randomNum = Math.floor(Math.random() * 100)

    const uniqueID = dateNum + randomNum

    return uniqueID
}




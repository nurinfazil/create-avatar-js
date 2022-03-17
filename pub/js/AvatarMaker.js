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

    this.featureSVGs = {
        base: [`<svg width="270" height="270" viewBox="0 0 439 439" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M399.165 340.547C384.607 319.488 363.144 304.18 338.491 297.274L281.233 281.234V240.08C305.438 221.897 321.334 193.283 322.311 160.917C325.694 162.408 329.428 163.253 333.366 163.253C348.518 163.253 360.803 150.969 360.803 135.816C360.803 120.662 348.518 108.378 333.366 108.378C329.46 108.378 325.753 109.205 322.391 110.676V102.891C322.391 46.0648 276.324 0 219.5 0H219.499C162.674 0 116.609 46.0648 116.609 102.891V110.676C113.246 109.205 109.539 108.378 105.634 108.378C90.4806 108.378 78.1969 120.662 78.1969 135.816C78.1969 150.969 90.4806 163.253 105.634 163.253C109.57 163.253 113.305 162.409 116.689 160.917C117.664 193.283 133.56 221.897 157.764 240.08V281.234L100.508 297.274C75.8551 304.18 54.3921 319.488 39.8338 340.547L0 398.173V439H439V398.173L399.165 340.547Z" fill="#F5CDD3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M219.499 260.656C206.812 260.656 194.668 258.345 183.446 254.146C199.406 264.342 218.36 270.259 238.705 270.259C253.878 270.259 268.268 266.948 281.233 261.054V240.079C264.037 252.996 242.663 260.656 219.499 260.656Z" fill="#F48C9D"/>
        <path d="M120.188 139.819C120.538 138.545 120.726 137.202 120.726 135.816C120.726 127.482 113.969 120.726 105.635 120.726C103.551 120.726 101.566 121.148 99.7608 121.911" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M318.812 139.819C318.462 138.545 318.275 137.202 318.275 135.816C318.275 127.482 325.032 120.726 333.366 120.726C335.449 120.726 337.434 121.148 339.24 121.911" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`, `<svg width="270" height="270" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M290.963 248.235C280.351 232.884 264.706 221.726 246.736 216.692L204.999 205V175.001C222.643 161.747 234.23 140.89 234.942 117.297C237.408 118.384 240.13 119 243 119C254.045 119 263 110.046 263 99C263 87.954 254.045 79 243 79C240.153 79 237.451 79.603 235 80.675V75C235 33.578 201.421 0 160 0H159.999C118.578 0 85 33.578 85 75V80.675C82.548 79.603 79.846 79 77 79C65.954 79 57 87.954 57 99C57 110.046 65.954 119 77 119C79.869 119 82.591 118.385 85.058 117.297C85.769 140.89 97.356 161.747 114.999 175.001V205L73.263 216.692C55.293 221.726 39.648 232.884 29.036 248.235L0 290.24V320H320V290.24L290.963 248.235Z" fill="#FFCF83"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M159.999 190C150.751 190 141.899 188.316 133.719 185.255C145.353 192.687 159.169 197 173.999 197C185.059 197 195.548 194.587 204.999 190.29V175.001C192.464 184.417 176.884 190 159.999 190Z" fill="#F7A74F"/>
        <path d="M87.6086 101.919C87.8636 100.99 88.0006 100.011 88.0006 99.0005C88.0006 92.9255 83.0756 88.0005 77.0006 88.0005C75.4816 88.0005 74.0346 88.3085 72.7186 88.8645" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M232.391 101.919C232.136 100.99 232 100.011 232 99.0005C232 92.9255 236.925 88.0005 243 88.0005C244.518 88.0005 245.965 88.3085 247.282 88.8645" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`],
        hair: ["svg1", "svg2"],
        eyes: ["svg1", "svg2"],
        mouth: ["svg1", "svg2", "svg3"],
        facialHair: ["svg1", "svg2"],
        clothes: ["svg1", "svg2"],
        accessories: ["svg1", "svg2"],
        glasses: ["svg1", "svg2"],
    }

    this.selectedSVGs = {
        base: 0,
        hair: 0,
        eyes: 0,
        mouth: 0,
        facialHair: 0,
        clothes: 0,
        accessories: 0,
        glasses: 0
    }


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

    // Set up avatar viewer
    const leftArrowContainer = document.createElement("div")
    leftArrowContainer.id = "left-arrow"
    leftArrowContainer.innerHTML = `<svg width="29" height="29" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.4694 50L6.5714 26.5306M46.4694 4L6.5714 27.4694" stroke="black" stroke-width="7"/>
    <path d="M-3.01893e-05 27L11.9694 20.496L11.9694 33.504L-3.01893e-05 27Z" fill="black"/>
    </svg>`
    leftArrowContainer.addEventListener("click", () => { this.leftArrowClicked() })


    const currentAvatar = document.createElement("div")
    currentAvatar.id = "my-avatar"
    currentAvatar.innerHTML = this.featureSVGs.base[0]

    const rightArrowContainer = document.createElement("div")
    rightArrowContainer.id = "right-arrow"
    rightArrowContainer.innerHTML = `<svg width="29" height="29" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.26538 50L42.1633 26.5306M2.26538 4L42.1633 27.4694" stroke="black" stroke-width="7"/>
    <path d="M48.7348 27L36.7654 20.496L36.7654 33.504L48.7348 27Z" fill="black"/>
    </svg>`
    rightArrowContainer.addEventListener("click", () => { this.rightArrowClicked() })


    viewAvatar.appendChild(leftArrowContainer)
    viewAvatar.appendChild(currentAvatar)
    viewAvatar.appendChild(rightArrowContainer)

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

    // Change underline
    allLegendItems.childNodes[this.currentlyEditing].getElementsByClassName("feature-name")[0].classList.add("currently-selected")
    allLegendItems.childNodes[this.currentlyEditing].getElementsByClassName("arrow-container")[0].innerHTML = `<svg width="20" height="20" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.34602 24.2986 0.34602 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85786L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM0 21.5H41V16.5H0V21.5Z" fill="black"/>
    </svg>`
}

AvatarMaker.prototype.rightArrowClicked = function () {
    console.log("clicked right")

    let avatarContainer = document.querySelector("#my-avatar")
    avatarContainer.innerHTML = ""

    // loop through the svgs of the currently editing element
    const lengthOfCurrent = Object.values(this.featureSVGs)[this.currentlyEditing].length

    // SVG currently showing
    let currentlySelectedSVG = Object.values(this.selectedSVGs)[this.currentlyEditing]

    if (currentlySelectedSVG + 1 > (lengthOfCurrent - 1)) {
        currentlySelectedSVG = 0
    } else
        currentlySelectedSVG += 1

    const featureBeingEditedName = Object.keys(this.selectedSVGs)[this.currentlyEditing]

    this.selectedSVGs[featureBeingEditedName] = currentlySelectedSVG

    avatarContainer.innerHTML = Object.values(this.featureSVGs)[this.currentlyEditing][currentlySelectedSVG]
}

AvatarMaker.prototype.leftArrowClicked = function () {
    console.log("clicked left")
}


// Generates a unique id for every instance of the Avatar Maker
function generateRandomId() {
    const dateNum = Date.now()
    const randomNum = Math.floor(Math.random() * 100)

    const uniqueID = dateNum + randomNum

    return uniqueID
}




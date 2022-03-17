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
        base: [`<svg width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M245.5 209.448C236.546 196.496 223.346 187.081 208.183 182.834L172.968 172.969V147.657C187.855 136.474 197.632 118.876 198.232 98.9693C200.313 99.8865 202.61 100.406 205.031 100.406C214.35 100.406 221.906 92.8513 221.906 83.5312C221.906 74.2112 214.35 66.6562 205.031 66.6562C202.629 66.6562 200.349 67.165 198.281 68.0695V63.2812C198.281 28.3314 169.949 0 135 0H134.999C100.05 0 71.7188 28.3314 71.7188 63.2812V68.0695C69.6499 67.165 67.3701 66.6562 64.9688 66.6562C55.6487 66.6562 48.0938 74.2112 48.0938 83.5312C48.0938 92.8513 55.6487 100.406 64.9688 100.406C67.3895 100.406 69.6862 99.8873 71.7677 98.9693C72.3676 118.876 82.1441 136.474 97.0304 147.657V172.969L61.8157 182.834C46.6535 187.081 33.453 196.496 24.4991 209.448L0 244.89V270H270V244.89L245.5 209.448Z" fill="#F5CDD3"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M134.999 160.312C127.196 160.312 119.727 158.891 112.825 156.309C122.642 162.579 134.299 166.218 146.812 166.218C156.144 166.218 164.994 164.182 172.968 160.557V147.657C162.392 155.601 149.246 160.312 134.999 160.312Z" fill="#F48C9D"/>
        <path d="M73.9198 85.9938C74.1349 85.21 74.2505 84.3839 74.2505 83.5317C74.2505 78.406 70.095 74.2505 64.9693 74.2505C63.6876 74.2505 62.4667 74.5104 61.3563 74.9795" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M196.08 85.9938C195.865 85.21 195.75 84.3839 195.75 83.5317C195.75 78.406 199.906 74.2505 205.031 74.2505C206.312 74.2505 207.533 74.5104 208.644 74.9795" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`, `<svg width="270" height="270" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M290.963 248.235C280.351 232.884 264.706 221.726 246.736 216.692L204.999 205V175.001C222.643 161.747 234.23 140.89 234.942 117.297C237.408 118.384 240.13 119 243 119C254.045 119 263 110.046 263 99C263 87.954 254.045 79 243 79C240.153 79 237.451 79.603 235 80.675V75C235 33.578 201.421 0 160 0H159.999C118.578 0 85 33.578 85 75V80.675C82.548 79.603 79.846 79 77 79C65.954 79 57 87.954 57 99C57 110.046 65.954 119 77 119C79.869 119 82.591 118.385 85.058 117.297C85.769 140.89 97.356 161.747 114.999 175.001V205L73.263 216.692C55.293 221.726 39.648 232.884 29.036 248.235L0 290.24V320H320V290.24L290.963 248.235Z" fill="#FFCF83"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M159.999 190C150.751 190 141.899 188.316 133.719 185.255C145.353 192.687 159.169 197 173.999 197C185.059 197 195.548 194.587 204.999 190.29V175.001C192.464 184.417 176.884 190 159.999 190Z" fill="#F7A74F"/>
        <path d="M87.6086 101.919C87.8636 100.99 88.0006 100.011 88.0006 99.0005C88.0006 92.9255 83.0756 88.0005 77.0006 88.0005C75.4816 88.0005 74.0346 88.3085 72.7186 88.8645" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M232.391 101.919C232.136 100.99 232 100.011 232 99.0005C232 92.9255 236.925 88.0005 243 88.0005C244.518 88.0005 245.965 88.3085 247.282 88.8645" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`],
        hair: [`<svg width="300" height="314" viewBox="0 30 290 314" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M209.444 120.164V116.744C209.444 104.388 205.958 92.8489 199.923 83.0449C194.33 73.959 186.54 66.3779 177.299 61.0158C167.8 55.5038 156.774 52.3333 145 52.3333C133.227 52.3333 122.2 55.5038 112.701 61.0158C103.46 66.3779 95.6702 73.959 90.0772 83.0449C84.0428 92.8489 80.5555 104.388 80.5555 116.744V120.164C85.0248 120.838 88.8914 123.333 91.3645 126.884L97.4738 101.651C99.2235 94.4254 105.695 89.3361 113.133 89.3361H176.868C184.305 89.3361 190.776 94.4254 192.526 101.651L198.635 126.884C201.109 123.333 204.975 120.838 209.444 120.164" fill="#00004D"/>
        </svg>`, `<svg width="276" height="298" viewBox="0 35 276 298" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M119.877 87.4443C111.898 101.031 99.8199 111.92 85.3452 118.477C82.7868 115.859 79.2947 114.166 75.4054 113.905L77.4194 101.197V101.197C78.7028 93.0963 81.5847 85.5271 85.7285 78.813C89.5557 72.6146 94.467 67.1589 100.192 62.6873C102.43 60.9391 104.789 59.3375 107.26 57.9063C114.2 53.8917 122 51.1914 130.318 50.1507C132.834 49.8359 135.397 49.6663 138 49.6663C149.205 49.6663 159.7 52.6761 168.739 57.9063C177.535 62.996 184.948 70.1908 190.271 78.813C194.415 85.5271 197.297 93.0963 198.58 101.197L200.592 113.89C196.526 114.164 192.903 116.023 190.318 118.845C163.074 116.741 138.491 105.181 119.877 87.4443ZM103.5 187.186C89.986 177.057 81.0896 161.136 80.5445 143.114C78.6531 143.945 76.5663 144.415 74.3667 144.415C73.0802 144.415 71.839 144.241 70.6453 143.943L61.3334 202.698H103.5V187.186ZM201.633 144.415C199.434 144.415 197.346 143.945 195.455 143.114C194.91 161.136 186.014 177.057 172.5 187.186V202.698H214.667L205.355 143.943C204.161 144.24 202.92 144.415 201.633 144.415Z" fill="#00004D"/>
        </svg>`],
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
    const base = document.createElement("div")
    base.innerHTML = this.featureSVGs.base[0]
    base.id = "base-svg"
    currentAvatar.appendChild(base)

    const hair = document.createElement("div")
    hair.innerHTML = this.featureSVGs.hair[0]
    hair.id = "hair-svg"
    currentAvatar.appendChild(hair)

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

    const featureBeingEditedName = Object.keys(this.selectedSVGs)[this.currentlyEditing]

    let featureContainer = document.querySelector(`#${featureBeingEditedName}-svg`)
    console.log(featureContainer)

    featureContainer.innerHTML = ""

    // loop through the svgs of the currently editing element
    const lengthOfCurrent = Object.values(this.featureSVGs)[this.currentlyEditing].length

    // SVG currently showing
    let currentlySelectedSVG = Object.values(this.selectedSVGs)[this.currentlyEditing]

    if (currentlySelectedSVG + 1 > (lengthOfCurrent - 1)) {
        currentlySelectedSVG = 0
    } else
        currentlySelectedSVG += 1

    this.selectedSVGs[featureBeingEditedName] = currentlySelectedSVG

    featureContainer.innerHTML = Object.values(this.featureSVGs)[this.currentlyEditing][currentlySelectedSVG]
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




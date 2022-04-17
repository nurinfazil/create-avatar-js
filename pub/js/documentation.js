/****  .displayAvatarGivenSVGs Example *****/

const avatar = new AvatarMaker()
const svgs = [
    `<svg width="270" height="273" viewBox="0 0 270 273" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M245.5 211.775C236.546 198.679 223.346 189.16 208.183 184.865L172.968 174.891V149.298C187.855 137.99 197.632 120.197 198.232 100.069C200.313 100.996 202.61 101.522 205.031 101.522C214.35 101.522 221.906 93.883 221.906 84.4594C221.906 75.0358 214.35 67.3969 205.031 67.3969C202.629 67.3969 200.349 67.9113 198.281 68.8259V63.9844C198.281 28.6462 169.949 0 135 0H134.999C100.05 0 71.7188 28.6462 71.7188 63.9844V68.8259C69.6499 67.9113 67.3701 67.3969 64.9688 67.3969C55.6487 67.3969 48.0938 75.0358 48.0938 84.4594C48.0938 93.883 55.6487 101.522 64.9688 101.522C67.3895 101.522 69.6862 100.997 71.7677 100.069C72.3676 120.197 82.1441 137.99 97.0304 149.298V174.891L61.8157 184.865C46.6535 189.16 33.453 198.679 24.4991 211.775L0 247.611V273H270V247.611L245.5 211.775Z" fill="#E9ADA1"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M134.999 162.093C127.196 162.093 119.727 160.657 112.825 158.045C122.642 164.386 134.299 168.065 146.812 168.065C156.144 168.065 164.994 166.007 172.968 162.341V149.297C162.392 157.33 149.246 162.093 134.999 162.093Z" fill="#DB8B79"/>
    <path d="M73.9198 86.9492C74.1349 86.1567 74.2505 85.3215 74.2505 84.4598C74.2505 79.2771 70.095 75.0754 64.9693 75.0754C63.6876 75.0754 62.4667 75.3382 61.3563 75.8125" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M196.08 86.9492C195.865 86.1567 195.75 85.3215 195.75 84.4598C195.75 79.2771 199.906 75.0754 205.031 75.0754C206.312 75.0754 207.533 75.3382 208.644 75.8125" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`, `<svg width="299" height="324" viewBox="0 30 299 324" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M129.866 95.0738C121.222 109.846 108.138 121.685 92.4577 128.814C89.6853 125.968 85.9021 124.127 81.6895 123.843L83.8714 110.027V110.026C85.2617 101.219 88.3838 92.9894 92.873 85.6895C97.0183 78.9503 102.339 73.0186 108.541 68.1569C110.966 66.2561 113.521 64.5148 116.199 62.9588C123.717 58.5939 132.167 55.658 141.177 54.5265C143.904 54.1842 146.68 53.9998 149.5 53.9998C161.639 53.9998 173.007 57.2722 182.801 62.9588C192.329 68.4925 200.361 76.3151 206.127 85.6895C210.617 92.9894 213.738 101.219 215.128 110.027L217.308 123.827C212.904 124.125 208.979 126.146 206.178 129.214C176.664 126.926 150.032 114.358 129.866 95.0738ZM77.4607 238.175L112.125 228.462V203.517C97.4845 192.504 87.8476 175.195 87.2571 155.6C85.2081 156.504 82.9465 157.016 80.5636 157.016C79.0744 157.016 77.6392 156.801 76.2663 156.433L62.3553 244.519C67.0804 241.811 72.1451 239.665 77.4607 238.175ZM218.436 157.015C216.053 157.015 213.792 156.504 211.743 155.601C211.152 175.195 201.515 192.506 186.875 203.519V228.462L221.539 238.175C226.855 239.664 231.919 241.81 236.644 244.519L222.734 156.434C221.36 156.801 219.925 157.015 218.436 157.015Z" fill="#04104d"></path>
    </svg>`, `<svg width="89" height="150" viewBox="0 55 89 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.9905 18C80.9905 21.9762 77.8025 25.2 73.8705 25.2C69.9385 25.2 66.7505 21.9762 66.7505 18C66.7505 14.0238 69.9385 10.8 73.8705 10.8C77.8025 10.8 80.9905 14.0238 80.9905 18" fill="#00004D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.25 18C22.25 21.9762 19.062 25.2 15.13 25.2C11.198 25.2 8.01001 21.9762 8.01001 18C8.01001 14.0238 11.198 10.8 15.13 10.8C19.062 10.8 22.25 14.0238 22.25 18" fill="#00004D"/>
    </svg>`, `<svg width="29" height="150" viewBox="0 35 29 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.325 8.6001L19.575 32.9668L9.42505 34.4001" stroke="#00004D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`, `<svg width="80" height="60" viewBox="0 -10 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0001 9.49976C60.0001 20.5458 51.0461 29.4998 40.0001 29.4998C28.9541 29.4998 20.0001 20.5458 20.0001 9.49976H60.0001Z" fill="white"/>
    </svg>`, `<svg width="268" height="300" viewBox="0 -77 268 117" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M268 92.1291L243.682 57.0249C234.795 44.1967 221.692 34.871 206.641 30.664L171.687 20.8928C171.687 41.6628 154.814 58.5 134 58.5V58.5C113.186 58.5 96.3125 41.6628 96.3125 20.8928L61.3578 30.664C46.3079 34.871 33.2052 44.1967 24.3176 57.0249L0 92.1291V117H268V92.1291Z" fill="#80C43B"></path>
    </svg>`, ``, `<svg width="160" height="200" viewBox="0 50 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M138 40.0003C138 52.7023 127.702 63.0003 115 63.0003C102.298 63.0003 92 52.7023 92 40.0003C92 27.2973 102.298 17.0003 115 17.0003C127.702 17.0003 138 27.2973 138 40.0003Z" stroke="#00004D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 40.0003C22 52.7023 32.297 63.0003 45 63.0003C57.703 63.0003 68 52.7023 68 40.0003C68 27.2973 57.703 17.0003 45 17.0003C32.297 17.0003 22 27.2973 22 40.0003Z" stroke="#00004D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M66.5747 32.0179C68.2897 26.2259 73.6517 21.9999 79.9997 21.9999C86.3487 21.9999 91.7097 26.2259 93.4257 32.0179" stroke="#00004D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

]
avatar.displayAvatarGivenSVGs(svgs, "#displaying-example")

/****  .displayAvatarGivenSVGs Example *****/
const avatar2 = new AvatarMaker()
avatar2.createGenerator("#displaying-options-example")

document.getElementById("get-avatars-btn").addEventListener("click", () => {
    const avatars = avatar2.getAvatars();
    console.log(".displayAvatarGivenSVGs() return: ", avatars)
});

/****  .displayAllAvatars Example *****/

document.getElementById("display-avatars-btn").addEventListener("click", () => {
    avatar2.displayAllAvatars("#container-to-display-avatars-in");
});

/****  .getAvatar() Example *****/

document.getElementById("get-avatar-btn").addEventListener("click", (e) => {
    var avatarId = document.getElementById("avatar-id-input").value;
    const avatar = avatar2.getAvatar(avatarId);
    console.log(avatar)
})

/****  .displayAvatarGivenId() Example *****/
document.getElementById("display-avatar-btn").addEventListener("click", (e) => {
    var avatarId = document.getElementById("avatar-id-input2").value;
    avatar2.displayAvatarGivenId(avatarId, "#container-to-display-avatar-in");
})
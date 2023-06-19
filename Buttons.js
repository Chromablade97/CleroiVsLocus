const LocusButton = document.getElementById("LocusButton");
const CleroiButton = document.getElementById("CleroiButton");
const LocusWeapon = document.getElementById("LocusWeapon");
const LocusWeaponTooltip = document.getElementById("LocusWeaponTooltip");
const CleroiWeapon = document.getElementById("CleroiWeapon");
const CleroiWeaponTooltip = document.getElementById("CleroiWeaponTooltip");
const CleroiWeapon2 = document.getElementById("CleroiWeapon2");
const CleroiWeaponTooltip2 = document.getElementById("CleroiWeaponTooltip2");
const LocusWeapon2 = document.getElementById("LocusWeapon2");
const LocusWeaponTooltip2 = document.getElementById("LocusWeaponTooltip2");
const PlayButton = document.getElementById("Playbutton");
const SelectionText = document.getElementById("UnitSelection");
const PlanetSelect = document.getElementById("PlanetSelect");
const Serpulo = document.getElementById("Serpulo");
const Ereiker = document.getElementById("Ereiker");
const EreikerProceed = document.getElementById("EreikerProceed");
const SerpuloProceed = document.getElementById("SerpuloProceed");
const GroundZero = document.getElementById("GroundZero");
const InfoButton = document.getElementById("InfoButton");
const TheOnset = document.getElementById("TheOnset");
const AddInfo = document.getElementById("AddInfo");
const AddInfo2 = document.getElementById("AddInfo2");
const InfoButtonOn = document.getElementById("InfoButtonOn"); 
const Fade = document.getElementById("Fade");
// Const variable break
const OnsetPlay = document.getElementById("OnsetPlay"); 
const GroundZeroPlay = document.getElementById("GroundZeroPlay"); 

PlanetSelect.style.display = "none";

// Other variables
let LocusWeaponTooltipOpen = 2; // 2 = false 4 = true
let MenuMusic = new Audio("https://www.youtube.com/watch?v=cRJH4IXKbmY");

// first phase of buttons
LocusButton.addEventListener("click", function () {
    LocusButton.style.display = "none";
    CleroiButton.style.display = "none";
    LocusWeapon.style.display = "block";
    LocusWeapon2.style.display = "block";
    PlayButton.style.display = "block";
})

CleroiButton.addEventListener("click", function () {
    LocusButton.style.display = "none";
    CleroiButton.style.display = "none"; 
    CleroiWeapon.style.display = "block";
    CleroiWeapon2.style.display = "block";
    PlayButton.style.display = "block";
})

// LocusButton continuation

LocusWeapon.addEventListener("click", function () {
    LocusWeaponTooltip.style.display = "block";
})
LocusWeaponTooltip.addEventListener("click", function () {
    LocusWeaponTooltip.style.display = "none"; 
})

LocusWeapon2.addEventListener("click", function () {
    LocusWeaponTooltip2.style.display = "block";
})

LocusWeaponTooltip2.addEventListener("click", function () {
    LocusWeaponTooltip2.style.display = "none";
})

// CleroiButton continuation

CleroiWeapon.addEventListener("click", function () {
    CleroiWeaponTooltip.style.display = "block";
})

CleroiWeaponTooltip.addEventListener("click", function () {
    CleroiWeaponTooltip.style.display = "none";
})


CleroiWeapon2.addEventListener("click", function () {
    CleroiWeaponTooltip2.style.display = "block";
})

CleroiWeaponTooltip2.addEventListener("click", function () {
    CleroiWeaponTooltip2.style.display = "none";
})

// Second to last stages
PlayButton.addEventListener("click", () => {
    LocusWeapon.style.display = "none";
    LocusWeapon2.style.display = "none"; 
    LocusWeaponTooltip.style.display = "none";
    LocusWeaponTooltip2.style.display = "none";
    CleroiWeapon.style.display = "none";
    CleroiWeapon2.style.display = "none";
    CleroiWeaponTooltip.style.display = "none";
    CleroiWeaponTooltip2.style.display = "none";
    PlayButton.style.display = "none";
    SelectionText.style.display = "none";
    PlanetSelect.style.display = "block";
    Serpulo.style.display = "block";
    Ereiker.style.display = "block";
})


// Last stages (Main map)
const EreikerDesc = document.getElementById("EreikerDesc");
const SerpuloDesc = document.getElementById("SerpuloDesc");

Serpulo.addEventListener("click", () => {
    SerpuloDesc.style.display = "block";
    SerpuloDesc.addEventListener("click", () => {
        SerpuloDesc.style.display = "none";
        SerpuloProceed.style.display = "block";
        SerpuloProceed.addEventListener("click", () => {
            SerpuloProceed.style.display = "none";
            Serpulo.style.display = "none";
            SerpuloDesc.style.display = "none";
            Ereiker.style.display = "none";
            EreikerDesc.style.display = "none";
            EreikerProceed.style.display = "none"; 
            PlanetSelect.style.display = "none"; 
            // Planetary controls 
            GroundZero.style.display = "block"; 
            InfoButton.style.display = "block"; 
            GroundZeroPlay.style.display = "block"; 
        })
    })
})
// Arrow functions go brrrrrr
Ereiker.addEventListener("click", () => {
    EreikerDesc.style.display = "block";
    EreikerDesc.addEventListener("click", () => {
        EreikerDesc.style.display = "none";
        EreikerProceed.style.display = "block";
        EreikerProceed.addEventListener("click", () => {
            EreikerProceed.style.display = "none";
            Ereiker.style.display = "none";
            EreikerDesc.style.display = "none"; 
            Serpulo.style.display = "none";
            SerpuloDesc.style.display = "none";
            SerpuloProceed.style.display = "none"; 
            PlanetSelect.style.display = "none";
            // Planetary controls 
            TheOnset.style.display = "block"; 
            InfoButtonOn.style.display = "block"; 
            OnsetPlay.style.display = "block";
        })
    })
})

InfoButton.addEventListener("click", () => {
    AddInfo.style.display = "block";
    AddInfo.addEventListener("click", () => {
        AddInfo.style.display = "none"; 
    })
})

InfoButtonOn.addEventListener("click", () => {
    AddInfo2.style.display = "block";
    AddInfo2.addEventListener("click", () => {
        AddInfo2.style.display = "none"; 
    })
})

OnsetPlay.addEventListener("click", () => {
    TheOnset.style.display = "none"; 
    InfoButtonOn.style.display = "none"; 
    OnsetPlay.style.display = "none"; 
    Fade.style.display = "block"; 
})

GroundZeroPlay.addEventListener("click", () => {
    GroundZero.style.display = "none"; 
    InfoButton.style.display = "none"; 
    GroundZeroPlay.style.display = "none";
    Fade.style.display = "block";
})
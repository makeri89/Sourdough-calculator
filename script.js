const wheat = document.getElementById('wheat');
const spelt = document.getElementById('spelt');
const rye = document.getElementById('rye');
const wheatRatio = document.getElementById('wheatRatio');
const speltRatio = document.getElementById('speltRatio');
const ryeRatio = document.getElementById('ryeRatio');
const breadAmount = document.getElementById('breadAmount');
const flourError = document.getElementById('flourError');
const hydrationPercent  = document.getElementById('hydration');
const calcBtn = document.getElementById('calcBtn');
const waterAmountDisplay = document.getElementById('waterAmount');
const wheatAmountDisplay = document.getElementById('wheatAmount');
const speltAmountDisplay = document.getElementById('speltAmount');
const ryeAmountDisplay = document.getElementById('ryeAmount');
const saltAmount = document.getElementById('salt');
const saltAmountDisplay = document.getElementById('saltAmount');
const starterAmount = document.getElementById('starter');
const starterAmountDisplay = document.getElementById('starterAmount');
const recipeDisplay = document.getElementById('recipeDisplay');
let multiplier = '';
let wheatPercent ='100';
let speltPercent = '';
let ryePercent = '';
let totalFlourAmount = 500;
let hydrationMultiplier = '';
let waterAmount = '';
let baseWaterAmount = 500;
let wheatMultiplier = '';
let wheatAmount = '';
let speltMultiplier = '';
let speltAmount = '';
let ryeMultiplier = '';
let ryeAmount = '';
let saltMultiplier = '';
let salt = '';
let starter = '';

wheat.addEventListener('click', (e) => {
    wheatRatio.style.display = 'inline';
});

spelt.addEventListener('click', (e) => {
    speltRatio.style.display = 'inline';
});

rye.addEventListener('click', (e) => {
    ryeRatio.style.display = 'inline';
});

wheatRatio.addEventListener('change', (e) => {
    wheatPercent = wheatRatio.value;
});

speltRatio.addEventListener('change', (e) => {
    speltPercent = speltRatio.value;
});

ryeRatio.addEventListener('change', (e) => {
    ryePercent = ryeRatio.value;
});

speltRatio.addEventListener('change', (e) => {
    wheatRatio.value = 100 - speltPercent;
    wheatPercent = wheatRatio.value;
});

ryeRatio.addEventListener('change', (e) => {
    wheatRatio.value = 100 - speltPercent - ryePercent;
    wheatPercent = wheatRatio.value;
});

saltAmount.addEventListener('change', (e) => {
    saltMultiplier = saltAmount.value / 100;
});

starterAmount.addEventListener('change', (e) => {
    starterMultiplier = starterAmount.value / 100;
});

const calculateWheatAmount = () => {
    wheatMultiplier = wheatPercent / 100;
    wheatAmount = wheatMultiplier * (totalFlourAmount * breadAmount.value);
    let wheat = document.createTextNode(+ wheatAmount + ' grams of wheat flour');
    wheatAmountDisplay.appendChild(wheat);
}

const calculateSpeltAmount = () => {
    speltMultiplier = speltPercent / 100;
    speltAmount = speltMultiplier * (totalFlourAmount * breadAmount.value);
    if (speltAmount != 0) {
        let spelt = document.createTextNode(speltAmount + ' grams of spelt flour');
        speltAmountDisplay.appendChild(spelt);
    }
}

const calculateRyeAmount = () => {
    ryeMultiplier = ryePercent / 100;
    ryeAmount = ryeMultiplier * (totalFlourAmount * breadAmount.value);
    if (ryeAmount != 0) {
        let rye = document.createTextNode(ryeAmount + ' grams of rye flour');
        ryeAmountDisplay.appendChild(rye);
    }
}

const calculateWaterAmount = () => {
    hydrationMultiplier = hydrationPercent.value / 100;
    waterAmount = hydrationMultiplier * (baseWaterAmount * breadAmount.value);
    let water = document.createTextNode(waterAmount + ' grams of water');
    waterAmountDisplay.appendChild(water);
}

const calculateFlourAmount = () => {
    calculateWheatAmount();
    calculateSpeltAmount();
    calculateRyeAmount();
}

const calculateStarterAmount = () => {
    starter = (starterMultiplier * (totalFlourAmount * breadAmount.value)) / 10 * 10;
    if (starter != 0) {
        let starterNode = document.createTextNode(starter + ' grams of starter');
        starterAmountDisplay.appendChild(starterNode);
    }
}

const calculateSaltAmount = () => {
    salt = (saltMultiplier * (totalFlourAmount * breadAmount.value)) / 10 * 10;
    if (salt != 0) {
        let saltNode = document.createTextNode(salt + ' grams of salt');
        saltAmountDisplay.appendChild(saltNode);
    }
}

const clearPreviousAmounts = () => {
    wheatAmountDisplay.innerText = '';
    speltAmountDisplay.innerText = '';
    ryeAmountDisplay.innerText = '';
    starterAmountDisplay.innerText = '';
    saltAmountDisplay.innerText = '';
    waterAmountDisplay.innerText = '';
}

calcBtn.addEventListener('click', (e) => {
    clearPreviousAmounts();
    calculateWaterAmount();
    calculateFlourAmount();
    calculateStarterAmount();
    calculateSaltAmount();
    recipeDisplay.style.display = 'inline';
})



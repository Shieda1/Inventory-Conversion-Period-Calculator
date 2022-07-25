// https://calculator.swiftutors.com/inventory-conversion-period-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inventoryConversionPeriodRadio = document.getElementById('inventoryConversionPeriodRadio');
const inventoryTurnoverRatioRadio = document.getElementById('inventoryTurnoverRatioRadio');

const days = 365;
let inventoryConversionPeriod;
let inventoryTurnoverRatio = v1;

// labels of the inpust
const variable1 = document.getElementById('variable1');

inventoryConversionPeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory Turnover Ratio';
  inventoryTurnoverRatio = v1;
});

inventoryTurnoverRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Inventory Conversion Period';
  inventoryConversionPeriod = v1;
});

btn.addEventListener('click', function() {
  
  if(inventoryConversionPeriodRadio.checked)
    result.textContent = `Inventory Conversion Period = ${computeInventoryConversionPeriod().toFixed(2)} Days`;

  else if(inventoryTurnoverRatioRadio.checked)
    result.textContent = `Inventory Turnover Ratio = ${computeInventoryTurnoverRatio().toFixed(2)}`;
})

// calculation

function computeInventoryConversionPeriod() {
  return days / Number(inventoryTurnoverRatio.value);
}

function computeInventoryTurnoverRatio() {
  return days / Number(inventoryConversionPeriod.value);
}
'use strict'
/*-----Задание № 1-----*/

function warrantyPrice(period) {
  switch (period) {
    case 1:
      return 1250;
    case 2:
      return 2300;
    default:
      return 0;
  }
}

// function printWarrantyPrice (period) {
//   period > 2 || period < 0 ? console.log('Гарантия не осуществляется!') : console.log(`Дополнительное гарантийное обслуживание: ${warrantyPrice(period)} Q.`);
// }

// printWarrantyPrice(-1);

/*-----Задание № 2-----*/

function getWordCount(stringEngraving) {
  let wordArray = stringEngraving.split(' ');
  let cleanWordArray = wordArray.filter((el) => el);
  return cleanWordArray.length;
}

function engravingPrice(engraving) {
  if (!engraving) {
    return 0;
  } else {
    return getWordCount(engraving) * wordCost;
  }
}

// function printEngravingPrice(textEngraving) {
//   console.log(`Подарочная упаковка и гравировка: ${engravingPrice(textEngraving)} Q.`);
// }

// printEngravingPrice(engraving);

/*-----Задание № 3-----*/

function deliveryPrice(need, deliveryPlace) {
  if (!need) {
    return 0;
  } else {
    if (deliveryPlace in deliveryPlaces) {
      return deliveryPlaces[deliveryPlace];
    } else {
      return NaN;
    }
  }
}

// function printDeliveryPrice(need, deliveryPlace) {
//   let result = deliveryPrice(need, deliveryPlace);
//   if (isNaN(result)) {
//     return `Ошибка при расчете стоимости доставки.`;
//   } else {
//     return `Стоимость доставки: ${result} Q`;
//   }
  
// }

// console.log(printDeliveryPrice(1, 'Туманносrть Ориона'));

/*----- Задание № 4 -----*/



function printTotalPrice(warrantyPeriod, engraving, needDelivery, deliveryPlace) {
  let warrantyCost = warrantyPrice(warrantyPeriod);
  let engravingCost = engravingPrice(engraving);
  let deliveryCost = deliveryPrice(needDelivery, deliveryPlace);
  let totalCost = warrantyCost + engravingCost + deliveryCost;

  if (isNaN(totalCost)) {
    console.log (`Проверьте правильность закаказа.`);
  } else {
    console.log (`Общая стоимость заказа: ${totalCost} Q.`);
  }

  console.log (`Из них ${warrantyCost} Q за гарантийное обслуживание на ${warrantyPeriod} год/года.`);
  console.log (`Гравировка на сумму ${engravingCost} Q.`);

  if (isNaN(deliveryCost)) {
      console.log (`Ошибка при расчете стоимости доставки.`);
    } else if (!deliveryCost) {
      console.log (`Доставка не осуществляется.`);
    } else {
      console.log (`Доставка в область ${deliveryPlace} : ${deliveryCost} Q.`);
    }
}

/* Список мест возможной доставки*/
let deliveryPlaces = {
  'Луна': 150,
  'Крабовидная туманность': 250,
  'Галактика Туманность Андромеды': 550,
  'Туманность Ориона': 600,
  'Звезда смерти': 'договорная цена'
}

/* Стоимость одного слова гравировки */
let wordCost = 100;

/* Задается гарантийный период. Возможная гарантия только на 1 или 2 года*/
let warrantyPeriod = 1;

/* Гравировка на упаковке */
let engraving = 'Я хочу, чтобы этот      текст был написан на упаковке!';

/* Задаем необходимость доставки, где true - нужна, а false - нет.*/
let needDelivery = false;

/* Задаем место доставки. */
let deliveryPlace = 'Галактика Туманность Андромеды';

printTotalPrice(warrantyPeriod, engraving, needDelivery, deliveryPlace);
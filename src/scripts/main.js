/* eslint-disable max-len */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const volumeStorages = document.querySelectorAll('[name="volume"]');
  const typeStorages = document.querySelectorAll('.comparison__fields  input');
  let windowWidth = window.innerWidth;

  const windowWidthResizeCalc = function() {
    enumerateDataItems(dataBase, inputValues);
  };

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowWidthResizeCalc();
  });

  // Volumes of storage and transwer
  const inputValues = {
    storage: 0,
    transfer: 0,
  };

  // All storage and transfer variables per GB
  const dataBase = {
    backblaze: {
      minPayment: 7,
      storagePrice: 0.005,
      transferPrice: 0.01,
      color: '#e41e2a',
    },
    bunny: {
      maxPayment: 10,
      storagePrice: {
        hdd: 0.01,
        ssd: 0.02,
      },
      transferPrice: 0.01,
      color: '#faae13',
    },
    scaleway: {
      storagePrice: {
        multi: 0.06,
        single: 0.03,
        storageFree: 75,
      },
      transferPrice: {
        price: 0.02,
        transferFree: 75,
      },
      color: '#b75de8',
    },
    vultr: {
      minPayment: 5,
      storagePrice: 0.01,
      transferPrice: 0.01,
      color: '#2e6be6',
    },
  };

  // Get input values from bar and input window

  function countValuesFromInput(inputBarWindow) {
    if (inputBarWindow.id.includes('transfer')) {
      inputValues['transfer'] = +inputBarWindow.value;
    } else {
      inputValues['storage'] = +inputBarWindow.value;
    }
  }

  function getValuesFromInput() {
    volumeStorages.forEach((storageVolume) => {
      countValuesFromInput(storageVolume);

      storageVolume.addEventListener('input', () => {
        countValuesFromInput(storageVolume);
        enumerateDataItems(dataBase, inputValues);
      });
    });
  }

  // Get checked radio buttons

  function countCheckedRadioButtons() {
    const checkedRadioButtons = [];

    typeStorages.forEach((storage) =>
      storage.checked ? checkedRadioButtons.push(storage.value) : 0
    );

    return checkedRadioButtons;
  }

  function getValuesFromRadioButtons() {
    let checkedRadioButtons = [];

    typeStorages.forEach((storageButton) => {
      checkedRadioButtons = countCheckedRadioButtons();

      storageButton.addEventListener('click', () => {
        checkedRadioButtons = countCheckedRadioButtons();
        enumerateDataItems(dataBase, inputValues);
      });
    });

    return checkedRadioButtons;
  }

  // Find intersections with checked Radio Buttons and Data Base (need to calc total price)

  function intersection(storeStorage, checkedStorages) {
    const intersection = new Set(checkedStorages);

    return storeStorage.filter((item) => intersection.has(item));
  }

  // Calc total prices

  function calcPrices(inputValues, dataItemKey, dataItemValue) {
    const dataItem = dataItemValue;
    const checkedRadioButtons = countCheckedRadioButtons();
    const minPayment = dataItem.minPayment ? dataItem.minPayment : 0;
    const maxPayment = dataItem.maxPayment ? dataItem.maxPayment : 0;
    const inputTransfer = inputValues.transfer;
    const inputStorage = inputValues.storage;
    let totalPrice = 0;

    if (
      dataItem.transferPrice.constructor.name !== 'Object' &&
      dataItem.storagePrice.constructor.name !== 'Object'
    ) {
      let transferTotalPrice = Math.floor(
        dataItem.transferPrice * inputTransfer
      );
      let storageTotalPrice = Math.floor(dataItem.storagePrice * inputStorage);
      totalPrice = transferTotalPrice + storageTotalPrice;
    } else {
      const s = { ...dataItem.storagePrice };
      const t = { ...dataItem.transferPrice };
      const storageFree = s.storageFree || 0;
      const transferFree = t.transferFree || 0;
      const choosenStorage = intersection(Object.keys(s), checkedRadioButtons);

      const storagePrice = s[choosenStorage];
      const transferPrice = t['price'] || dataItem['transferPrice'];

      totalPrice =
        (inputStorage - storageFree) * storagePrice +
        (inputTransfer - transferFree) * transferPrice;
    }

    if (minPayment !== 0 && minPayment > totalPrice) {
      totalPrice = minPayment;
    } else if (maxPayment !== 0 && maxPayment < totalPrice) {
      totalPrice = maxPayment;
    } else {
      totalPrice = totalPrice < 0 ? 0 : totalPrice;
    }
    totalPrice = Math.trunc(totalPrice * 100) / 100;

    return totalPrice;
  }

  // Enumerate data base

  function enumerateDataItems(dataBase, inputValues) {
    let minimalPrice;
    let maximalPrice;
    const calculatedDataBase = {};

    for (let key in dataBase) {
      let price = calcPrices(inputValues, key, dataBase[key]);
      calculatedDataBase[key] = price;

      minimalPrice
        = minimalPrice === undefined || minimalPrice > price
          ? price
          : minimalPrice;

      maximalPrice
        = maximalPrice === undefined || maximalPrice < price
          ? price
          : maximalPrice;
    }
    calculatedDataBase['minimalPrice'] = minimalPrice;
    calculatedDataBase['maximalPrice'] = maximalPrice;
    drawDiagram(calculatedDataBase);
  }

  function drawDiagram(calculatedDataBase) {
    let widthHeightVariable = windowWidth < 768 ? 'width' : 'height';

    for (let key in calculatedDataBase) {
      if (key !== 'minimalPrice' && key !== 'maximalPrice') {
        const progressBar = document.querySelector(
          `.progress-bar--${key} .progress-bar__inner`
        );
        const progressBarPrice = document.querySelector(
          `.progress-bar--${key} span`
        );
        const progressBarWidth
          = (calculatedDataBase[key] / (calculatedDataBase['maximalPrice'] + 15)) * 100 + 1;

        if (calculatedDataBase[key] <= calculatedDataBase.minimalPrice) {
          progressBar.style.cssText = `${widthHeightVariable}: ${progressBarWidth}%; background-color: ${dataBase[key].color}`;
        } else {
          progressBar.style.cssText = `${widthHeightVariable}: ${progressBarWidth}%; background-color: ''`;
        }
        progressBarPrice.textContent = calculatedDataBase[key] + '$';
      }
    }
  }

  getValuesFromInput();
  getValuesFromRadioButtons();
  enumerateDataItems(dataBase, inputValues);
});

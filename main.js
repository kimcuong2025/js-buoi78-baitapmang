/** LẤY DANH SÁCH NHẬP */

const listInteger = [];

function handleIntegers() {
  const integer = Number(document.getElementById("integer").value);
  listInteger.push(integer);

  document.getElementById("showIntegers").innerHTML = listInteger;
}

/** BÀI TẬP 1 - TỔNG SỐ DƯƠNG */

function handlePositiveSum() {
  let positiveSum = 0;

  for (let i = 0; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (number > 0) {
      positiveSum += number;
    }
  }

  const resultHTML = `Tổng các số nguyên dương là: ${positiveSum}`;
  document.getElementById("showPositiveSum").innerHTML = resultHTML;
}

/** BÀI TẬP 2 - ĐẾM SỐ DƯƠNG */

function handlePositiveCount() {
  let positiveCount = 0;

  for (let i = 0; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (number > 0) {
      positiveCount += 1;
    }
  }

  const resultHTML = `Số lượng số dương: ${positiveCount}`;
  document.getElementById("showPositiveCount").innerHTML = resultHTML;
}

/** BÀI TẬP 3 - SỐ NHỎ NHẤT */

function handleMinInteger() {
  let minInteger = listInteger[0];

  for (let i = 1; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (minInteger > number) {
      minInteger = number;
    }
  }

  const resultHTML = `Số nhỏ nhất: ${minInteger}`;
  document.getElementById("showMinInteger").innerHTML = resultHTML;
}

/** BÀI TẬP 4 - SỐ DƯƠNG NHỎ NHẤT */

function handleMinPositive() {
  let listPositive = [];

  for (let i = 0; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (number > 0) {
      listPositive.push(number);
    }
  }

  let minPositive = listPositive[0];

  for (let j = 1; j < listPositive.length; j++) {
    const number = listPositive[j];

    if (minPositive > number) {
      minPositive = number;
    }
  }

  const resultHTML = `Số dương nhỏ nhất: ${minPositive}`;
  document.getElementById("showMinPositive").innerHTML = resultHTML;
}

/** BÀI TẬP 5 - SỐ CHẴN CUỐI CÙNG */

function handleLastEven() {
  let lastEven = 0;
  let location = 0;

  for (let i = 0; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (number % 2 === 0) {
      lastEven = number;
      location = i + 1;
    }
  }

  if (lastEven === 0) {
    lastEven = -1;
  }

  const resultHTML = `Số chẵn cuối cùng là ${lastEven}, ở vị trí thứ ${location}`;
  document.getElementById("showLastEven").innerHTML = resultHTML;
}

/** BÀI TẬP 6 - ĐỔI CHỖ 2 GIÁ TRỊ */

function handleSwitchPosition() {
  const position_1 = Number(document.getElementById("position_1").value - 1);
  const position_2 = Number(document.getElementById("position_2").value - 1);

  let switchTemp = listInteger[position_1];
  listInteger[position_1] = listInteger[position_2];
  listInteger[position_2] = switchTemp;

  const resultHTML = `Mảng sau khi đổi chỗ vị trí thứ ${position_1 + 1} và vị trí thứ ${position_2 + 1} là ${listInteger}`;
  document.getElementById("showSwitchPosition").innerHTML = resultHTML;
}

/** BÀI TẬP 7 - SẮP XẾP TĂNG DẦN */

function handleSortAscending() {
  for (let i = 0; i < listInteger.length - 1; i++) {
    for (let j = i + 1; j < listInteger.length; j++) {
      const number_i = listInteger[i];
      const number_j = listInteger[j];

      if (number_i > number_j) {
        let sortTemp = listInteger[i];
        listInteger[i] = listInteger[j];
        listInteger[j] = sortTemp;
      }
    }
  }

  const resultHTML = `Mảng sau khi sắp xếp tăng dần: ${listInteger}`;
  document.getElementById("showSortAscending").innerHTML = resultHTML;
}

/** BÀI TẬP 8 - SỐ NGUYÊN TỐ ĐẦU TIÊN */

function handleFirstPrime() {
  let firstPrime = -1;

  for (let i = 0; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (number <= 1) continue;

    let isPrime = true;

    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      firstPrime = number;
      break;
    }
  }

  const resultHTML = `Số nguyên tố đầu tiên: ${firstPrime}`;
  document.getElementById("showFirstPrime").innerHTML = resultHTML;
}

/** BÀI TẬP 9 - SỐ NGUYÊN TỐ (MẢNG MỚI) */

const listRealNumber = [];

function handleRealNumbers() {
  const realNumber = Number(document.getElementById("realNumber").value);
  listRealNumber.push(realNumber);

  document.getElementById("showRealNumers").innerHTML = listRealNumber;
}

function handleIntegerCount() {
  let integerCount = 0;

  for (let i = 0; i < listRealNumber.length; i++) {
    const number = listRealNumber[i];

    if (Number.isInteger(number)) {
      integerCount += 1;
    }
  }

  const resultHTML = `Số lượng số nguyên: ${integerCount}`;
  document.getElementById("showIntegerCount").innerHTML = resultHTML;
}

/** BÀI TẬP 10 - SO SÁNH SỐ LƯỢNG SỐ ÂM / DƯƠNG */

function handleCompareNegativePositive() {
  let negativeCount = 0;
  let positiveCount = 0;

  for (let i = 0; i < listInteger.length; i++) {
    const number = listInteger[i];

    if (number === 0) continue;

    if (number > 0) {
      positiveCount += 1;
    } else {
      negativeCount += 1;
    }
  }

  let resultHTML = "";

  if (positiveCount > negativeCount) {
    resultHTML = `Số dương > Số âm`;
  } else if (positiveCount < negativeCount) {
    resultHTML = `Số dương < Số âm`;
  } else {
    resultHTML = `Số dương = Số âm`;
  }

  document.getElementById("showCompareNegativePositive").innerHTML = resultHTML;
}

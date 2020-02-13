// Weighted Lottery Function
// convert weights obj into array with keys listed out val times
// generate random number to pick from the list

const weights = {
  win: 1,
  lose: 10
//   halfsies: 2
}

const weightedLottery = (weights) => {
  let weightsArr = [];

  for (let key in weights) {
    const tempArr = Array(weights[key]).fill(key);
    tempArr.forEach(element => weightsArr.push(element));
  }

  const randNum = Math.round(Math.random() * (weightsArr.length - 1))
  printToDOM(weightsArr[randNum]);
}

const printToDOM = (result) => {
    document.getElementById('win-lose').innerHTML = `You ${result}`;

    switch (result) {
        case 'win':
            document.getElementById('win-lose').style.color = "#43cc43";
            break;
        case 'lose':
            document.getElementById('win-lose').style.color = "red";
            break;
        case 'halfsies':
            document.getElementById('win-lose').style.color = "#eda737";
            break;
        default:
            document.getElementById('win-lose').style.color = "purple";
            break;
    }
}


const button = document.querySelector('#btn');

button.addEventListener('click', (e) => {
    weightedLottery(weights);
});

const winInputBtn = document.querySelector('.win-btn');
winInputBtn.addEventListener('click', (e) => {
    const input = document.getElementById('win-input').value;

    weights['win'] = parseInt(input);
    console.log(weights)
});

const loseInputBtn = document.querySelector('.lose-btn');
loseInputBtn.addEventListener('click', (e) => {
    const input = document.getElementById('lose-input').value;

    weights['lose'] = parseInt(input);
    console.log(weights)
});




var loadInfo = require("./loadInfo");
var data = loadInfo.readFile();
var index = require("./index");

module.exports = {
  getTheMoney: () => {
    var din500 = 0;
    var din200 = 0;
    var din100 = 0;
    var din50 = 0;
    var din20 = 0;
    var din5 = 0;
    var din1 = 0;
    var monedas = 0;

    for (let i = 0; i < data.length; i++) {
      while (data[i] >= 500) {
        data[i] -= 500;
        din500 += 1;
      }

      while (data[i] >= 200) {
        data[i] -= 200;
        din200 += 1;
      }

      while (data[i] >= 100) {
        data[i] -= 100;
        din100 += 1;
      }
      while (data[i] >= 50) {
        data[i] -= 50;
        din50 += 1;
      }
      while (data[i] >= 50) {
        data[i] -= 50;
        din50 += 1;
      }

      while (data[i] >= 50) {
        data[i] -= 50;
        din50 += 1;
      }

      while (data[i] >= 20) {
        data[i] -= 20;
        din20 += 1;
      }

      while (data[i] < 20 && data[i] >= 5) {
        data[i] -= 5;
        din5 += 1;
      }

      if (data[i] < 5 && data[i] > 0) {
        din1 += data[i];
      }

      monedas = din5*5 + din1
    }

    console.log(
      `500 = ` +
        din500 +
        `\n` +
        `200 = ` +
        din200 +
        `\n` +
        `100 = ` +
        din100 +
        `\n` +
        `50 = ` +
        din50 +
        `\n` +
        `20 = ` +
        din20 +
        `\n` +
        `5 = ` +
        din5 +
        `\n` +
        `o ` +
        din5 / 2 +
        ` de 10` +
        `\n` +
        `1 = ` +
        din1 +
        `\n` +
        `Monedas = ` +
        monedas
    );
  },
};

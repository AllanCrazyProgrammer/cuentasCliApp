#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const calculo = require("./calculo");


clear();

console.log(
  chalk.red(
    figlet.textSync("Rey Pez", {
      horizontalLayout: "fitted",
      font: "Bloody",
    })
  )
);

calculo.getTheMoney()

const fs = require("fs");


module.exports = {
  readFile: () => {
    try {
      var data = fs.readFileSync("datos.txt", "utf8");
      data = data.split(`\r\n`).filter((x) => x);
      return data
      
    } catch (e) {
      console.log("Error:", e.stack);
    }

  },
};


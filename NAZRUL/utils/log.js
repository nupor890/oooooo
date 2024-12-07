const chalk = require('chalk');
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
module.exports = (data, option) => {
  switch (option) {
    case "warn":
        console.log(chalk.bold.hex("#ff0000").bold('» Log « ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff0000").bold('» Log « ') + data);
      break;
    default:
        console.log(chalk.bold.hex(randomColor()).bold(`${option} » `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex(randomColor()).bold(" [ NAZRUL ISLAM ] ") + chalk.bold.hex("#8B8878").bold(data)+chalk.bold.hex("FF00DD")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ NAZRUL ISLAM LIST (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ))
      break;
    case "error":
    console.log(chalk.bold.hex(randomColor()).bold(" [ NAZRUL ISLAM ] ") + data+chalk.bold.hex("5EFF00")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ NAZRUL ISLAM LISY (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ));
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold(" [ NAZRUL 9X ] ") + chalk.bold.hex(randomColor()).bold(data) +chalk.bold.hex("FFF0000")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ NAZRUL ISLAM LIST (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ));
      break;
  }
}

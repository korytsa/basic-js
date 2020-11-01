const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let res = '';
  let additionStr = '';

    if (String(addition) !== '') {
      additionStr = repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator});
    }

    if (repeatTimes > 0) {
      res = str + additionStr;
      repeatTimes--;
    }

    while (repeatTimes > 0) {
      res += (separator + str + additionStr);
      repeatTimes--;
    }
  return res;
}  
  
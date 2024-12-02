import { required, email, max, min, min_value, max_value, between, numeric } from "@vee-validate/rules";

import { defineRule, configure } from "vee-validate";

defineRule('decimal', (value, args, { decimals = 2, separator = '.' } = {}) => {
  if (value == null || value == undefined || value == ''){
    return true;
  }

  if (args != null && args.length == 1){
    decimals = args[0]
  }

  if (!value) {
    return true;
  }
  const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d{0,${decimals}})?$`);

  if (!regex.test(value)) {
    return false;
  }

  return true;
});


defineRule('between', (value, [min, max]) => {
  if (value == null || value == undefined || value == ''){
    return true;
  }

  if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
    return true;
  }
  return false;
});

configure({
  generateMessage: (context ) => {
    switch (context.rule.name) {
      case 'between':
        return `Veld mag alleen waarden bevatten tussen ${context.rule.params[0] ?? 0} en ${context.rule.params[1] ?? 0}`;
      case 'decimal':
        return `Veld mag maximaal ${context.rule.params[0] ?? 0} decimalen hebben`;
      default:
        return `Het veld is ongeldig.`;
    }
  }
});

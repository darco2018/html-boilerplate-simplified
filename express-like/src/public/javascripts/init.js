/* eslint-disable import/prefer-default-export */

// single methods imported
import { inputsAreValid } from "./utils/inputs-are-valid";
import { parseInputs } from "./utils/parse-inputs";
// two methods imported:
import { test1, test2 } from "./vendor/vendor";

export const run = (alertService, componentService) => {
  test1(); // can be called without obj cause I imported exact name: test1
  test2();
  // -------------------------------------

  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

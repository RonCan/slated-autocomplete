import TextBoxController from "./TextBoxController";
export default {
  name: "slatedTextBox",
  config: {
    bindings: { selected: "<" },
    templateUrl: "src/autocomplete/components/main/TextBox.html",
    controller: ["$log", "movieAPIService", TextBoxController]
  }
};

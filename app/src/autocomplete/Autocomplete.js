// Load the custom app ES6 modules

import movieAPIService from "src/autocomplete/services/MovieService";
import TextBox from "src/autocomplete/components/main/TextBox";

// Define the AngularJS 'users' module

export default angular
  .module("users", ["ngMaterial"])
  .component(TextBox.name, TextBox.config)
  .service("movieAPIService", movieAPIService);

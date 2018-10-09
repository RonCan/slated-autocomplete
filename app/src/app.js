// Load libraries
import angular from "angular";

import "angular-animate";
import "angular-aria";
import "angular-material";

import Autocomplete from "src/autocomplete/Autocomplete";

export default angular
  .module("starter-app", ["ngMaterial", Autocomplete.name])
  .config($mdThemingProvider => {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("brown")
      .accentPalette("red");
  });

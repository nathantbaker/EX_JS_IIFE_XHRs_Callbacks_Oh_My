console.log("iife js loaded", Predator);
// In the `iife-xhr.js` file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.

var Predator = (function (Predator) {
  "use strict";

  Predator.showCarnivores = function(carnivores) {

  };

  Predator.showHerbivores = function(herbivores) {

  };

  // Predator.loadCarnivores(Predator.showCarnivores);

  return Predator;

})(Predator || {});





var Predator = (function (Predator) {
  "use strict";

  // JSON data pushed here
   var carnivores = [];
   var herbivores = [];

  Predator.loadCarnivores = function (callBackFunc) {
    var loader = new XMLHttpRequest();
    loader.addEventListener("load", function () {
      carnivores = JSON.parse(this.responseText);
      callBackFunc(carnivores); // only after pull JSON data, push it to HTML
    });

    loader.open("GET", "JSON/carnivores.json");
    loader.send();
  };

  Predator.loadHerbivores = function (callBackFunc) {
    var loader = new XMLHttpRequest();
    loader.addEventListener("load", function () {
      herbivores = JSON.parse(this.responseText);
      callBackFunc(herbivores); // only after pull JSON data, push it to HTML
    });

    loader.open("GET", "JSON/herbivores.json");
    loader.send();
  };

  return Predator;

})(Predator || {});

Predator.loadCarnivores(Predator.showCarnivores);
Predator.loadHerbivores(Predator.showHerbivores);
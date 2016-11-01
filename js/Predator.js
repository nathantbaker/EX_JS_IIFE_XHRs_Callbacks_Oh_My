console.log("Predator:", Predator);

var Predator = (function (Predator) {
  "use strict";

   var carnivores = [];
   var herbivores = [];

  // Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.

  Predator.loadCarnivores = function (callbackToInvoke) {
    var loader = new XMLHttpRequest();
    loader.addEventListener("load", function () {
      carnivores = JSON.parse(this.responseText);
      console.log("carnivores:", carnivores);
    });

    loader.open("GET", "../JSON/carnivores.json");
    loader.send();
    // callbackToInvoke(carnivores);
  };

  Predator.loadHerbivores = function (callbackToInvoke) {
    var loader = new XMLHttpRequest();
    loader.addEventListener("load", function () {
      herbivores = JSON.parse(this.responseText);
      console.log("herbivores:", herbivores);
    });

    loader.open("GET", "../JSON/herbivores.json");
    loader.send();
    // callbackToInvoke(herbivores);
  };


  return Predator;

})(Predator || {});

Predator.loadCarnivores();
Predator.loadHerbivores();

// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.


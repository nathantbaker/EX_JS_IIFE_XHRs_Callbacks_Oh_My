var Predator = (function (Predator) {
  "use strict";

  var targetEl = document.getElementById("animals");

  Predator.showCarnivores = function(arrayC) { //push Carnivores to HTML
    let string = "";
    for (var i = 0; i < arrayC.length; i++) {
      string += `<li>${arrayC[i]}</li>`;
    }
    targetEl.innerHTML += `<div class="col-sm-6"><h2>Carnivores</h2><ol>${string}</ol></div>`;
  };

  Predator.showHerbivores = function(arrayH) { //push Herbivores to HTML
    let string = "";
    for (var i = 0; i < arrayH.length; i++) {
      string += `<li>${arrayH[i]}</li>`;
    }
    targetEl.innerHTML += `<div class="col-sm-6"><h2>Herbivores</h2><ol>${string}</ol></div>`;
  };

  return Predator;

})(Predator || {});
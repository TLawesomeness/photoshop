'use strict';
$(document).ready(init);

function init() {
  $('#add-color').click(addColor);
  $('#add-random-colors').click(addRandom);
}

function createDiv (color) {
  var $box = $('<div>');
  $box.css('background-color', color);
  $box.addClass('box');
  $('#colors').append($box);

}

function addColor() {
  var color = $('#color').val();
  createDiv(color);
}

function addRandom() {
  var quantity = $('#quantity').val() * 1;
  for (var colors = 0; colors < quantity; colors++) {
    createDiv(rgb);
  }
}

function rgb () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + "," + g + "," + b + ")";
}

//version 2

// function addRandom() {
//   var qty = $('#quantity').val() * 1;
//   for(var i = 0; i < qty; i++) {
//     box(rgba());
//   }
// }

//function rgba() {
//  return 'rgba('+rnd()+','+rnd()+','+rnd()+')';
//}

// function rnd() {
//   return Math.floor(Math.random() * 256);
// }

// function box (color) {
//   var $box = $('<div>');
//   $box.css('background-color', color);
//   $box.addClass('box');
//   $('#colors').append($box);
//
// }

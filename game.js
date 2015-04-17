(function gameOfLife(){
  'use strict';

  var main = {

    elementID: 'game',
    context: false,
    width: '',
    height: '',
    organisms = [];

    createOrganisms: function() {
      var sizeCells = main.width/100,
          countColumns = main.width / sizeColumns,
          organisms = [];

      main.organisms[] = window.game.createCell(true, sizeCells, sizeCells, '#000');

    },

    createWorld: function() {
      var canvas = document.getElementById(main.elementID),
          context = canvas.getContext('2d');

      main.width = document.getElementById(main.elementID).offsetWidth;
      main.height = document.getElementById(main.elementID).offsetHeight;
    },

    init: function() {
      console.log('init');
      if (!window.game) {
        window.game = {};
      }
      main.createWorld();
      main.createOrganisms();
    },
  };

  main.init();

})();
(function world(){
  var world = {
    width: document.getElementById('game').offsetWidth,
    height: document.getElementById('game').offsetHeight,
    organismSize: false,
    numberColumns: false, 

    createWorld: function() {
      var canvas = document.getElementById('game');
      var context = canvas.getContext('2d');
      world.organismSize = world.width /100;
      world.numberColumns = world.organismSize / world.width;
      console.log('Organism Size: ' + world.organismSize);
      console.log('Number Columns: ' + world.numberColumns); 
    },

  };

  if (!window.game) {
    window.game = {};
  }
  window.game.world = world;
})();

/*
var world = function() {
  var world = {

  };
  return world;

}
*/
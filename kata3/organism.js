(function organisms(){
  "use strict";

  var cell = {

    /**
     * @param bool alive
     *   indicate whether cell is alive or not
     *
     */
    createCell: function(alive, width, height, color) {
      return {
        alive: alive,
        width: width,
        height: height,
        color: color,
      }
    },

    livesOrDies: function(thisCell, neighborCount) {
      // Dead Cell
      if (!thisCell) {
        if (neighborCount == 3) {
          thisCell = 1;
        }
      }
      // Alive Cell
      else {
        if (neighborCount < 2) {
          thisCell = 0;
        }
        else if (neighborCount == 2 || neighborCount == 3) {
          thisCell = 1;
        }
        else if (neighborCount > 3) {
          thisCell = 0;
        }
      }
      return thisCell;
    },

    randomDeadOrAlive: function() {
      var number = Math.round(Math.random() * 10);
      if (number == 10) {
        return 1;
      }
      else {
        return 0;
      }
    }
  };

  if (window.gameOfLife == undefined) {
    window.gameOfLife = {};
  }
  window.gameOfLife.organism = cell;
})();
/**
 * @file Conway's Game of Life
 */

(function main(){

  var state = {
    organisms: [],
    x: 85,
    y: 85,

    addAdjacents: function(neighbors) {
      var result = 0,
          keys = Object.keys(neighbors);

      keys.forEach(function(key){
        if (neighbors[key] == undefined) {
          neighbors[key] = gameOfLife.organism.randomDeadOrAlive();
        }
        result = result + neighbors[key];
      });
      return result;
    },

    calculateOrganisms: function() {
      //state.organisms = state.createInitialOrganisms(100, 100);
      //state.displayOrganisms(state.organisms);
      var ycount = 0;
      var xcount = 0;
      state.organisms.forEach(function(y){
        xcount=0;
        y.forEach(function(x){
          var t = ycount -1,
              r = xcount + 1,
              b = ycount + 1,
              l = xcount - 1,
              neighborCount = '',
              adjacents = {
                tl: state.checkExists(state.organisms[t])[l],
                tc: state.checkExists(state.organisms[t])[xcount],
                tr: state.checkExists(state.organisms[t])[r],
                rr: state.checkExists(state.organisms[ycount])[r],
                br: state.checkExists(state.organisms[b])[r],
                bc: state.checkExists(state.organisms[b])[xcount],
                bl: state.checkExists(state.organisms[b])[l],
                cl: state.checkExists(state.organisms[ycount])[l]
              };
              neighborCount = state.addAdjacents(adjacents);
              state.organisms[ycount][xcount] = gameOfLife.organism.livesOrDies(state.organisms[ycount][xcount], neighborCount);
          xcount++;
        });
        ycount++;
      });
      setTimeout(function(){
        state.displayOrganisms(state.organisms);
      }, 200);
    },

    checkExists: function(value) {
      var i = 0;
      if (value == undefined) {
        value = [];
        while (i < state.x) {
          value[i] = gameOfLife.organism.randomDeadOrAlive();
          i++;
        }
      }
      return value;
    },

    createInitialOrganisms: function(x, y) {
      var organisms = [],
          i = 0,
          inc = 0;
      while (i < x) {
        organisms[i] = []
        inc = 0;
        while (inc < y) {
          organisms[i][inc] = gameOfLife.organism.randomDeadOrAlive();
          inc++;
        }
        i++;
      }
      state.organisms = organisms;
      state.displayOrganisms(state.organisms); //new
    },

    displayOrganisms: function(organisms) {
      var out = '',
          board = document.getElementById('board');
      //window.requestAnimationFrame(state.loop);
      board.innerHTML = '';
      organisms.forEach(function(orgRow){
        orgRow.forEach(function(creature){
          var board = document.getElementById('board')
              char = '';
          if (creature == 1) {
            char = '&#9773;';
          }
          else {
            char = '&nbsp;';
          }
          out = out + char;
        })
        out = out + '<br>';
      }); 
      board.innerHTML = out;
      window.requestAnimationFrame(state.loop);
    },

    init: function() {
      state.createInitialOrganisms(state.x, state.y);
      //state.displayOrganisms(state.organisms);
    },

    loop: function() {
      var board = document.getElementById('board');
      state.calculateOrganisms();
    }
  };

  state.init();
})();
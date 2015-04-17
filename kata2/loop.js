(function main(){
  var loop = {
    organisms: [],

    init: function() {
      if (!window.game) {
        window.game = {};
      }
      window.game.world.createWorld();
      //window.game.world.createInitialOrganisms();
      loop.loop();
    },

    loop: function() {
      console.log('loop');
      window.requestAnimationFrame(loop.loop);
    }
  }
  loop.init();
})();
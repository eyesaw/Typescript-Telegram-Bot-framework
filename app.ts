// require class
import Bot_Of_Doom from './src/Bot_Of_Doom';

// setup the config
var config = {

  [0]:{
    token:'tagesgericht',
    callback: function() {
      let int = 5;
      return int;
    },
    message: 'kek'
  },

  [1]:{
    token:'kek',
    callback: function() {
      let int = 99;
      return int;
    },
    message: 'nix'
  }

};

// init instance with token
const bot_of_doom = new Bot_Of_Doom( 'YOUR::KEY', config );

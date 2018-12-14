// require class
import Bot_Of_Doom from './src/Bot_Of_Doom';

// setup the config
var config = [
  {
    token: 'example',
    type: 'sendMessage',
    callback: function( user ) {
      return { chat_id: user.chat.id, text: 'Hello world' };
    }
  }
];

// init instance with token
new Bot_Of_Doom( 'YOUR::KEY', config );

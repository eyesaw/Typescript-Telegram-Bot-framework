import Bot_Core from './src/Bot_Core';

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

// init instance with your Telegram API key
new Bot_Core( 'YOUR::KEY', config );

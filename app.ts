import Bot_Core from './src/Bot_Core';

// setup the config
var config = [
  {
    token: 'example',
    callback: function( user, bot) {
      bot.sendMessage( user.chat.id, 'Hello world' );
    }
  }
];

// init instance with your Telegram API key
new Bot_Core( 'MY::KEY', config );

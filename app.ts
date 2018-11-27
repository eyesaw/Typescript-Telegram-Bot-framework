import * as telegramBot from 'node-telegram-bot-api';

class weidner_bot
{
  readonly token:string = '';
  readonly bot:any = new telegramBot( this.token, {polling: true});

  constructor()
  {
    this.bot.onText(/\/bot (.+)/,function (msg, match) {
      this.parse(msg,match);
    });
  }

  private parse( message, match )
  {

    console.log(message);
    console.log(match);

      switch(match)
      {
        case 'Tagesgericht':
          // PDF API gernieren
          // API anfragen
          // Informationen senden

          this.send_message(message);
          break;
      };
  }

  private send_message(message)
  {
    this.bot.sendMessage( message.chat.id, 'kek' );
  }
}

var kek = new weidner_bot();

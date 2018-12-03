import * as TelegramBot from 'node-telegram-bot-api';

class Bot_Of_Doom
{
  readonly token:string = '';
  readonly bot:any = new TelegramBot( this.token, {polling: true});

  constructor()
  {
    var _ = this;

    this.bot.onText(/\/(.+)/,function (user, match) {
      _.parse(user,match);
    });
  }

    /**
     * @param user
     * @param match (0 - full input / 1 - matching phrase )
     */

  public parse( user, match )
  {
    // ‌‌( match[1].localeCompare('‌tagesgericht') ) === 0
    switch( match[1] )
    {
      case "‌tagesgericht":
        this.send_message(user, '[*] loading');

        // PDF API generieren
        // API anfragen
        // Informationen senden

        this.send_message(user, '[+] done');
        break;

      default:
          this.send_message(user, 'invalid argument');
    }
  }

  private send_message(user:any, message:string)
  {
    this.bot.sendMessage( user.chat.id, message );
  }
}

var init = new Bot_Of_Doom();

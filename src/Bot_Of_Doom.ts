// import telegram bot
import * as TelegramBot from 'node-telegram-bot-api';

export default class Bot_Of_Doom
{
  private bot:any;

  constructor( private key:string, private config:object )
  {
    if (!this.key || !this.config){
      console.log('[-] missing parameter: key[string] , config:[object] ');
      console.log('[!] Abort script!');
      return;
    }

    this.bot = new TelegramBot( this.key, {polling: true});

    let _ = this;
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
    let _ = this;

    // loop trough the config
    for ( let key in this.config )
    {

      // try to compare the input with the config token
      if( match[1].localeCompare( _.config[key].token ) === 0 )
      {
        // call the config function
        // Todo: process and send callback
        this.config[key].callback();

        // send the message
        this.parse( user, this.config[key].message );
      }
    }

    // default messege when the arguments are invalid or could not be found
    this.send_message(user, '[-] argument not found: ' + match[1] );
  }

  /**
  * Send the message
  */

  private send_message(user:any, message:string)
  {
    this.bot.sendMessage( user.chat.id, message );
  }
}

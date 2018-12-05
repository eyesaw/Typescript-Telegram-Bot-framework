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

    for ( var i = 0; i < Object.keys( this.config ).length; i++ )
    {

      if( match[1].localeCompare( _.config[i].token ) === 0 )
      {

        // Todo: process and send callback
        if( typeof this.config[i].callback( ) !== undefined ){
            _.send_message( user, this.config[i].callback( user ) );
        }

        // send the message
        if( _.config[i].message ) {
            _.send_message( user, _.config[i].message );
        }

        return;
      }
    };

    // default messege when the arguments are invalid or could not be found
    this.send_message(user, '[-] argument not found: ' + match[1] );
  }

  /**
  * Send the message
  * // TODO: process data types
  * https://core.telegram.org/bots/api#sendphoto
  */

  private send_message(user:any, message:string)
  {
    this.bot.sendMessage( user.chat.id, message );
  }
}

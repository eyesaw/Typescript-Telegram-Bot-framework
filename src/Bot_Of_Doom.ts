// import telegram bot
import * as TelegramBot from 'node-telegram-bot-api';

interface Config {
    [ index: number ]: {
      token: string;
      type: string;
      callback: any;
     };
}

interface Callback {
    chat_id: any;
    text?: any;
    parse_mode?: any;
    disable_web_page_preview?: any;
    disable_notification?: any;
    reply_to_message_id?: any;
    reply_markup?: any;
    audio?: any;
    caption?: any;
    duration?: any;
    performer?: any;
    title?: any;
    thumb?: any;
    document?: any;
    video?: any;
    width?: any;
    height?: any;
    supports_streaming?: any;
    animation?: any;
    voice?: any;
    video_note?: any;
    length?: any;
    media?: any;
    latitude?: any;
    longitude?: any;
    live_period?: any;
}

export default class Bot_Of_Doom
{

  private bot: any;

  constructor( private key: string, private config: Config )
  {
    if (!this.key || !this.config){
      throw new Error('[-] missing parameter: key[string] , config:[object]');
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
    let _:any = this;

    for ( var i = 0; i < Object.keys( this.config ).length; i++ )
    {
      if( match[1].localeCompare( _.config[i].token ) === 0 )
      {
        _.send_message( this.config[i].callback( user ), this.config[i].type );
        return;
      }
    }
  }

  /**
  * Send the message
  * https://core.telegram.org/bots/api#sendphoto
  */

  private send_message( callback: Callback, type:string )
  {
    switch(type)
    {
      case 'sendMessage':
        this.bot.sendMessage(
          callback.chat_id,
          callback.text,
          callback.parse_mode,
          callback.disable_web_page_preview,
          callback.disable_notification,
          callback.reply_to_message_id,
          callback.reply_markup
        );
        break;
      case 'sendAudio':
        this.bot.sendAudio(
          callback.chat_id,
          callback.audio,
          callback.caption,
          callback.parse_mode,
          callback.duration,
          callback.performer,
          callback.title,
          callback.thumb
        );
        break;
      case 'sendDocument':
        this.bot.sendDocument(
          callback.chat_id,
          callback.document,
          callback.thumb,
          callback.caption,
          callback.parse_mode,
          callback.disable_notification,
          callback.reply_to_message_id,
          callback.reply_markup
        );
        break;
      case 'sendVideo':
        this.bot.sendVideo(
          callback.chat_id,
          callback.video,
          callback.duration,
          callback.width,
          callback.height,
          callback.thumb,
          callback.caption,
          callback.parse_mode,
          callback.supports_streaming,
          callback.disable_notification,
          callback.reply_to_message_id,
          callback.reply_markup
        );
        break;

      case 'sendAnimation':
        this.bot.sendAnimation(
          callback.chat_id,
          callback.animation,
          callback.duration,
          callback.width,
          callback.height,
          callback.thumb
        );
        break;

      case 'sendVoice':
        this.bot.sendVoice(
          callback.chat_id,
          callback.voice,
          callback.caption,
          callback.parse_mode,
          callback.duration,
          callback.disable_notification,
          callback.reply_to_message_id,
          callback.reply_markup
        );
        break;

      case 'sendVideoNote':
        this.bot.sendVideoNote(
          callback.chat_id,
          callback.video_note,
          callback.duration,
          callback.length,
          callback.thumb,
          callback.disable_notification,
          callback.reply_to_message_id,
          callback.reply_markup
        );
        break;

      case 'sendMediaGroup':
        this.bot.sendMediaGroup(
          callback.chat_id,
          callback.media,
          callback.disable_notification,
          callback.reply_to_message_id
        );
        break;

      case 'sendLocation':
        this.bot.sendLocation(
          callback.chat_id,
          callback.latitude,
          callback.longitude,
          callback.live_period,
          callback.disable_notification,
          callback.reply_to_message_id,
          callback.reply_markup
        );
        break;
    }
  }
}

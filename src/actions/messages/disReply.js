/*
  _____ _ _            _    _____              _   _     
 / ____| (_)          | |  / ____|            | | (_)    
| |    | |_  ___ _ __ | |_| |     ___  _ __ __| |  _ ___ 
| |    | | |/ _ \ '_ \| __| |    / _ \| '__/ _` | | / __|
| |____| | |  __/ | | | |_| |___| (_) | | | (_| |_| \__ \
 \_____|_|_|\___|_| |_|\__|\_____\___/|_|  \__,_(_) |___/
                                                 _/ |    
                                                |__/       
*/
var axios = require('axios');
const fs = require('fs');
async function run(message, text, client, options) {
    if (text != "[object Object]") {
        axios({
        method: 'post',
        url: `${options.api}/channels/${message.channel_id}/messages`,
        headers: {
            'Authorization': `Bot ${client.token}`,
        },
        data: {
            tts: false,
            content: text,
            message_reference: {
                message_id: message.id,
                guild_id: message.guild_id

            }
        }
    }).then(function (response) {
      let finalPacket = response.data;
      finalPacket.reply = function(text) {
        client.send(finalPacket.channel_id, text);
      }
      finalPacket.disReply = function(text) {
       client.disReply(finalPacket, text);
      }
      finalPacket.delete = function() {
        client.deleteMessage(finalPacket.id, finalPacket.channel_id)
      }
      finalPacket.react = function(emoji) {
       client.react(finalPacket.channel_id, finalPacket.id, emoji)
     }
     client.lastSentMessage[finalPacket.channel_id] = finalPacket;
  });
    } else {
        axios({
        method: 'post',
        url: `${options.api}/channels/${message.channel_id}/messages`,
        headers: {
            'Authorization': `Bot ${client.token}`,
        },
        data: {
            tts: false,
            content: "",
            embed: text,
            message_reference: {
                message_id: message.id,
                guild_id: message.guild_id

            }
        }
    }).then(function (response) {
      let finalPacket = response.data;
      finalPacket.reply = function(text) {
        client.send(finalPacket.channel_id, text);
      }
      finalPacket.disReply = function(text) {
       client.disReply(finalPacket, text);
      }
      finalPacket.delete = function() {
        client.deleteMessage(finalPacket.id, finalPacket.channel_id)
      }
      finalPacket.react = function(emoji) {
       client.react(finalPacket.channel_id, finalPacket.id, emoji)
     }
     client.lastSentMessage[finalPacket.channel_id] = finalPacket;
  });
    }
}
module.exports.run = run;
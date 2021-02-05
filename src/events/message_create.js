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
async function run(client, packet) {
    var finalPacket = packet;
    finalPacket.reply = async function(text) {
      client.send(finalPacket.channel_id, text);
    }
    finalPacket.disReply = function(text) {
      client.disReply(packet, text);
    }
    finalPacket.delete = function() {
      client.deleteMessage(packet.id, packet.channel_id)
    }
    finalPacket.react = function(emoji) {
      client.react(packet.channel_id, packet.id, emoji)
    }
    let command = client.internalCommandHandler.find(cmd => cmd.name === packet.content.split(" ")[0]);
    if (command) {
      let args = packet.content.split(" ").splice(1);
      if (command.run) {
        command.run(finalPacket, args);
      } else {
        client.send(finalPacket.channel_id, command.reply);
      }
    }
    client.emit(`message`, finalPacket);
    client.emit(`messageCreate`, packet);
}
module.exports.run = run;
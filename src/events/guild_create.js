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
  client.emit(`guildCreate`, packet);
  client.guilds.push(packet);
  let getAvatar = require(__dirname + "/../extra/getAvatar.js");
  packet.members.forEach((member, i) => {
    if (!client.members.includes(member.user)) {
      let userToPush = member.user;
      userToPush.AvatarURL = getAvatar.getAvatar(userToPush.id, userToPush.avatar);
      client.members.push(userToPush)
    }
  })
}
module.exports.run = run;
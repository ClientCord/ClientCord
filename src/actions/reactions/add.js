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
async function run(channelid, messageid, emoji, client, options) {
    let promise = new Promise(function(resolve, rejext) {
      axios({
        method: 'put',
        url: `${options.api}/channels/${channelid}/messages/${messageid}/reactions/${encodeURI(emoji)}/@me`,
        headers: {
            'Authorization': `Bot ${client.token}`,
        }
      });
    })
}
module.exports.run = run;
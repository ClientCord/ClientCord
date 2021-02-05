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
async function run(cmd, guildID, client, options) {
       axios({
        method: 'post',
        url: `${options.api}/applications/${client.user.id}/guilds/${guildID}/commands`,
        headers: {
            'Authorization': `Bot ${client.token}`,
        },
        data: cmd
    })
}
module.exports.run = run;
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
async function run(msgid, chid, client, options) {
        axios({
        method: 'delete',
        url: `${options.api}/channels/${chid}/messages/${msgid}`,
        headers: {
            'Authorization': `Bot ${client.token}`,
        },
        data: {}
    });
}
module.exports.run = run;
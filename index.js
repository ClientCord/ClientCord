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


//=======================================
//Exports for clientcord.js
let embed = require(__dirname + "/src/extra/embed.js").embed; //Get embed helper class.
let client = require(__dirname + "/src/client/client.js").client; //Get client class.
let slash = require(__dirname + "/src/extra/slashBuilder.js").slashCommand; //Get client class.
module.exports.client = client; //Export client
module.exports.embed = embed; //Export embed helper.
module.exports.slashCommand = slash; //Export interaction helper.
//=======================================
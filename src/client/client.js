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
let options = {
  gateway: `wss://gateway.discord.gg/?v=6&encoding=json`,
  api: `https://discord.com/api/v6`,
  log: true
}
let opcode = {

}
let properties = { 
    $os: 'linux', 
    $browser: 'clientcordjs',
    $device: 'clientcordjs'
}
let heartbeat = {
  op: 1,
  d: null
}











function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
let { EventEmitter } = require('events');
let socket = require('ws');
let wait = ms => new Promise((r, j) => setTimeout(r, ms));
let axios = require('axios');
let fs = require('fs');
class client extends EventEmitter {
  constructor(token) {
    super();
    this.guilds = [];
    this.members = [];
    this.token = token;
    this.internalCommandHandler = [];
    this.lastSentMessage = {};
    this.events = new EventEmitter();
    let indetification = {
      op: 2,
      d: { token, properties }
    }
    this.conn = new socket(options.gateway);
    this.conn.onopen = () => {
      this.startTime = Date.now();
      this.conn.send(JSON.stringify(indetification))
    }
    this.conn.onmessage = async (e) => {
      //===================================
      //Declare packet and events.
      let packet = JSON.parse(e.data);
      let event = packet.t;
      //===================================
      //Requested heartbeat.
      if (packet.op === 1) {
        if (options.log === true) console.log("(IN)[OP 1] Requested heartbeat sent.");
      }
      //===================================
      //Session error.
      if (packet.op === 9) {
        console.log("(IN)[OP 9] CLIENTCORDJS: Session error.");
      }
      //===================================
      //Hello heartbeat (Auth)
      if (packet.op === 10) {
        if (options.log === true) console.log("(IN)[OP 10] Hello! Heartbeat: " + packet.d.heartbeat_interval);
        setInterval(() => {
          this.conn.send(JSON.stringify(heartbeat));
          if (options.log === true) console.log("(OUT)[OP " + heartbeat.op + "] Heartbeat!");
        }, packet.d.heartbeat_interval)
      }
      //===================================
      //Check if event is set + event handler.
      if (event) {
        if (fs.existsSync(__dirname + "/../events/" + event.toLowerCase() + ".js")) {
          require(__dirname + '/../events/' + event.toLowerCase() + '.js').run(this, packet.d);
        }
      }
      //===================================
      //Heartbeat latency check.
      if (packet.op === 11) {
        if (options.log === true) console.log("(IN)[OP 11] Heartbeat!");
      }
    }
  }
  send(channel, text) {
    require(__dirname + "/../actions/messages/send.js").run(channel, text, this, options)
  }
  disReply(message, text) {
    require(__dirname + "/../actions/messages/disReply.js").run(message, text, this, options)
  }
  command(options) {
    if (!options.name) return;
    let test1 = options.reply || options.run;
    if (!test1) return;
    this.internalCommandHandler.push(options);
  }
  deleteMessage(messageid, channelid) {
    require(__dirname + "/../actions/messages/delete.js").run(messageid, channelid, this, options)
  }
  react(channelid, messageid, emoji){
    require(__dirname + "/../actions/reactions/add.js").run(channelid, messageid, emoji, this, options)
  }
  status(text, type) {
    let finalType = "online";
    if (type == "online" || type == "dnd" || type == "idle" || type == "invisible") {
      finalType = `${type}`;
    }
    let statustype = 0;
    if (text.startsWith("playing ")) {
      statustype = 0;
    }
    if (text.startsWith("listening ")) {
      statustype = 2;
    }
    //console.log(finalType);
    let precense = {
      op: 3,
      d: {
        since: 91879201,
        activities: [{
         name: text.replace("listening ", "").replace("playing ", ""),
         type: statustype
       }],
        status: `${finalType}`,
        afk: true
      }
    }
    this.conn.send(JSON.stringify(precense))
  }
}
module.exports.client = client;
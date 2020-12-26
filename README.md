```
  _____ _ _            _    _____              _   _     
 / ____| (_)          | |  / ____|            | | (_)    
| |    | |_  ___ _ __ | |_| |     ___  _ __ __| |  _ ___ 
| |    | | |/ _ \ '_ \| __| |    / _ \| '__/ _` | | / __|
| |____| | |  __/ | | | |_| |___| (_) | | | (_| |_| \__ \
 \_____|_|_|\___|_| |_|\__|\_____\___/|_|  \__,_(_) |___/
                                                 _/ |    
                                                |__/          
```
---

**What is ClientCord Is simple node.js module which uses the**`Discord API` **so you can create Discord Bots easyily**

---

```
const clientcord = require("ClientCord");
const client = new clientcord.client("Your Bot Token");

client.command({
  name: "!ping",
  description: "Ping pong",
  reply: `Pong!`
});

```

**We also offer functions and more.**

```
client.command({
  name: "!functions",
  description: "functions",
  run: (message, args) => {
    message.reply("hey")
  }
});

```

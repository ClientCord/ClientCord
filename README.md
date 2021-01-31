
**
```
ClientCord.js
```
**


Welcome to ClientCord.JS a small project for improving our coding skills. This is a wrapper for the discord API in NodeJS with comfort features.
## Todo
 - [ ] Messages
 - [x] Edit, Delete, React to messages from users
 - [ ] Edit, Delete, React and edit messages from the client.
 - [ ] Reactions
 - [ ] Client Logoff
 - [x] WebSocket
 - [ ] Slash Commands
 - [x] Command handler built-in
 - [x] Get all users
 - [x] Get all guilds
 - [x] Get bot client
 - [x] Reply with a reference message
 - [x] Delete message
 - [x] React to message
 - [x] Set status
 - [ ] Use .then() or await on syntax like message.send() instead of client.latestMessage;
 
 ## Syntax
 

````js
client.send(channel_id, text)
````
**Client.Send()**
Send a message to a specific channel.

##
````js
client.disReply(message_object, text)
````
**Client.disReply()**
Required a message object and will use the reply feature to respons to the message.
##
````js
client.command({
	name: "required",
	run: () => {
		//code
	}
})
````
````js
client.command({
	name: "required",
	reply: "Text to reply with."
})
````
**Client.command()**
Create a new command structure and send it to the *internalCommandHandler* name is required, and you can pick between reply (text) or run (function). You can add any thing like category, description etc. 
##
````js
client.deleteMessage(message_id, channel_id)
````
**Client.deleteMessage()**
Will delete a specific message.
##
````js
client.react(channel_id, message_id, emoji)
````
**Client.react()**
Will react with an emoji to a message (No custom emoji's supported yet)
##
````js
client.status("[playing/listening] [text]")
````
````js
client.status("[playing/listening/watching] [text]", "[dnd/invisible/online/idle]")
````

**Client.status()**
Will set the client status (Default online)
##
````js
MessageObject.reply("text")
````
**MessageObject.reply()**
Will send a message in the same channel as the MessageObject.
##
````js
MessageObject.disReply("text")
````
**MessageObject.disReply()**
will reply with the discord reply feature to a MessageObject.
##
````js
MessageObject.delete();
````
**MessageObject.delete()**
Will delete the MessageObject.
##
````js
MessageObject.react("😀")
````
**MessageObject.react()**
Will react with an emoji to a MessageObject.
##
````js
client.guilds
````
**client.guilds**
Array of all guilds.
##
````js
client.members
````
**client.members**
Array of all members.
##
````js
client.internalCommandHandler
````
**client.internalCommandHandler**
Array of all commands in JSON objects.
##
````js
client.lastSentMessage[channel_id]
````
**client.lastSentMessage[]**
Will give the last sent bot message in that channel.
##
````js
client.conn...
````
**client.conn...**
Raw websocket.
##
````js
client.options.gateway
````
**client.options.gateway**
Wrapper gateway URL
##
````js
client.options.api
````
**client.options.api**
Wrapper API URL
##
````js
client.options.log
````
**client.options.log**
Enable development logs for testing the wrapper.
##
````js
client.properties.$os
````
**client.properties.$os**
Type of OS used (Use linux or Android to switch between normal or phone)
##
````js
client.properties.$browser
````
**client.properties.$browser**
Browser Header
##
````js
client.properties.$device
````
**client.properties.$device**
Device header.
##
````js
client.heartbeat.op
````
**client.heartbeat.op**
Heartbeat Operation Code.
##
````js
client.heartbeat.d
````
**client.heartbeat.d**
Data header for heartbeat OP data.
##
````js
client.on("Event", () => {

});
````
**client.on()**
When an event is triggerd this wel triggered.
Here is a full list of events:

 - guildCreate
 - message
 - ready
##
````js
let client = new Module.client("bot_token");
````
**new Module.client()**
Create a new Bot Client
##
````js
let embed = new Module.embed();
````
**new Module.embed();**
Create a new Rich embed object.
##
````js
require('./node_modules/clientcord.js/src/extra/getAvatar.js').getAvatar(userid, avatar);
````
**[EXTRA] GetAvatar()**
Get avatar of user
##
````js
EmbedObject.setColor("HEX");
````
**EmbedObject.setColor()**
Set color of an embed using hex color values.
##
````js
EmbedObject.setTitle("Title");
````
**EmbedObject.setTitle()**
Set title of embed
##
````js
EmbedObject.setAuthorName("name");
````
**EmbedObject.setAuthorName**
Set name of author field.
##
````js
EmbedObject.setAuthorIcon("url");
````
**EmbedObject.setAuthorIcon()**
Set icon of author field.
##
````js
EmbedObject.setAuthorUrl("URL");
````
**EmbedObject.setAuthorUrl()**
Set URL of author field.
##
````js
EmbedObject.setDescription("text");
````
**EmbedObject.setDescription()**
Set description of embed.
##
````js
EmbedObject.setThumbnail("url")
````
**EmbedObject.setThumbnail()**
set thumbnail of embed.
##
````js
EmbedObject.setImage("url");
````
**EmbedObject.setImage()**
Set image of embed.
##
````js
EmbedObject.setTimestamp(new Date());
````
**EmbedObject.setTimestamp()**
Set timestamp of embed.
##
````js
EmbedObject.setFooterText("text");
````
**EmbedObject.setFooterText()**
Set footer text of embed.
##
````js
EmbedObject.setFooterIcon("url");
````
**EmbedObject.setFooterIcon()**
Set footer icon of embed.
##
````js
EmbedObject.addField("name", "value") //inline false
````
````js
EmbedObject.addField("name", "value", true) //inline true
````
**EmbedObject.addField()**
Add a field to embed.
##
````js
EmbedObject.embed();
````
````js
EmbedObject.embed
````
**EmbedObject.embed()**
Return full JSON of embed to parse in a message.




# Example with all features.
````js
const clientcord = require("clientcord.js");
const client = new clientcord.client("--- Bot Token ---");
  
  
  
  
  
client.on("ready", () => {
	client.status(client.user.username, "dnd");
});
  
  
  
  

client.command({
	name: "!ping",
	description: "Ping pong",
	reply: `Pong!`
});
  
  
  
  
  
client.command({
	name: "!guilds",
	description: "Get Guilds",
	run: (message, args) => {
		message.reply(client.guilds.cache.map(g => g.name).join("\n"))
	}
});
  
  
  
  
  
client.command({
	name: "!members",
	description: "Get All Members",
	run: (message, args) => {
		//console.log(client.members.map(u => u.username).join("\n"));
		message.reply(client.members.map(u => u.username).join("\n"))
	}
});
  
  
  
  
  
client.command({
	name: "!getGuild",
	description: "Get Guild",
	run: (message, args) => {
		console.log(client.guilds.get("755457188914528317"));
	}
});
  
  
  
  
  
client.command({
	name: "!delete",
	description: "Delete the command lol",
	run: (message, args) => {
		message.delete();
	}
});
  
  
  
  
  
client.command({
	name: "!embed",
	description: "Embed test",
	run: (message) => {
		let embed = new clientcord.embed();
		embed.setColor("#7289DA");
		embed.setTitle("RICKROLLED.");
		embed.setDescription("Lmfao");
		embed.addField("Lol", "Lol", true);
		embed.setTimestamp(new Date())
		embed.setAuthorIcon("https://i.gifer.com/4KL.gif");
		embed.setAuthorUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO");
		embed.setAuthorName("Test");
		embed.setThumbnail("https://i.gifer.com/4KL.gif");
		embed.setImage("https://i.gifer.com/4KL.gif");
		message.reply(embed.embed);
	}
});
  
  
  
  
  
client.command({
	name: "!reply",
	description: "Reply command",
	run: (message, args) => {
		if (!args[0]) {
			let embed = new clientcord.embed();
			embed.setTitle("Error!");
			embed.setColor("#fc0303");
			embed.setDescription("You need to use !reply [message]")
			return message.reply(embed.embed);
		}
		message.disReply(args.join(" "));
	}
})
  
  
  
  
  
client.command({
	name: "!help",
	description: "help command",
	run: (message, args) => {
		let embed = new clientcord.embed();
		embed.setTitle("Help Menu");
		embed.setColor("#7289da");
		embed.setDescription("All commands of the bot");
		client.internalCommandHandler.forEach((command, i) => {
			embed.addField(command.name, command.description);
		});
	message.reply(embed.embed);
	}
})
  
  
  
  
  
client.command({
	name: "!react",
	description: "react command",
	run: (message, args) => {
		message.react(`🎉`)
	}
})
  
  
  
  
  
client.command({
	name: "!reactOnBotMessage",
	description: "React on a bot message",
	run: async(message, args) => {
		message.reply("Hello!")
		setTimeout(() => {
			client.lastSentMessage[message.channel_id].react("😀")
		}, 250)
	}
})
  
  
  
  
  
client.command({
	name: "!deleteAfter3Seconds",
	description: "Delete bot message after 3 seconds",
	run: async(message, args) => {
		message.reply("Hello!")
		setTimeout(() => {
			let lat = client.lastSentMessage[message.channel_id];
			setTimeout(() => {
				lat.delete();
			}, 2750);
		}, 250)
	}
})
````

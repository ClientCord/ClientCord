const clientcord = require(__dirname + "/../../index.js");
const client = new clientcord.client("--- BOT TOKEN ---");





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


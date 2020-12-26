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
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function colourToNumber(r, g, b) {
  return (r << 16) + (g << 8) + (b);
}
class embed {
  constructor() {
    this.embed = {
  title: '',
  description: '',
  url: '',
  color: null,
  timestamp: '',
  footer: {},
  thumbnail: {},
  image: {},
  author: {},
  fields: []
}
  }
  setColor(color) {
    let r = hexToRgb(color).r;
    let g = hexToRgb(color).g;
    let b = hexToRgb(color).b;
    this.embed.color = colourToNumber(r, g, b);
  }
  setTitle(title) {
    this.embed.title = title;
  }
  setUrl(url) {
    this.embed.url = url;
  }
  setAuthorName(name) {
    this.embed.author.name = name;
  }
  setAuthorIcon(icon) {
    this.embed.author.icon_url = icon;
  }
  setAuthorUrl(url) {
    this.embed.author.url = url;
  }
  setDescription(description) {
    this.embed.description = description;
  }
  setThumbnail(url) {
    this.embed.thumbnail.url = url;
  }
  setImage(url) {
    this.embed.image.url = url;
  }
  setTimestamp(timestamp) {
    this.embed.timestamp = timestamp;
  }
  setFooterText(text) {
    this.embed.footer.text = text;
  }
  setFooterIcon(url) {
    this.embed.footer.icon_url = text;
  }
  addField(name, value, inline) {
    if (!inline) {
      inline = false;
    }
    this.embed.fields.push({
      name: `${name}`,
      value: `${value}`,
      inline: inline
    })
  }
  embed() {
    return this.embed;
  }
}
module.exports.embed = embed;
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
class slashCommand {
  constructor() {
      this.json = {
        name: "",
        description: "",
        options: []
      }
  }
  setName(name) {
    this.json.name = name;
  }
  setDescription(description) {
    this.json.description = description;
  }
  cmd() {
    return this.json;
  }
}
module.exports.slashCommand = slashCommand;
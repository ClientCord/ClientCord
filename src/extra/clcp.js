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
const fs = require('fs');
const fileExistsSync = (file) => {
    try {
        fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
        return true;
      } catch (err) {
        return false;
      }
}
class reader {
  constructor(file) {
    this.file = file;
    this.jsmap = {};
    if (fileExistsSync(file)) {
      let raw = [];
      let map = [];
      let jsmap = {};
      require('fs').readFileSync(file, 'utf-8').split(/\r?\n/).forEach(function(line, i){
        if (!line.startsWith("#")) {
          if (line) {
            raw.push(line.split("#")[0]);
          }
        }
      })
      raw.forEach((val, i) => {
        if (val.startsWith("=")) {
          if (raw[i + 1].startsWith('"')) {
            jsmap[val.split("=")[1].toLowerCase()] = raw[i + 1].split('"')[1];
          } else {
            jsmap[val.split("=")[1].toLowerCase()] = raw[i + 1]
          }
        }
      })
      this.jsmap = jsmap;
    }
  }
  js() {
    return this.jsmap;
  }
}
module.exports = reader;
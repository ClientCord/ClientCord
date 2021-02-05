let reader = require(__dirname + "/../extra/clcp");
let db = new reader(__dirname + "/../../testplugin/plugin.clcp");
console.log(db.js().version)
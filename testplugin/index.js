var clients = {};
class main {
  constructor(client) {
    this.cl = client;
  }
  test2() {
    console.log(this.constructor.cl); //undefined
  }
}
module.exports.main = main;
module.exports.exp = ["test2"];
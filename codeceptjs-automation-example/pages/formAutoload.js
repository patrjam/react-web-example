function formAutoload() {
  this.FormPage = new (require("./Form/FormPage.js"))();
}

module.exports = formAutoload;

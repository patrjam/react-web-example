const { I } = inject();
const app = require("../App/App");

module.exports = {
  container: locate(app.application).find("div.container"),

  inputs: {
    name: locate(this.container).find('[id="name"]'),
    email: locate(this.container).find('[id="email"]'),
    phone: locate(this.container).find('[id="phone"]'),
    comment: locate(this.container).find('[id="comment"]'),
  },

  buttons: {
    submit: '[type="submit"]',
  },

  radioButtons: {
    radioInline: locate(this.container).find(".radio-inline"),

    immediately: locate(this.radioInline).withText("Immediately"),
    treeMonths: locate(this.radioInline).withText("1-3 months"),
  },

  checkBoxes: {
    checkBoxInline: locate(this.container).find(".checkbox-inline"),

    analysis: locate(this.checkBoxInline).withText("Analysis"),
    automation: locate(this.checkBoxInline).withText("Automation"),
    development: locate(this.checkBoxInline).withText("Development"),
    training: locate(this.checkBoxInline).withText("Training"),
  },

  submitForm() {
    I.click(this.buttons.submit);
  },

  fillInRandomEmail(email) {
    I.fillField(this.inputs.email, email);
  },

  sendContactFormWithMandatoryFields(name, email, comment) {
    I.fillField(this.inputs.name, name);
    I.fillField(this.inputs.email, email);
    I.fillField(this.inputs.comment, comment);
    this.submitForm();
  },

  /*
example for data-client
*/
  async fillInNameWithScudUser() {
    const scudUser = await I.getScudUser();

    I.fillField(this.inputs.name, scudUser.data.username);
  },
};

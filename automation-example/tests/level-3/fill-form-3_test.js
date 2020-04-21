const form = require("../../pages/Form/Form");
const message = require("../../pages/Messages/Success");
const autoloadForm = new (require("../../pages/formAutoload"))();
const faker = require("faker");

Feature("Level3: Fill form");

Scenario("Fill mandatory fields in form - @withDataClient", async (I) => {
  I.amOnPage("/");

  await form.fillInNameWithScudUser();
  form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());
  form.submitForm();
  I.see(message.success);
});

Scenario("Fill mandatory fields in form - @customLocator(data-qa)", (I) => {
  I.amOnPage("/");

  I.fillField(form.inputs.name, faker.name.firstName());
  form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());

  //NOTE: need to add data-qa in to code
  I.click("$submit_with_locator");
  I.see(message.success);
});

Scenario("Fill mandatory fields in form - @autoload", (I) => {
  I.amOnPage("/");

  I.fillField(form.inputs.name, faker.name.firstName());
  autoloadForm.Form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());
  form.submitForm();
  I.see(message.success);
});

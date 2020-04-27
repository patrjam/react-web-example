const form = require("../../pages/Form/FormPage");
const autoloadForm = new (require("../../pages/formAutoload"))();
const faker = require("faker");

Feature("Level3: Fill form");

Scenario("Fill mandatory fields in form - @withDataClient", async (I) => {
  I.amOnPage("/");

  await form.fillInNameWithScudUser();
  form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());
  form.submitForm();
  I.see(form.alerts.success);
});

Scenario("Fill mandatory fields in form - @customLocator(data-qa)", (I) => {
  I.amOnPage("/");

  I.fillField(form.inputs.name, faker.name.firstName());
  form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());

  //NOTE: need to uncomment data-qa in App.js
  I.click("$submit_with_locator");
  I.see(form.alerts.success);
});

Scenario("Fill mandatory fields in form - @autoload", (I) => {
  I.amOnPage("/");

  I.fillField(form.inputs.name, faker.name.firstName());
  autoloadForm.Form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());
  form.submitForm();
  I.see(form.alerts.success);
});

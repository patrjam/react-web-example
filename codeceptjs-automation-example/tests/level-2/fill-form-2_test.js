const form = new (require("../../pages/Form/FormPage"))();
const faker = require("faker");

Feature("Level2: Fill form");

Scenario("Fill mandatory fields in form - @withPO", (I) => {
  I.amOnPage("/");
  I.fillField(form.inputs.name, faker.name.firstName());
  I.fillField(form.inputs.email, faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());
  I.click(form.buttons.submit);
  I.see(form.alerts.success);
});

Scenario("Fill mandatory fields in form - @withPO&HelpFunctions", (I) => {
  I.amOnPage("/");
  I.fillField(form.inputs.name, faker.name.firstName());
  form.fillInRandomEmail(faker.internet.email());
  I.fillField(form.inputs.comment, faker.lorem.text());
  form.submitForm();
  I.see(form.alerts.success);
});

Scenario(
  "Fill mandatory fields in form - @withPO&HelpFunctionsUpgrade",
  (I) => {
    I.amOnPage("/");
    form.sendContactFormWithMandatoryFields(
      faker.name.firstName(),
      faker.internet.email(),
      faker.lorem.text()
    );
    I.see(form.alerts.success);
  }
);

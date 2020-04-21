Feature("Level1: Fill form");

Scenario("Fill mandatory fields in form - @basic", (I) => {
  I.amOnPage("/");
  I.fillField("#name", "Eva");
  I.fillField("#email", "email@example.com");
  I.fillField("#comment", "my comment");
  I.click(".btn");
  I.see("We have received your message and will get in touch shortly. Thanks!")
});

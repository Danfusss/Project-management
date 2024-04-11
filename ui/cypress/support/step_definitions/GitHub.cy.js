import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Пользователь заходит на страницу профиля Danfusss", () => {
  cy.visit("https://github.com/Danfusss");
});
Then("он должен увидеть заголовок {string}", (name) => {
  cy.get(".Link--secondary.Link", { timeout: 10000 }).and("contain", name);
});

import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I open the started page", () => {
  cy.visit("/");
});

Then("I find the inputNumber with {string}", (numberProject) => {
  cy.get('[placeholder="Логин (Surname_NP)"]').type("test");
  cy.get('[placeholder="Пароль"]').type("test");
  cy.contains("Войти").click();
  cy.contains("Список резюме").click();
});

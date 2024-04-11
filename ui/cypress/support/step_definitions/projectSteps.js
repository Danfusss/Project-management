import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the project page", () => {
  cy.visit("/project-details/001");
});

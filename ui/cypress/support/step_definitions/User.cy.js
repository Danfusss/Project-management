import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

const data = [
  {
    nameChapter: "Образование и профессиональная квалификация",
    numberSection: "3",
  },
  {
    nameChapter: "Дополнительное образование",
    numberSection: "4",
  },
  {
    nameChapter: "Сертификаты",
    numberSection: "5",
  },
  {
    nameChapter: "Профессиональный путь",
    numberSection: "6",
  },
  {
    nameChapter: "Знания и навыки",
    numberSection: "7",
  },
];

Given("I open page", () => {
  cy.visit("/");
});
Then("I`m Log in {string} ,{string}", (nameChapter, numberSection) => {
  cy.get('[placeholder="Логин (Surname_NP)"]').type("test");
  cy.get('[placeholder="Пароль"]').type("test");
  cy.contains("Войти").click();
  cy.contains("Список резюме").click();
  cy.get("tr").contains("Азарова Ирина Владимировна").click();
  cy.get("#__button38")
    .click()
    .then(() => {
      data.forEach((element) => {
        cy.contains(`${element.nameChapter}`)
          .click({ force: true })
          .scrollIntoView();
        cy.contains("Добавить Комментарий").scrollIntoView().click();
        cy.get("textarea")
          .first()
          .click({ multiple: true })
          .type("Я был здесь");
        cy.get("section")
          .find("section")
          .eq(element.numberSection)
          .find('button[data-infocomment="educationAdditional"]')
          .eq("0")
          .click();
      });

      cy.get("textarea").eq(1).type("тест завершен");
    });
  // cy.contains(`${nameChapter}`).click({ force: true }).scrollIntoView();
  // cy.contains("Добавить Комментарий").scrollIntoView().click();
  // cy.get("textarea").first().click({ multiple: true }).type("Я был здесь");
  // cy.get('button[data-infocomment="education"]')
  //   .eq(numberButton)
  //   // .find("button")
  //   // .eq(numberButton)
  //   .click();
  // cy.get("section")
  //   .find("section")
  //   .eq(numberSection)
  //   .find('button[data-infocomment="educationAdditional"]')
  //   .eq("0")
  //   .click();
});

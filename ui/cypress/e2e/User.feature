@feature-tags
Feature: The User
I want to create a new user and task for him

@tag-to-include
Scenario: open 
Given I open page 
Then I`m Log in "<nameChapter>" ,"<numberSection>"
# Then I find the button to go to the edit page and click
# Then I find a button to create a user and click
# Then I enter my full name and the name of the task and click create

Examples:
    | nameChapter | numberSection | 
    | Образование и профессиональная квалификация| 2 |
    # | Дополнительное образование| 3  | 
    # | СЕРТИФИКАТЫ| Value 2  | 4 |
    # | ПРОФЕССИОНАЛЬНЫЙ ПУТЬ | 3 | 5  |
    # | ЗНАНИЯ И НАВЫКИ| Value 2  | 6 |
    # | ЗНАНИЕ ФУНКЦИОНАЛЬНОСТЕЙ | 5  | Value 3  |

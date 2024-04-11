@feature-tags
Feature: The Filters
I want use filters

@tag-to-include
Scenario: open the  page
Given I open the started page
Then I find the inputNumber with "<numberProject>"


    Examples:
      | numberProject| city                    |customer |
      | 5            | #input3-option-1        |ENRC|
      # | 5            | #input3-option-2        |АЛРОСА|
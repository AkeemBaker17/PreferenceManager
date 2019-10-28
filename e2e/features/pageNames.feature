Feature: Verify Page Names

Background: A user is logged in
Given a user is logged in

Scenario Outline: Verify the Page Names
Then Page Name <PageName> is displayed in the header for each <Page>
Examples:
| Page       | PageName       |
| By Group   | By Group       |
Feature: FormSubmission
  As a user
  I want to fill out the Product License Approval form
  So that my information is submitted successfully

  Scenario: Successful form submission
    Given the user is on the form page
    When the user enters the following details:
      | Field        | Value          |
      | FirstName    | John           |
      | LastName     | Doe            |
      | AddressLine1 | 123 Main St    |
      | AddressLine2 | Apt 4B         |
      | City         | New York       |
      | EirCode      | 10001          |
      | Country      | United States  |
      | EmailID      | john.doe@email.com |
      | PhoneNumber  | 1234567890     |
    And the user submits the form
    Then the form should be sent to the API
    And a success message should be displayed

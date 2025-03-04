using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SpecFlowTests.Drivers;
using TechTalk.SpecFlow;
using OpenQA.Selenium.Support.UI;
using System;
namespace SpecFlowTests.StepDefinitions
{
    [Binding]
    public class FormSubmissionSteps
    {
        private readonly WebDriverSupport _webDriverSupport;
        private readonly IWebDriver _driver;

        public FormSubmissionSteps()
        {
            _webDriverSupport = new WebDriverSupport();
            _driver = _webDriverSupport.GetDriver();
        }

        [Given(@"the user is on the form page")]
        public void GivenTheUserIsOnTheFormPage()
        {
            _driver.Navigate().GoToUrl("http://localhost:3000/");
        }

        [When(@"the user enters the following details:")]
        public void WhenTheUserEntersTheFollowingDetails(Table table)
        {
            foreach (var row in table.Rows)
            {
                string field = row["Field"];
                string value = row["Value"];

                switch (field)
                {
                    case "FirstName":
                        _driver.FindElement(By.Id("firstname")).SendKeys(value);
                        break;
                    case "LastName":
                        _driver.FindElement(By.Id("lastname")).SendKeys(value);
                        break;
                    case "AddressLine1":
                        _driver.FindElement(By.Id("addressline1")).SendKeys(value);
                        break;
                    case "AddressLine2":
                        _driver.FindElement(By.Id("addressline2")).SendKeys(value);
                        break;
                    case "City":
                        _driver.FindElement(By.Id("City")).SendKeys(value);
                        break;
                    case "EirCode":
                        _driver.FindElement(By.Id("eircode")).SendKeys(value);
                        break;
                    case "Country":
                        new SelectElement(_driver.FindElement(By.Id("country"))).SelectByValue(value);
                        break;
                    case "EmailID":
                        _driver.FindElement(By.Id("emailID")).SendKeys(value);
                        break;
                    case "PhoneNumber":
                        _driver.FindElement(By.Id("phoneNumber")).SendKeys(value);
                        break;
                }
            }
        }

        [When(@"the user submits the form")]
        public void WhenTheUserSubmitsTheForm()
        {
            _driver.FindElement(By.CssSelector("button[type='submit']")).Click();
        }

        [Then(@"the form should be sent to the API")]
        public void ThenTheFormShouldBeSentToTheAPI()
        {
            Assert.IsTrue(_driver.PageSource.Contains("Form Submitted"));
        }

        [Then(@"a success message should be displayed")]
        public void ThenASuccessMessageShouldBeDisplayed()
        {
            IAlert alert = _driver.SwitchTo().Alert();
            Assert.IsTrue(alert.Text.Contains("Form Submitted"), "Alert message is incorrect.");
            alert.Accept();
        }
    }
}

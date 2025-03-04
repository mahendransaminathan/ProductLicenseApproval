using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace SpecFlowTests.Drivers
{
    public class WebDriverSupport
    {
        private IWebDriver _driver;

        public IWebDriver GetDriver()
        {
            if (_driver == null)
            {
                var service = ChromeDriverService.CreateDefaultService();
                service.LogPath = "C:\\Projects\\ProductLicenseApproval\\SpecFlowTests\\chromedriver.log";  // Set full path
        
        //        service.LogPath = "chromedriver.log";  // ✅ Log file to check errors
                service.EnableVerboseLogging = true;
                
                
                var options = new ChromeOptions();
                options.AddArgument("--start-maximized"); // Ensure browser is maximized
                options.AddArgument("--disable-gpu");    // (Optional) Helps in some environments
                options.AddExcludedArgument("enable-automation"); // Prevents automation message
                options.AddArgument("--incognito"); // Optional: Opens in Incognito mode
                options.AddArgument("--log-level=ALL"); // Log everything

                // ❌ Remove "--headless" if present
                // ✅ Ensure head mode
                _driver = new ChromeDriver("C:/Users/mahen/Downloads/chromedriver-win64/chromedriver-win64", options);
            }
            return _driver;
        }

        public void CloseDriver()
        {
            _driver?.Quit();
        }
    }
}

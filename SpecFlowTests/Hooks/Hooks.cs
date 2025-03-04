using TechTalk.SpecFlow;
using SpecFlowTests.Drivers;

namespace SpecFlowTests.Hooks
{
    [Binding]
    public class Hooks
    {
        private readonly WebDriverSupport _webDriverSupport;

        public Hooks()
        {
            _webDriverSupport = new WebDriverSupport();
        }

        [AfterScenario]
        public void TearDown()
        {
            _webDriverSupport.CloseDriver();
        }
    }
}

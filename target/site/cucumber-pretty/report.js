$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darksky.feature");
formatter.feature({
  "line": 3,
  "name": "Dark Sky feature",
  "description": "",
  "id": "dark-sky-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@darksky"
    }
  ]
});
formatter.before({
  "duration": 3098561411,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 292271968,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid signup error message",
  "description": "",
  "id": "dark-sky-feature;verify-invalid-signup-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@darksky-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on Register button on darksky",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify error message - Please fill out this field",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 564441245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 11
    }
  ],
  "location": "DarkskySD.clickOnRegisterButton(String)"
});
formatter.result({
  "duration": 62260379,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyErrorMessage()"
});
formatter.result({
  "duration": 23889663,
  "status": "passed"
});
formatter.after({
  "duration": 109643548,
  "status": "passed"
});
formatter.before({
  "duration": 2377710318,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 7274949,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Current Temperature should not be greater or less than the Temperature from Daily Timeline",
  "description": "",
  "id": "dark-sky-feature;verify-current-temperature-should-not-be-greater-or-less-than-the-temperature-from-daily-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@darksky-2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I verify current temp is not greater or less then temps from daily timeline",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 3617508,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyCurrentTemp()"
});
formatter.result({
  "duration": 434646723,
  "status": "passed"
});
formatter.after({
  "duration": 102674635,
  "status": "passed"
});
formatter.before({
  "duration": 2072158838,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 6012850,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "dark-sky-feature;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@darksky-3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I expand todays timeline",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 3636556,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.iExpandTodayTimeLine()"
});
formatter.result({
  "duration": 21125437431,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Webdriver waited for 15 seconds but still could not find the element therefore Timeout Exception has been thrown (tried for 15 second(s) with 1000 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:315)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat framework.webPages.BasePage.webAction(BasePage.java:29)\n\tat framework.webPages.BasePage.clickOn(BasePage.java:39)\n\tat framework.webPages.HomePageDarksky.clickOnTimeLine(HomePageDarksky.java:91)\n\tat stepdefinition.DarkskySD.iExpandTodayTimeLine(DarkskySD.java:62)\n\tat ✽.When I expand todays timeline(darksky.feature:21)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027day revealed\u0027]//span[@class\u003d\u0027bar\u0027]\"}\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.14.1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027mohameds-MBP.cable.rcn.com\u0027, ip: \u0027fe80:0:0:0:c93:1557:6e38:2464%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.1\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /var/folders/sq/gfw0lfnd3cg...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50264}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 1009c55c6e41b7b55eb09acdeb773c6c\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027day revealed\u0027]//span[@class\u003d\u0027bar\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat framework.webPages.BasePage$1.apply(BasePage.java:31)\n\tat framework.webPages.BasePage$1.apply(BasePage.java:29)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat framework.webPages.BasePage.webAction(BasePage.java:29)\n\tat framework.webPages.BasePage.clickOn(BasePage.java:39)\n\tat framework.webPages.HomePageDarksky.clickOnTimeLine(HomePageDarksky.java:91)\n\tat stepdefinition.DarkskySD.iExpandTodayTimeLine(DarkskySD.java:62)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "DarkskySD.verifyLowestandHighestTemp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 139498714,
  "status": "passed"
});
formatter.before({
  "duration": 2292581553,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 6609286,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify timline is displayed in correct format",
  "description": "",
  "id": "dark-sky-feature;verify-timline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@darksky-4"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on Darksky Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkskySD.iAmOnDarkskyHomePage()"
});
formatter.result({
  "duration": 7151640,
  "status": "passed"
});
formatter.match({
  "location": "DarkskySD.verifyTimelineincrementedTwoHours()"
});
formatter.result({
  "duration": 42887406,
  "error_message": "java.lang.NumberFormatException: For input string: \"Now\"\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\n\tat java.lang.Integer.parseInt(Integer.java:580)\n\tat java.lang.Integer.parseInt(Integer.java:615)\n\tat framework.webPages.HomePageDarksky.timeLineIncrementedTwoHours(HomePageDarksky.java:118)\n\tat stepdefinition.DarkskySD.verifyTimelineincrementedTwoHours(DarkskySD.java:76)\n\tat ✽.Then I verify timeline is displayed with two hours incremented(darksky.feature:27)\n",
  "status": "failed"
});
formatter.after({
  "duration": 198627493,
  "status": "passed"
});
});
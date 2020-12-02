const {Builder, By, Key, until, ActionSequence} = require('selenium-webdriver');
require('dotenv').config()
const email = process.env.EMAIL;
const nume = process.env.NUME;
const url = process.env.CHECKIN_URL;
(async function() {
  let driver = new Builder().forBrowser('chrome').build();
  try {
	let today = new Date();

	await driver.get(url);
	await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@type='email']")).sendKeys(email);
	await driver.findElement(By.xpath("//input[@type='text']")).sendKeys(nume);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[1]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[2]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[0]);
	await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionSelectRoot > div > div:nth-child(1) > div.quantumWizMenuPaperselectOptionList')).click();
	await driver.sleep(120)
	await driver.findElement(By.css("div.exportSelectPopup.quantumWizMenuPaperselectPopup div.quantumWizMenuPaperselectOption.freebirdThemedSelectOptionDarkerDisabled.exportOption[data-value='Da'] span")).click();
	await driver.sleep(500)
	await driver.findElement(By.xpath("//div[@role='button']")).sendKeys(Key.ENTER)

	let el = await driver.findElement(By.xpath("//div[text()='Locul de desfasurare a activitatii']"));
	await driver.wait(until.elementIsVisible(el), 1000);
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionRadioChoicesContainer > div:nth-child(1) > label')).click()
	await driver.sleep(500)
	await driver.findElement(By.css('div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div:nth-child(2)')).sendKeys(Key.ENTER)
	let el2 = await driver.findElement(By.xpath("//div[text()='Orar de activitate']"));
	await driver.wait(until.elementIsVisible(el2),1000);
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(1) > div.quantumWizTextinputPaperinputEl.freebirdFormviewerComponentsQuestionTimeTimeInput.freebirdThemedInput.freebirdThemedInputDarkerDisabled.freebirdFormviewerComponentsQuestionTimeInput.modeLight > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('08');		
	await driver.findElement(By.css('div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(3) > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('00');		
	await driver.findElement(By.css('div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div:nth-child(2)')).sendKeys(Key.ENTER)
	await driver.sleep(2000)
  } catch(e) {
	console.log("err", e)
  }finally {
    driver.quit();
  }

}());
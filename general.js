const {Builder, By, Key, until, ActionSequence} = require('selenium-webdriver');
require('dotenv').config()
const email = process.env.EMAIL;
const nume = process.env.NUME;
const url = process.env.CHECKOUT_URL;
(async function() {
  let driver = new Builder().forBrowser('chrome').build();
  try {
	let today = new Date();

	await driver.get(url);
	await driver.sleep(1000)
    await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(1) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys(email);
	await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys(nume);
	await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(2) > div > div > div.freebirdFormviewerComponentsQuestionTextRoot > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys(Key.TAB);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[1]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[2]);
	await driver.findElement(By.css('.freebirdFormviewerComponentsQuestionDateDateInputs .quantumWizTextinputPaperinputInput')).sendKeys(today.toISOString().split("T")[0].split("-")[0]);
	await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(1) > div.quantumWizTextinputPaperinputEl.freebirdFormviewerComponentsQuestionTimeTimeInput.freebirdThemedInput.freebirdThemedInputDarkerDisabled.freebirdFormviewerComponentsQuestionTimeInput.modeLight > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('17');		
	await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewItemList > div:nth-child(4) > div > div > div.freebirdFormviewerComponentsQuestionTimeRoot > div > div:nth-child(3) > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input')).sendKeys('00');		
	await driver.findElement(By.css('div.freebirdFormviewerViewFormCard.exportFormCard > div > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div')).sendKeys(Key.ENTER)

  } catch(e) {
	console.log("err", e)
  }finally {
    driver.quit();
  }

}());
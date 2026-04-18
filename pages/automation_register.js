const utils = require('../utility.json');
class Automation_Register {
    constructor (page){
        this.page=page;

        //locator define here

        this.first_name=page.locator(utils.Automation_Register.First_name);
    }

        //Register UI automation sequence
        async Registerpage(){
            await this.page.goto(utils.url.Automation_Demo_Site_Register);
            await this.first_name.fill(utils.credentials.First_name);
            await this.page.getByPlaceholder("Last Name").fill("TestLastName");
            await this.

        }


}
module.exports = { Automation_Register };

//“We use module.exports to make the class available outside the file. 
// Without exporting, the class cannot be imported in test files.
//  It’s required when using CommonJS (require). 
// In modern Playwright, we usually prefer ES modules using export and import.”


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
            await this.page.First_name.fill(utils.credentials.First_name);

        }


}
module.exports = { Automation_Register };



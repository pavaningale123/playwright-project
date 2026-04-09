import{test,expect} from '@playwright/test';
//import path from path;

test('file upload',async ({page}) =>{

    // await page.goto("https://www.file.io/");
    // const filePath = 'C:\\Users\\Pavan Ingale\\OneDrive\\Desktop\\New folder\\11.docx';
    // await page.getByText('Upload Files').setInputFiles(filePath);
        
    //await page.waitForTimeout(10000);

    // multiple file upload

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("//input[@id='filesToUpload']").setInputFiles(["C:\\Users\\Pavan Ingale\\Downloads\\22.docx"
        ,"C:\\Users\\Pavan Ingale\\Downloads\\11.docx"]);
    
    await expect(await page.locator("//ul[@id='fileList']//li[1]")).toHaveText("22.docx");
    await expect(await page.locator("//ul[@id='fileList']//li[2]")).toHaveText("11.docx");

    // remove the files 
    await page.locator("//input[@id='filesToUpload']").setInputFiles([]);
    await expect(await page.locator("//ul[@id='fileList']//li")).toHaveText("No Files Selected");

});
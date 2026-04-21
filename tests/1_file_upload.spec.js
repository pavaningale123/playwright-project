import { test, expect} from "@playwright/test";

test("single file upload", async ({page}) =>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    const filepath='C:\\Users\\Pavan Ingale\\OneDrive\\Desktop\\New folder\\11.docx';
    await page.locator("#filesToUpload").setInputFiles(filepath);
    await expect(page.locator("#fileList")).toContainText("11.docx");
    await page.waitForTimeout(5000);
});

test.only("Multiple file upload", async ({page}) =>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    const filepath=['C:\\Users\\Pavan Ingale\\OneDrive\\Desktop\\New folder\\11.docx',
        'C:\\Users\\Pavan Ingale\\OneDrive\\Desktop\\New folder\\22.docx'];
    await page.locator("#filesToUpload").setInputFiles(filepath);
    await expect(page.locator("#fileList")).toContainText("11.docx");
    await expect(page.locator("#fileList")).toContainText("22.docx");
    await page.waitForTimeout(5000);
});
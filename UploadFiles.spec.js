import {test,expect} from '@playwright/test'

test('Single File ',async({page})=>{

    await page.goto('https://foundit.in/')

    await page.waitForSelector('.mqfihd-upload')

    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests\\UploadFiles\\testfile1.pdf')

})

test('Multiple File',async({page})=>{

    await page.goto('https://foundit.in/')

    await page.waitForSelector('.mqfihd-upload')

    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests\\UploadFiles\\testfile1.pdf','tests\\UploadFiles\\testfile.pdf')

    await page.waitForTimeout(3000)

})
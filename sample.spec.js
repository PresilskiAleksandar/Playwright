const{test,expect} = require('@playwright/test')

test('My first Test', async function({page}){
        expect(12).toBe(12)
})

test.skip('My Second Test', async function({page}){
     expect(100).toBe(202)
})

test('My Third Test', async function({page}){
    expect(3).toBe(3.0)
})
test('My Fourth Test', async function({page}){
    expect('Aleksandar PResilski').toContain('Aleksandar')
    expect(true).toBeTruthy()
})

test('My Fifth Test', async function({page}){
    expect('Aleksandar PResilski').toContain('Aleksandar')
    expect(false).toBeFalsy()
})
test('My Sixth Test', async function({page}){
    expect('Aleksandar PResilski'.includes('Aleksandar')).toBeTruthy()
})

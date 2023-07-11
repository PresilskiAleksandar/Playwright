import { test, expect } from '@playwright/test'

test.describe('API Testing', () => {
    const baseUrl = 'https://reqres.in'


//     test('Get method From reqres', async ({ request }) => {
//     const response = await request.get(`${baseUrl}/api/users/2`)
//     expect(response.status()).toBe(200)
//     const responseBody = JSON.parse(await response.text())
    
//   })

//     test("POST Request - Crate New User",async ({request})=>{

//         const response = await request.post(`${baseUrl}/api/user`,{
//             date:{
//                 id:333,
//             },
//         })
//         const responseBody = JSON.parse(await response.text())
//     } )

    test.only('Post Request - Login', async({request})=>{
        const response = await request.post(`${baseUrl}/login`, {
            date:{
                email : 'eve.holt@reqres.in',
                password : 'cityslicka',
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.token).toBeTruthy()
    })
})
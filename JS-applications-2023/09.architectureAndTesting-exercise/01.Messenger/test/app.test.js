const {expect} = require('chai')
const {chromium} = require('playwright-chromium')

const host = 'http://localhost:5500';

let testMessages = {
   "1":{
    "author":"Pesho",
    "content":"My message"
   },
   "2":{
    "author":"George",
    "content":"Another message"
   },
}

describe('Tests', async function() {
    this.timeout(6000);

    let browser,page;

    before(async() => {
       // browser = await chromium.launch({headless:false,slowMo:2000});
       browser = await chromium.launch();
    });

    after(async() => {
       await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        page.close();
    });

    it('load all messages',async() => {
        await  page.route('**/jsonstore/messenger',(route,request) => {
            route.fulfill({
                body:JSON.stringify(testMessages),
                status:200,
                headers:{
                    'Access-Control-Allow-Origin':'*',
                    'Content-Type':'application/json'
                }
            })
        });
        //navigate to page
       await page.goto(host);

       //find and click load button
       await page.click('text="Refresh"')

       const textAreaData = await page.$eval('textarea',text => text.value);
       const testData = Object.values(testMessages).map((v) => `${v.author}: ${v.content}`).join('\n')
       expect(textAreaData).to.equals(testData)
    })

    it('send message',async () => {
        await page.route('**/jsonstore/messenger', (route, request) => {
            route.fulfill({
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ success: true })
            });
        });
    
        await page.goto(host);
    
        await page.fill('#author', Object.values(testMessages)[0].author);
        await page.fill('#content', Object.values(testMessages)[0].content);
        
    
        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() === 'POST'),
            page.click('text="Send"')
        ]);
    
        const postData = JSON.parse(request.postData());
        const testAuthor = Object.values(testMessages)[0].author;
        const testContent = Object.values(testMessages)[0].content;

        expect(postData.author).to.eql(testAuthor);
        expect(postData.content).to.eql(testContent);
    })
})
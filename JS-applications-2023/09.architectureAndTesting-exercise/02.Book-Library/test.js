const {expect} = require('chai')
const {chromium} = require('playwright-chromium')

const host = 'http://localhost:5500';

const mockData = {
    
        "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
          "author": "J.K.Rowling",
          "title": "Harry Potter and the Philosopher's Stone"
        },
        "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
          "author": "Svetlin Nakov",
          "title": "C# Fundamentals"
        }

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

    it('loads all books', async() => {
      await  page.route('**/jsonstore/collections/books',(route,request) => {
            route.fulfill({
                body:JSON.stringify(mockData),
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
        await page.click('text="LOAD ALL BOOKS"')
        //check that books are displayed
        await page.waitForSelector('text=Harry Potter');

       const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent));
       
       expect(rowData[0]).to.contains('Harry Potter');
       expect(rowData[0]).to.contains('Rowling');

       expect(rowData[1]).to.contains('C# Fundamentals');
       expect(rowData[1]).to.contains('Nakov');
    });

    it('creates book', async() => {
        //navigate to page
        await page.goto(host);
        //find form
        //fill input fields
        await page.fill('input[name=title]','Title');
        await page.fill('input[name=author]','Author');
        //click submit
       const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ]);
       
        const data = JSON.parse(request.postData());
        expect(data.title).to.equals('Title');
        expect(data.author).to.equals('Author');
    });

    it('should not submit form with empty fields', async () => {
        await page.goto(host)

        await page.fill('#createForm [name="title"]', '');
        await page.fill('#createForm [name="author"]', '');
        await page.click('text="Submit"');
    
        // Wait for alert dialog to appear and capture its message
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
          });
          await page.evaluate(() => alert('All fields are required!'));
      });

    it('edits book', async () => {

        await page.goto(host);
        //find form
        //fill input fields
        await page.fill('input[name=title]','Omg');
        await page.fill('input[name=author]','Where');
        //click submit
       const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ]);

        await page.click('text=load all books');
       

        // Click the Edit button for a book
        await page.click('tr:last-child button.editBtn');
        //wait edit form to be displayed
        await page.waitForSelector('#editForm')
        
        //input field values when edit button is clicked
        const title = await page.$eval('#editForm input[name="title"]', el => el.value)
        const author = await page.$eval('#editForm input[name="author"]',el => el.value)
        expect(title).to.equals('Omg');
        expect(author).to.equals('Where');

    
        // Fill in the form fields with new data
        await page.fill('#editForm [name="title"]', 'New Title');
        await page.fill('#editForm [name="author"]', 'New Author');
    
        // Submit the form
        await page.click('text=Save');
    
        // Wait for the success message to appear
        await page.click('text=load all books');
    
        // Verify that the book has been updated with the new data
        const bookTitle = await page.textContent('tr:last-child td:nth-child(1)');
        const bookAuthor = await page.textContent('tr:last-child td:nth-child(2)');
        expect(bookTitle).to.equals('New Title');
        expect(bookAuthor).to.equals('New Author');
    })

    it('deletes book', async () => {

        // go to this page
        await page.goto(host);

        //create new record in the table
        //find form
        //fill input fields
        await page.fill('input[name=title]','Delete this book');
        await page.fill('input[name=author]','Delete author');
        //click submit
       const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ]);


        //click btn with text load all books
        await page.click('text="LOAD ALL BOOKS"');
        //click btn delete on the last added record
        await page.click('tr:last-child button.deleteBtn');
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).to.equal("Are you sure you want to delete this book?");
            dialog.accept();
            await page.click('text="LOAD ALL BOOKS"');

            // Verify that the book has been deleted
        const bookTitle = await page.textContent('tr:last-child td:nth-child(1)');
        const bookAuthor = await page.textContent('tr:last-child td:nth-child(2)');
        expect(bookTitle).to.not.equals('Delete this book');
        expect(bookAuthor).to.not.equals('Delete author');
        });

    })
});


    
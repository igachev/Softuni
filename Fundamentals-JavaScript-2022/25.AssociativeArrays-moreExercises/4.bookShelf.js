function bookShelf(input) {
let bookShelves = {}

for(let text of input) {

    if(text.includes('->')) {
        text = text.split(' -> ')
        let shelfId = text[0]
        let shelfGenre = text[1]
        if(!bookShelves.hasOwnProperty(shelfId)) {
            bookShelves[shelfId] = [shelfGenre]
            
        }
    }
    else if(text.includes(':')) {
        text = text.split(': ')
        let bookTitle = text[0]
        let moreText = text[1].split(', ')
        let bookAuthor = moreText[0];
        let bookGenre = moreText[1];
        let keys = Object.keys(bookShelves)
        for(let key of keys) {
            if(bookShelves[key].includes(bookGenre)) {
                bookShelves[key].push({title:bookTitle,author:bookAuthor})
            }
        }
        
    }

}

let entries = Object.entries(bookShelves)
let sortByCount = entries.sort((a,b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
for(let [key,value] of sortByCount) {
    console.log(`${key} ${value[0]}: ${value.length-1}`);
    value.shift()
    let sortByName = value.sort((a,b) => a.title.localeCompare(b.title))
    for(let book of sortByName) {
        console.log(`--> ${book.title}: ${book.author}`);
    }
}
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])
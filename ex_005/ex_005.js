import booksByCategory from '../books.json' with { type: 'json' };

function countBooksInCategory(src){
    const bookCount = {}
    src.forEach(x => {bookCount[x.category] = x.books.length;});
    return bookCount;
}

const count = countBooksInCategory(booksByCategory);
let output = ""
console.log(count)
for (const element in count) output += `${element}: ${count[element]}\n`
alert(output);

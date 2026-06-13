import booksByCategory from '../books.json' with { type: 'json' };

function authors(src) {
    const newArray = []
    src.forEach(element => {
        element.books.forEach(book => {
           if(!newArray.includes(book.author)) newArray.push(book.author); 
        });
    });
    return newArray
}

const authorList = authors(booksByCategory);
console.log(authorList)
alert(authorList.join(", "));
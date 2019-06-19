// 1.
class Booklist {
    constructor(allBooks,nextBook,currentBook,lastBook) {
		this.allBooks = allBooks;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
    }
    add(newbook) {
        this.allBooks.push(newbook)
    }
    finishCurrentBook() {
        this.lastBook = this.currentBook;
        this.currentBook.read = true;
        this.currentBook = this.nextBook;
        this.readDate = Date();
        for(let i =0; i <this.allBooks.length; i++) {
            if(!this.allBooks[i].read) {
                this.lastBook = this.allBooks[i]
            }
        }
        // this.allBooks.some((e)=> {
        //     if(!e.read) {
        //     this.lastBook = e;
        //     } return true
        // })
    }
}
class Book {
    constructor(title,genre,author,read,readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

// TESTS

var book1 = new Book('book1','action','human','false')
var book2 = new Book('book2','action','human','false')
var book3 = new Book('book3','action','human','false')



var bookArr = [book1,book2,book3]



var newBookList = new Booklist(bookArr,book3,book2,book1)

newBookList.add(new Book('book4','action','human','false'))
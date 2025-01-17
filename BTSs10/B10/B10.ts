class Book2 {
    private title: string;
    private author: string;
    private quantity: number;
    constructor(title: string, author: string, quantity: number) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    
}

class Library {
    books: string[];
    constructor(books: string[]) {
        this.books = books;
    }
    addBook(book: string[]) {
        let check = false;
        this.books.forEach((item, index) =>{
            if(book.title.indexOf(item[index].title)){
                item.quantity++;
                check = true;
            }
        })
        if(!check){
            this.books.push(book);
        }
    }
}

let book1 = new Book2("Doraemon", "Fujiko F. Fujio", 1);

let book2 = new Book2("Harry Potter", "J. K Rowling", 1);

let book3 = new Book2("Harry Potter and the Chamber of Secrets", "J. K. Rowling", 1);

let book4 = new Book2("Crayon Shin-chan", "Usui Yoshito", 1);

let book5 = new Book2("Thám tử lừng danh conan", "Aoyama Gosho", 1);

let bookCase:object = [book1, book2, book3, book4, book5]

let library = new Library(bookCase)

console.log(library.books);

library.addBook(new Book2(["Doraemon", "Fujiko F. Fujio"]))

console.log(library.books);

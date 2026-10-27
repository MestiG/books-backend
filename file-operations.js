
const fs = require("fs");

// Step 1: Create one book object
const book = {
  id: 1,
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988
};

// Step 2: Save the book to book.json
fs.writeFileSync("book.json", JSON.stringify(book, null, 2));

// Step 3: Read the book back
const savedBook = JSON.parse(fs.readFileSync("book.json", "utf8"));

console.log("One book:");
console.log(
  `ID: ${savedBook.id} | Title: ${savedBook.title} | Author: ${savedBook.author} | Year: ${savedBook.year}`
);

// Step 4: Create an array of six books
const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Animal Farm", author: "George Orwell", year: 1945 },
  { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { id: 6, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// Step 5: Save the array to books.json
fs.writeFileSync("books.json", JSON.stringify(books, null, 2));

// Step 6: Read the array back
const savedBooks = JSON.parse(fs.readFileSync("books.json", "utf8"));

console.log(`\nTotal books: ${savedBooks.length}`);
savedBooks.forEach((book) => {
  console.log(
    `ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year}`
  );
});

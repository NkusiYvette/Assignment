let books = [
    {
      title: 'Speaking JavaScript',
      author: 'Axel Rauschmayer',
      pages: 460
    },
    {
      title: 'Programming JavaScript Applications',
      author: 'Eric Elliott',
      pages: 254
    },
    {
      title: 'Understanding ECMAScript 6',
      author: 'Nicholas C. Zakas',
      pages: 352
    }
  ];
  //displaying information about each book
for (let i = 0; i < books.length; i++) {
  console.log(`Book ${i + 1}:`);
  console.log(`Title: ${books[i].title}`);
  console.log(`Author: ${books[i].author}`);
  console.log(`Pages: ${books[i].pages}`);
}
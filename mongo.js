db.createCollection("books");

db.books.insertMany([
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Dystopian",
    ISBN: "9780451524935"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedYear: 1932,
    genre: "Dystopian",
    ISBN: "9780060850524"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Fiction",
    ISBN: "9780743273565"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    genre: "Fiction",
    ISBN: "9780061120084"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    genre: "Fiction",
    ISBN: "9780316769488"
  }
]);


db.books.find();

db.books.find({ author: "George Orwell" });

db.books.find({ publishedYear: { $gt: 2000 } });

db.books.updateOne(
  { ISBN: "9780451524935" },
  { $set: { publishedYear: 2000 } }
);

db.books.updateMany(
  {},
  { $set: { rating: 4.5 } }
);

db.books.deleteOne({ ISBN: "9780451524935" });

db.books.deleteMany({ genre: "Fiction" });


db.createCollection("users");
db.users.insertOne({
  username: "john_doe",
  password: "hashed_password_here",
  email: "john.doe@example.com",
  role: "customer",
  createdAt: new Date()
});

db.createCollection("orders");
db.orders.insertOne({
  userId: ObjectId("user_id_here"), 
  items: [
    { productId: ObjectId("product_id_here"), quantity: 1, price: 20 }
  ],
  totalAmount: 20,
  status: "pending",
  createdAt: new Date(),
  updatedAt: new Date()
});

db.createCollection("products");
db.products.insertOne({
  name: "Laptop",
  description: "A high-end gaming laptop.",
  price: 1200,
  stock: 50,
  category: "electronics",
  rating: 4.7,
  createdAt: new Date()
});

db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
]);

db.books.aggregate([
  { $group: { _id: null, avgPublishedYear: { $avg: "$publishedYear" } } }
]);

db.books.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 1 }
]);

db.books.createIndex({ author: 1 });


db.books.find();

db.books.find({ rating: { $exists: true } });

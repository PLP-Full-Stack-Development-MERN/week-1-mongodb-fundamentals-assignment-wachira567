Week 1: MongoDB Essentials Assignment
Objective
This project is designed to implement MongoDB concepts covered during the week. It involves working with databases, collections, documents, CRUD operations, data modeling, aggregation, and indexing. The exercises aim to enhance skills in database management and optimization.

Table of Contents
Setting Up MongoDB
Creating Databases and Collections
Inserting Data
Retrieving Data
Updating Data
Deleting Data
Data Modeling Exercise
Aggregation Framework
Indexing
Testing
Submission Guidelines
Setting Up MongoDB
To get started with MongoDB, ensure it is correctly installed on your local machine or utilize MongoDB Atlas to set up a free cloud cluster.

Steps:
Install MongoDB locally or use MongoDB Atlas for a cloud-based solution.
Start the MongoDB server locally or connect to your MongoDB Atlas cluster.
Confirm the installation by executing the following command:
mongo --version

Creating Databases and Collections
Create a new database named library and a collection called books.
Example:
use library
db.createCollection("books")

Inserting Data
Insert a minimum of five book records into the books collection, each containing fields such as title, author, publishedYear, genre, and ISBN.
Example Insert:

db.books.insertMany([
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publishedYear: 1985,
    genre: "Dystopian",
    ISBN: "9780385490818"
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publishedYear: 1953,
    genre: "Dystopian",
    ISBN: "9781451673319"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
    genre: "Classic",
    ISBN: "9780141439518"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    genre: "Fiction",
    ISBN: "9780316769488"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    publishedYear: 1851,
    genre: "Classic",
    ISBN: "9781503280786"
  }
])

Retrieving Data
Execute queries to fetch data from the books collection.
Example Queries:

# Retrieve all books
db.books.find()

# Retrieve books by a specific author
db.books.find({ author: "Margaret Atwood" })

# Retrieve books published after the year 2000
db.books.find({ publishedYear: { $gt: 2000 } })

Updating Data
Perform updates to modify existing records in the collection.
Example Updates:
# Update the publishedYear for a specific book
db.books.updateOne(
  { ISBN: "9780385490818" },
  { $set: { publishedYear: 2000 } }
)

# Add a 'rating' field to all books
db.books.updateMany(
  {},
  { $set: { rating: 4.5 } }
)

Data Modeling Exercise
Develop a data model for an e-commerce platform that includes users, orders, and products collections.
Example Data Model:

Users Collection
db.createCollection("users")
db.users.insertOne({
  username: "jane_doe",
  password: "hashed_password_here",
  email: "jane.doe@example.com",
  role: "customer",
  createdAt: new Date()
})

Orders Collection
db.createCollection("orders")
db.orders.insertOne({
  userId: ObjectId("user_id_here"), 
  items: [{ productId: ObjectId("product_id_here"), quantity: 1, price: 20 }],
  totalAmount: 20,
  status: "pending",
  createdAt: new Date(),
  updatedAt: new Date()
})

Products Collection
db.createCollection("products")
db.products.insertOne({
  name: "Gaming Laptop",
  description : "A high-performance gaming laptop.",
  price: 1200,
  stock: 50,
  category: "electronics",
  rating: 4.7,
  createdAt: new Date()
})

Aggregation Framework
Utilize the aggregation framework to perform operations on the data.
Example Aggregations:
# Find the total number of books per genre
db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
])

# Calculate the average published year of all books
db.books.aggregate([
  { $group: { _id: null, avgPublishedYear: { $avg: "$publishedYear" } } }
])

# Identify the highest-rated book
db.books.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 1 }
])

Indexing
Create an index on the author field to enhance query performance.
Example:

db.books.createIndex({ author: 1 })


Advantages of Indexing:
Indexing significantly improves query performance, especially when dealing with large datasets.
It accelerates searches, sorting, and filtering based on indexed fields.
Testing
Validate the inserted and updated records using queries in MongoDB Shell or Compass.
Example Test Queries:
# Verify inserted records
db.books.find()

# Ensure 'rating' field was added to all books
db.books.find({ rating: { $exists: true } })






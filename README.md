# Movie API

A RESTful Movie API built using **Node.js, Express.js, and MongoDB**.
This API provides complete CRUD operations for managing movie records.

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* Postman

## 📁 Project Features

The API supports the following operations:

* Create a new movie
* Get all movies
* Get a movie by ID
* Update movie details
* Delete a movie
* MongoDB database integration
* RESTful API architecture

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the Project

```bash
cd Movienode
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/movieDB
```

### 5. Start the Server

For development:

```bash
npm run dev
```

Or:

```bash
node server.js
```

The server will run at:

```text
http://localhost:5000
```

---

# 📌 API Endpoints

Base URL:

```text
http://localhost:5000/api/movies
```

## 1. Create Movie

**POST**

```text
/api/movies
```

### Request Body

```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "genre": "Science Fiction",
  "releaseYear": 2014,
  "rating": 8.7,
  "language": "English",
  "description": "A team of explorers travel through a wormhole in space."
}
```

---

## 2. Get All Movies

**GET**

```text
/api/movies
```

Returns all movies stored in the database.

---

## 3. Get Movie By ID

**GET**

```text
/api/movies/:id
```

Example:

```text
/api/movies/68db123456789abcdef12345
```

Returns a specific movie using its MongoDB ID.

---

## 4. Update Movie

**PUT**

```text
/api/movies/:id
```

### Request Body

```json
{
  "rating": 9.0,
  "description": "Updated movie description"
}
```

Updates the specified movie.

---

## 5. Delete Movie

**DELETE**

```text
/api/movies/:id
```

Example:

```text
/api/movies/68db123456789abcdef12345
```

Deletes the selected movie from the database.

---

# 🧪 Postman Testing

The API was tested using **Postman**.

The following operations were tested:

1. Create Movie
2. Get All Movies
3. Get Movie By ID
4. Update Movie
5. Get Movie By ID to verify the update
6. Delete Movie
7. Get Movie By ID to verify deletion
8. Validation and error cases

Make sure the Node.js server and MongoDB are running before sending requests from Postman.

---

# 🎥 API Testing Video

A video recording demonstrating the project setup and Postman API testing is available here:

**Video Recording:**
[https://drive.google.com/file/d/1-Wa9L3p__rugKBZ_otXsaxhj_2Dgdckb/view?usp=sharing]

The video demonstrates:

* Starting the Node.js server
* MongoDB connection
* Creating a movie
* Fetching movies
* Fetching a movie by ID
* Updating a movie
* Deleting a movie
* Testing API responses in Postman
* Testing error/validation cases

---

# 📂 Project Structure

text
Movienode/
│
├── controllers/
│   └── movieController.js
│
├── models/
│   └── movieModel.js
│
├── routes/
│   └── movieRoutes.js
│
├── .env
├── package.json
├── package-lock.json
└── server.js
```

---

# 👨‍💻 Author

**Sablequill**

Movie REST API developed using Node.js, Express.js, and MongoDB.

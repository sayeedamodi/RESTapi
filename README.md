

# API Routes Documentation

This project provides a simple API with CRUD operations using Express and Mongoose. Below is a description of the routes for managing `articles` in a MongoDB database, following RESTful standards.

## Table of Contents

- [Installation](#installation)
- [API Routes](#api-routes)
  - [GET](#get)
  - [POST](#post)
  - [PUT](#put)
  - [PATCH](#patch)
  - [DELETE](#delete)
- [Using Postman](#using-postman)
  - [Setup Postman](#setup-postman)
  - [Example Requests](#example-requests)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Install the dependencies.
   ```bash
   npm install
   ```
3. Start the server.
   ```bash
   npm start
   ```

## API Routes

### `GET /articles/:articleTitle`

Fetches an article based on the provided `articleTitle`.

- **Example Request:**
  ```bash
  GET /articles/ExampleTitle
  ```

- **Response:**
  - Status: `200 OK`
  - Body: The article with the specified title.
  
  ```json
  {
    "title": "ExampleTitle",
    "content": "This is an example content."
  }
  ```

- **Error Response:**
  - Status: `404 Not Found` if no article is found.

---

### `POST /articles`

Creates a new article.

- **Example Request:**
  ```bash
  POST /articles
  ```
  - Body (Use `x-www-form-urlencoded` in Postman):
    | Key     | Value                    |
    |---------|--------------------------|
    | title   | NewArticle                |
    | content | Content of the new article|

- **Response:**
  - Status: `201 Created`
  - Body: Message confirming the article has been created.

---

### `PUT /articles/:articleTitle`

Completely replaces an article's `title` and `content`.

- **Example Request:**
  ```bash
  PUT /articles/ExampleTitle
  ```
  - Body (Use `x-www-form-urlencoded` in Postman):
    | Key     | Value                    |
    |---------|--------------------------|
    | title   | UpdatedTitle              |
    | content | Updated content for the article|

- **Response:**
  - Status: `200 OK` if the article was successfully updated.
  - Status: `404 Not Found` if no article with the specified title was found.

> **Note:** This method replaces the entire document, so make sure to send both `title` and `content`.

---

### `PATCH /articles/:articleTitle`

Updates specific fields (`title` or `content`) of an article without replacing the entire document.

- **Example Request:**
  ```bash
  PATCH /articles/ExampleTitle
  ```
  - Body (Use `x-www-form-urlencoded` in Postman):
    | Key     | Value                        |
    |---------|------------------------------|
    | content | Updated content only          |

- **Response:**
  - Status: `200 OK` if the article was successfully updated.
  - Status: `404 Not Found` if no article with the specified title was found.

---

### `DELETE /articles/:articleTitle`

Deletes the article with the specified title.

- **Example Request:**
  ```bash
  DELETE /articles/ExampleTitle
  ```

- **Response:**
  - Status: `200 OK` with a message confirming deletion.
  - Status: `404 Not Found` if no article with the specified title was found.

---

## Using Postman

Postman is a great tool for testing APIs. Follow these steps to test the routes using Postman:

### Setup Postman

1. **Download Postman**: Install Postman from [here](https://www.postman.com/downloads/).
2. **Launch Postman** and create a new request.
3. **Set up the request method** (GET, POST, PUT, PATCH, or DELETE).
4. **Set the URL**: Enter the appropriate URL for each route (e.g., `http://localhost:3000/articles/ExampleTitle`).
5. **Use x-www-form-urlencoded** for requests that include a body (POST, PUT, PATCH):
   - For POST, PUT, and PATCH requests, switch to the `Body` tab in Postman.
   - Select `x-www-form-urlencoded` and add the keys (`title`, `content`) with corresponding values.
6. **Send the request**.

### Example Requests

#### `GET /articles/:articleTitle`
- **Method**: GET
- **URL**: `http://localhost:3000/articles/ExampleTitle`
- **Response**: You will get the article data for the title provided in the URL.

#### `POST /articles`
- **Method**: POST
- **URL**: `http://localhost:3000/articles`
- **Body**: Select `x-www-form-urlencoded` and add:
  | Key     | Value                    |
  |---------|--------------------------|
  | title   | NewArticle                |
  | content | Content of the new article|

- **Response**: You will receive confirmation that the article was created.

#### `PUT /articles/:articleTitle`
- **Method**: PUT
- **URL**: `http://localhost:3000/articles/ExampleTitle`
- **Body**: Select `x-www-form-urlencoded` and add:
  | Key     | Value                    |
  |---------|--------------------------|
  | title   | UpdatedTitle              |
  | content | Updated content           |

- **Response**: You will receive confirmation that the article was successfully updated.

#### `PATCH /articles/:articleTitle`
- **Method**: PATCH
- **URL**: `http://localhost:3000/articles/ExampleTitle`
- **Body**: Select `x-www-form-urlencoded` and add:
  | Key     | Value                    |
  |---------|--------------------------|
  | content | Updated content only      |

- **Response**: You will receive confirmation that the article was partially updated.

#### `DELETE /articles/:articleTitle`
- **Method**: DELETE
- **URL**: `http://localhost:3000/articles/ExampleTitle`
- **Response**: You will receive confirmation that the article was deleted.

---

## Contributing

If you'd like to contribute to this project, feel free to open a pull request. Please make sure your code follows standard practices and is well-documented.



### Key Updates:
- **x-www-form-urlencoded**: Added instructions on how to use this type of request body for `POST`, `PUT`, and `PATCH` in Postman.
- **Example Requests**: Included examples using `x-www-form-urlencoded` with key-value pairs in the body. 

# Mockly

A modern mock API platform built for developers. Mockly provides realistic fake datasets, interactive API documentation, and a clean developer experience for building, testing, and prototyping applications.

## Features

* Realistic mock REST APIs
* Interactive API documentation
* Multiple datasets (Users, Products, Posts, Comments, Companies, and more)
* Pagination
* Filtering
* Sorting
* Search
* JSON responses
* API Playground
* Download datasets as JSON
* Dark and light theme
* Responsive interface

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* React

### Backend

* Express.js
* Node.js

## Project Structure

```text
mockly/
├── client/                 # Next.js application
├── server/                 # Express API
│   ├── data/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── app.js
└── README.md
```

## Available Endpoints

```http
GET /api/users
GET /api/products
GET /api/posts
GET /api/comments
GET /api/companies
GET /api/categories
```

### Query Parameters

```text
?page=1
?limit=10
?search=laptop
?sort=price
?order=desc
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/mockly.git
cd mockly
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Run the development servers

Frontend

```bash
npm run dev
```

Backend

```bash
npm run dev
```

## Contributing

Contributions, issues, and feature requests are welcome. Please open an issue before submitting a pull request for significant changes.

## License

This project is licensed under the MIT License.

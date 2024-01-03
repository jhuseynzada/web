# Project Title

This project is an assignment from web an mobile I course. In here we have home pages and contact pages. Main goal of this website is to show a list of flash cards, add, remove and update from server. It has also other functionalities like sharing and filtering. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- Node.js
- npm (Node Package Manager)

### Installing

A step by step series of examples that tell you how to get a development environment running.

First, clone the repository:

```bash
git clone https://github.com/jhuseynzada/webmobileas3
cd webmobileas3
```

Install the dependencies:

```bash
npm install
```

### Running the Application

To run the application, you will need to start both the React frontend and the `json-server` backend.

**Start the React App:**

```bash
npm start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Start the json-server:**

```bash
npm run server
```

This starts the `json-server` on [http://localhost:8000](http://localhost:8000). `json-server` provides a full fake REST API for your application. 

### json-server

This project uses `json-server` as a mock backend. It allows you to simulate a real backend API with minimal setup. The data served by `json-server` is based on a JSON file. When you perform API requests (GET, POST, PUT, DELETE), `json-server` lets you interact with the JSON file as if it were a real API.

#### Features of json-server:

- Full fake REST API with zero coding.
- Custom routes for simulating various API endpoints.
- Ability to simulate CRUD operations on the data.

**json-server Data File**

The data for `json-server` is stored in a file, typically named `db.json`, located at the root of the project. This file is used to simulate the database for your application.

### Endpoints

The following endpoints are available for CRUD operations:

- `GET /flashs`: Retrieves all cards.
- `POST /flashs`: Creates a new card.
- `GET /flashs/:id`: Retrieves a card by its ID.
- `PUT /flashs/:id`: Updates a card by its ID.
- `DELETE /flashs/:id`: Deletes a card by its ID.

### Card Data Structure

Each card has the following structure:

```json
{
  "id": 1,
  "question": "What is React?",
  "answer": "A JavaScript library for building user interfaces",
  "status": "Learned",
  "createdAt": "2021-01-01T00:00:00Z",
  "updatedAt": "2021-01-02T00:00:00Z"
}
```

#### Fields:

- `id`: Unique identifier for the card (integer).
- `question`: The question or prompt of the flashcard (string).
- `answer`: The answer or information related to the question (string).
- `status`: The learning status of the card (e.g., 'Learned', 'Want to Learn', 'Noted') (string).
- `createdAt`: The creation date of the card (ISO 8601 format string).
- `updatedAt`: The last update date of the card (ISO 8601 format string).

## Built With

- [React](https://reactjs.org/) - The web framework used
- [json-server](https://github.com/typicode/json-server) - Full fake REST API


## Authors

- **Jamil Huseynzade** - *Initial work* - [Jhuseynzada](https://github.com/jhuseynzada)


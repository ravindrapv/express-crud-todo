# Todo Express CRUD App with Sequelize, Yup, and OMR

A Todo application with CRUD operations using Node.js, Express, Sequelize (SQL ORM), Yup (validation), and OMR (Optical Mark Recognition).

## Features

- **Create:** Add new tasks to the todo list.
- **Read:** View the list of existing tasks.
- **Update:** Modify task details or mark them as completed.
- **Delete:** Remove tasks from the todo list.
- **Validation:** Input validation using Yup.

## Technologies

- Node.js
- Express.js
- Sequelize (SQL ORM)
- Yup (Validation)
- OMR (Optical Mark Recognition - replace with your implementation)

## Prerequisites

- Node.js and npm
- SQL database (e.g., PostgreSQL, MySQL) and Sequelize-compatible database

## Getting Started

1. **Clone the repository:**

   ```bash
  <https://github.com/ravindrapv/express-crud-todo.git>


2. **Install dependencies:**

   ```bash
   npm install
   ```
Configure environment variables:

3. **Create a .env file in the root directory with the following content**

env
```
PORT=4000
```

# Todo App API Endpoints

The following API endpoints are available for managing tasks in the Todo app:

## Get All Tasks

### Endpoint

- **GET /todos**

### Description

Get a list of all tasks.

### Response

```json
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description for Task 1",
    "done": false
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description for Task 2",
    "done": true
  },
  // ... additional tasks
]
```

### TODO CRUD API Endpoints

| Endpoint | HTTP Method | Description |
|---|---|---|
| `/todos` | `GET` | Get all TODOs |
| `/todos/:id` | `GET` | Get a TODO by ID |
| `/todos` | `POST` | Create a new TODO |
| `/todos/:id` | `PUT` | Update a TODO |
| `/todos/:id` | `DELETE` | Delete a TODO |

**Example usage:**


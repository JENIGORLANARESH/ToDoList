# To-Do List REST API

## Description
A simple REST API for managing a to-do list, built with Node.js and Express. Tasks are stored in a JSON file for simplicity.

## Features
- Create a task with title, description, and a default status of "pending."
- Fetch all tasks or a specific task by ID.
- Update the status of a task.
- Delete a task by ID.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A terminal or command prompt.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-link>


2. Navigate to the project folder:
    cd todo-app

3. Install dependencies
    npm install

## Running the Application

1. Start the server
    node app.js

2. The server will run on http://localhost:3000.


## API Endpoints

1. POST /tasks: Create a new task.
2. GET /tasks: Fetch all tasks.
3. GET /tasks/:id: Fetch a task by ID.
4. PUT /tasks/:id: Update the status of a task.
5. DELETE /tasks/:id: Delete a task by ID.


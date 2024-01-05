# User Posts and Comments API

This Node.js application interfaces with the `jsonplaceholder.typicode.com` API to retrieve posts and comments for a given user. It's built using Express.js and Axios.

## Prerequisites

- Node.js version 12.22.9 or later.
- npm version 8.5.1 or later.

## Installation and Running the App

To install and run the User Posts and Comments API, follow these steps:

1. **Clone the repository**:

2. **Install the dependencies**:
Run the following command in your terminal to install the necessary packages:

    `npm install`

3. **Start the server**:
Start the server by running:

    `node app.js`


This will start the server on port 3000. You should see a message in the terminal indicating that the server is running: "Server running on port 3000".

## Usage

With the server running, you can make requests to the API. The API provides the following endpoint:

- `GET /users/:userId/posts`: Fetches all posts created by a user with the specified `userId`, along with up to 5 comments for each post.



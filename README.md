# E-commerce Shopper Website

An e-commerce platform built with the MERN stack, featuring a frontend for customers, a backend for managing data, and an admin panel for managing the website content.

## Features

- User authentication and authorization
- Product listing 
- Shopping cart and checkout process
- Admin panel for managing products and add products

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies](#technologies)


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Poojabhardwaj98766/Ecommerce-SHOPPER-website.git
    cd Ecommerce-SHOPPER-website
    ```

2. Install dependencies for the frontend, backend, and admin panel:

    - **Frontend**:
        ```sh
        cd frontend
        cd myapp
        npm install
        ```

    - **Backend**:
        ```sh
        cd ../backend
        npm install
        ```

    - **Admin Panel**:
        ```sh
        cd ../admin
        npm install
        ```

3. Set up environment variables for each part of the application. Create `.env` files in the `frontend`, `backend`, and `admin` directories. Here is an example for the backend:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongo_database_uri
    ```

## Usage

1. Start the backend server:
    ```sh
    cd backend
    npm run dev
    ```

2. Start the frontend server:
    ```sh
    cd frontend
    cd myapp
    npm start
    ```

3. Start the admin panel:
    ```sh
    cd admin
    npm start
    ```

Access the application at `http://localhost:3000` for the frontend and `http://localhost:3001` for the admin panel.

## Screenshots

### Home Page
![image](https://github.com/Poojabhardwaj98766/Ecommerce-SHOPPER-website/assets/104709618/b0395e60-9c61-461f-9187-38cc230ab70e)

### Login Page
![image](https://github.com/Poojabhardwaj98766/Ecommerce-SHOPPER-website/assets/104709618/0e39eeda-eff2-4433-8bd2-42193d696ae0)

### Product Page
![image](https://github.com/Poojabhardwaj98766/Ecommerce-SHOPPER-website/assets/104709618/47b34976-0d02-4ecf-95b0-ed0a8dc69270)


### Admin Panel
![image](https://github.com/Poojabhardwaj98766/Ecommerce-SHOPPER-website/assets/104709618/85669866-bb8c-40ff-834d-41e8d8b14072)


## Technologies

- **Frontend**: React, Redux, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Admin Panel**: React, Redux




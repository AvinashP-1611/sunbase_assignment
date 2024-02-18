### Customer Management System

This is a Customer Management System (CMS) application designed to perform CRUD (Create, Read, Update, Delete) operations on customer records.
It provides RESTful APIs for managing customer data. The backend is developed using Spring Boot, MySQL is used as the database, and JWT authentication is implemented for securing the APIs. The frontend is built using HTML, CSS, and JavaScript.

## Features

- **Create a Customer**: API to add a new customer record to the database.
- **Update a Customer**: API to update an existing customer's information in the database.
- **Get List of Customers**: API with pagination, sorting, and searching functionalities to retrieve a list of customers from the database.
- **Get a Single Customer**: API to retrieve details of a single customer based on their ID.
- **Delete a Customer**: API to delete a customer record from the database.
- **JWT Authentication**: Implements JSON Web Token (JWT) authentication for securing the APIs.

## Technologies Used

- **Backend**:
  - Spring Boot
  - MySQL
  - JWT Authentication

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

## Setup Instructions

1. **Backend Setup**:
   - Clone the repository.
   - Configure MySQL database settings in `application.properties` file.
   - Run the Spring Boot application.
   
2. **Frontend Setup**:
   - Copy the HTML, CSS, and JavaScript files to your web server directory or use a local development server.
   
3. **Authentication**:
   - Use JWT tokens to authenticate API requests. 
   - Generate JWT tokens for authentication and include them in the request headers.

## APIs Documentation

- **Create a Customer**:
  - Endpoint: `/customer/addCustomer`
  - Method: POST
  - Request Body: JSON object representing the customer details.
  

- **Update a Customer**:
  - Endpoint: `/customer/updateCustomer/{customerId}`
  - Method: PUT
  - Request Body: JSON object representing the updated customer details.

- **Get List of Customers**:
  - Endpoint: `/customer/getCustomer`
  - Method: GET
  - Parameters: Searching.

- **Get a Single Customer**:
  - Endpoint: `/customer/getByQuery/{customerId}`
  - Method: GET

 - **Delete a Customer**:
  - Endpoint: `/customer/deleteCustomer/{customerId}`
  - Method: DELETE



### Output

# Login Page

![loginPage](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/f4c9dace-eac1-42c1-91a9-ddc14c5fda06)

# Login Credentials

![LoginCredentials](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/8e389571-510e-48eb-a021-5cbc26ff792b)

# Welcome Page

![successfulLogin](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/2fde170e-5435-4cfd-a00b-b31512446b41)


# Customer List

![Customerlist](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/b9beec8c-3290-4460-891d-377842931771)


# Add Customer

![AddCustomer](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/84fd67fb-83c0-4ff9-aff1-bcff730e2816)


# Added Successfully

![AddedSuccessfully](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/3c85b843-9c79-4308-b761-2275ea784227)


# Search By Query 

![Search](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/7cefc59c-6fba-4330-88d2-12abc3c0efc3)


# Search Result

![searchResult](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/2d61c1cc-13d9-49ef-af34-7a199b785ae1)


# Delete and particular filed

![delete](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/1513b424-2849-4d66-9e72-874d9e15b439)

# Delete Result

![deleteResult](https://github.com/AvinashP-1611/sunbase_assignment/assets/134164909/46d78e72-db25-4aa7-a805-0041a673cb08)

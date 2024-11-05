Name of Project: Urban Grocers API Testing Project

Project Overview:
This project is designed to test the Urban Grocers API by automating GET, POST, PUT, and DELETE 
requests using JavaScript. The goal is to validate the API responses to ensure they return the 
correct status codes and data structures. This project demonstrates skills in API testing and automation.
The primary purpose of this project is to practice API automation testing by:
Verifying API response status codes.
Validating the structure and content of the response body.
Building a test suite that can be reused and scaled as the API evolves.

Technologies Used: 
JavaScript-Programming language for writing the test scripts.
Node.js-JavaScript runtime environment to execute tests on the server.
npm-Package manager to install and manage project dependencies.
Git/GitHub-Version control system for managing project code and collaborating.
apiDoc-For checking API endpoints and documentation.

Setup Instructions:
Step 1: Clone the Repository
Open your terminal.
Clone the project repository from GitHub:
git clone https://github.com/your-username/hm07-qa-us.git
Change into the project directory:
cd hm07-qa-us

Step 2: Install Project Dependencies
In your project directory, install the necessary dependencies using npm:
npm install

Step 3: Configure the API URL
-In the config.js file, replace the placeholder URL with the API URL provided by the Urban Grocers server.
-This URL should be updated each time the server is relaunched to ensure the tests point to the correct API endpoint.

Step 4: Run the Server
-Launch the Urban Grocers server to get the API URL.
-Copy the server URL and update it in config.js as explained in Step 3.

Project Structure
-Tests Folder: Contains individual test files for each HTTP request type (GET, POST, PUT, DELETE).
-config.js: Stores the base API URL for easy configuration and reuse across tests.

Project Tasks
The project is divided into five main tasks:

-GET Request Tests:
Selected an endpoint from Urban Grocers API documentation and wrote tests to:
Check if the response status code is correct.
Verify that the response body contains the expected data

-POST Request Tests:
Chose an endpoint for posting data and wrote tests to:
Confirm the response status code.
Check if the response body contains the expected data.

-PUT Request Tests:
Selected an endpoint for updating data and wrote tests to:
Verify that the response status code is correct.
Confirm that the response body reflects the expected update.

-DELETE Request Tests:
Chose an endpoint for deleting data and wrote tests to:
Validate the response status code.
Ensure the response body confirms the successful deletion.


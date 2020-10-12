# Node.Js-Basics
*Restful Api With Node.js Express &amp; MongoDB Project*

The package.json file was created by: $npm init
To start the project, you need the required modules that are not included in this project. Use $ npm -i <dependency-name> and download the dependencies found in package.json.

The project will start a server on port 3000, and using mLab I have created a non-relational database. The connection to database is made by moongose.connect(...),
where DB_CONNECTION is a key string which holds the username and password to connect to the database created in mLab. DB_CONNECTION is defined in .env file, which is hidden for the public, so you will have to create your own database and define DB_CONNECTION. .

.env file hides the connection string so that the public will not have the chance to view it. More details : $ npm -i dotenv

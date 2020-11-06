npm init     //Create package.json dependecies
npm install express nodemon mongoose //installing dependecies
npm start // starting the app
npm install dotenv // dependecie for secret file

insert "start": "nodemon app.js" in scrtipts in package.json so u can start the app

//Db string for mongodb, user, password, db name
DB_CONNECT=mongodb+srv://Riddick:testiranje@cluster0.fgqyi.mongodb.net/demo2?retryWrites=true&w=majority

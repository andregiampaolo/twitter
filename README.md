# Twitter

This project was based on th omnistack rocketseat week.

# Dependencies
- Node
- NPM/YARN
- Express
- Mongoose
- Nodemon
- Socket io
- Cors

# To install dependences
- ```yarn add express```
- ```yarn add mongoose```
- ```yarn add nodemon -D``` (-D only development enviroment)
- ```yarn add socket.io```
- ```yarn add cors```

# Config database 

## Create mongoDB atlas account
Create account into ~~mlabs~~ [mongoDb atlas] (https://www.mongodb.com/cloud/atlas), delivery a free mongodb instance to use in our project

## Database Config
To config database you need open src/index.js an replace the STRING_CONNECTION on line:
```mongoose.connect(STRING_CONNECTION, { useNewUrlParser: true});```
STRING_CONNECTION seems like ```'mongodb+srv://<username>:<password>@<endpoint>'```


# To start application execute:
Go to the project folder and run
```node src/index.js```
or
```yarn start``` (to start server with nodemon)


# TODO
    Remove cors for security in src/index.js. 
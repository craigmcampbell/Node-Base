# Node-Base

## This is a work in progress

A base Node application with my usual setup to use as a project template

Packages
"dependencies": {
"axios": "^0.21.0",
"body-parser": "^1.19.0",
"chalk": "4.1.0",
"connect-mongo": "^3.2.0",
"cors": "2.8.5",
"debug": "^4.1.1",
"express": "4.17.1",
"express-session": "^1.17.1",
"helmet": "^4.2.0",
"jsonwebtoken": "^8.5.1",
"mongodb": "^3.5.9",
"mongoose": "^5.10.11",
"morgan": "^1.10.0",
"nodemon": "^2.0.4",
"ts-mongoose": "^0.0.21"
},
"devDependencies": {
"@types/cors": "^2.8.8",
"@types/debug": "^4.1.5",
"@types/express": "^4.17.9",
"@types/express-session": "^1.17.1",
"@types/jsonwebtoken": "^8.5.0",
"@types/mongoose": "^5.10.0",
"@types/morgan": "^1.9.2",
"@types/node": "^14.14.7",
"semistandard": "^14.2.3",
"ts-node": "^9.0.0",
"typescript": "^4.0.5"
},

Proc file

Prettier

```
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

Structure
App
Routes
Controllers

Helpers
Axios
JSON API
https://jsonapi.org/

```
{
    data: { },
    errors: [
        status: '',
        title: '',
        detail: '',
        source: {
            pointer: '',
            parameter: ''
        }
    ]
}
```

Custom Middleware
Authorization check

Store Sessions in Mongo

```
const MongoStore = connectMongo(session);

app.use(session({
    secret: 'COVID',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
```

Mongoose Setup

```
mongoose.connection
    .on('connected', function () {
        debug(chalk.blue('Connected', process.env.MONGODB_URI));
    })
    .on('error', function (err) {
        debug(chalk.red('Error', process.env.MONGODB_URI));
        if (err) {
            sentry.captureMessage(JSON.stringify(err));
            debug(chalk.red(err));
        }
    })
    .on('disconnected', function () {
        debug(chalk.blue('\nDisconnected', process.env.MONGODB_URI));
    })
    .on('open', function () {
        debug(chalk.blue('Opened', process.env.MONGODB_URI));

        app.listen(port, () => {
        debug(`listening on port ${chalk.green(port)}`);
    });
});

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
} else {
    debug(chalk.red('Error mongodb://.env'));
    debug(chalk.red('Error http://.env'));
}
```

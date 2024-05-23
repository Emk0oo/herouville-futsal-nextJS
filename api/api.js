const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/article', require('./routes/article.route.js'));

app.use('/auth', require('./routes/auth.route.js'));

// app.use('/user', require('./routes/user.route.js'));

// app.use('/player', require('./routes/player.route.js'));

// app.use('/calendar', require('./routes/calendar.route.js'));
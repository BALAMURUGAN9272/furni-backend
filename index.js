const app = require('./app')
const config = require('./config')

app.listen(config.PORT,() => {
    console.log('server is running on port 3002')
})
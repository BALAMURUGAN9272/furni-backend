require('dotenv').config()

const mongodb_uri = process.env.mongodb_uri;
const PORT = process.env.PORT
const secret=process.env.secret
module.exports ={
    secret,
    mongodb_uri,
    PORT
}
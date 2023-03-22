const {MongoClient} = require("mongodb")
require("dotenv").config({ path: ".env" })

const connectionURI = process.env.connectionURI
let dbConnection

module.exports = {
    connectToDB:(cb) => {
        MongoClient.connect(connectionURI)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch((error) => {
            console.error(error)
            return cb()
        })
    },

    getDB: () => dbConnection
}
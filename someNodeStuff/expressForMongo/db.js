const {MongoClient} = require("mongodb")
const {connectionURI} = require("./confidential")
let dbConnection

module.exports = {
    connectToDB:(cb) => {
        //console.log(connectionURI)
        MongoClient.connect(connectionURI)
        .then((client) => {
            dbConnection = client.db("Library")
            return cb()
        })
        .catch((error) => {
            console.error(error)
            return cb()
        })
    },

    getDB: () => dbConnection
}
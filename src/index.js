//
// const MongoClient = require('mongodb').MongoClient;
//
// console.log("1. Starting MongoDB Server test....");
//
// const uri = "mongodb+srv://test:123@swcluster0.lfxoa.mongodb.net/test?retryWrites=true&w=majority";
// console.log("2. Initialized MongoDB URI.");
//
// const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
// console.log("3. Init MongoClient Object.");
//
//
// client.connect(err => {
//   console.log("Waiting on connection...");
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("Connected. Perform Actions on the collection object.");
//   client.close();
// });


const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    console.log(" 1 -- > Starting main function. init MongoDB URI");
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    const uri = "mongodb+srv://test:123@swcluster0.lfxoa.mongodb.net/test?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
     console.log(" 1 -- > init MongoDB client");
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

    try {
       console.log(" 3 -- > await connection...");

        // Connect to the MongoDB cluster
        await client.connect();
        console.log(" 4 -- > connected! list database...");

        // Make the appropriate DB calls
        await listDatabases(client);
        console.log(" 5 -- > Finished listing database...");

    } catch (e) {
      console.log(" 6 -- > error connecting...");
        console.error(e);
    } finally {
      console.log(" 7 -- > closing connection...");

        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


const MongoClient = require('mongodb').MongoClient;

console.log("1. Starting MongoDB Server test....");

const uri = "mongodb+srv://test:123@swcluster0.lfxoa.mongodb.net/test?retryWrites=true&w=majority";
console.log("2. Initialized MongoDB URI.");

const client = new MongoClient(uri, { useNewUrlParser: true });
console.log("3. Init MongoClient Object.");


client.connect(err => {
  console.log("Waiting on connection...");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected. Perform Actions on the collection object.");
  client.close();
});

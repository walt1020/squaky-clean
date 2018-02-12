const mongoose = require("mongoose");
const db = require("./models");


mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/squeakyCleanDb"
); 


const customerSeed = [

{
	firstName: "Ryan",
	lastName: "Walters",
	phone: "860-508-4432",
	emailAddress: "NobleBomba@gmail.com",
	homeAddress: "110 S. Roberson St., Chapel Hill, NC 27516"
},

{
	firstName: "John",
	lastName: "Smith",
	phone: "123-456-5678",
	emailAddress: "johnsmith@gmail.com",
	homeAddress: "123 South Street, Avon, CT 06001"
},

{
	firstName: "Harry",
	lastName: "Johnson",
	phone: "998-736-7268",
	emailAddress: "innuendo@gmail.com",
	homeAddress: "778 Nance Rd, Farmington, ME 04221"
}

]


db.Customer.remove({})
.then(() => db.Customer.collection.insertMany(customerSeed))
.then(data => {
	console.log(data.insertedCount + "records inserted");
	process.exit(0);
})
.catch(err => {
	console.error(err);
	process.exit(0);
})
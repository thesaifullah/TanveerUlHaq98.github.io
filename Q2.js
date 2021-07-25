var saiyan = {
        name:"Goku",
        email:"goku.dbz@over9000.com",
        password:"Akira Toriyama",
        age:"1000",
        gender:"male",
        city:"west city",
        country:"DBZ multiverse"
};
var exists = saiyan.hasOwnProperty("age","country");
console.log(exists);
exists = saiyan.hasOwnProperty("lastname","firstname");
console.log(exists);
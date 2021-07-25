function User(Name ,Gender ,Address ,Education ,Profession){
    this.Name = Name;
    this.Gender = Gender;
    this.Address = Address;
    this.Education = Education;
    this.Profession = Profession;
}
var user1 = new User("Goku","Male","Kame House WestCity","None","Eating & fighting");
var user2 = new User("Bulma","Female","Capsul Corp EastCity","Ms.Robotics","cooking");
var exists = user1.hasOwnProperty && user2.hasOwnProperty("Education","Profession");
console.log(user1,user2,exists);
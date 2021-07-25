function Movies(name, leadActor, leadActress, genre, dateOfRelease) {
   this.name = name;
   this.leadActor = leadActor;
   this.leadActress = leadActress;
   this.genre = genre;
   this.dateOfRelease = dateOfRelease;
}
    
var movie1 = new Movies("Day and Night","Tom Cruise","Cameron Diaz","action","15-00-2021");
var movie2 = new Movies("Bang Bang","Hrithik Roshan","Katerina Kaif","action", 30-00-2021);
console.log(movie1, movie2);
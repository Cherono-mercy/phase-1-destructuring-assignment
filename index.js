const farmAnimals = "cow horse sheep pig chicken";
//Assigning appropriate variables based on the sounds animals make
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

//Assigning names to the four remaining animals, skipping the horse
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

//Assigning color variables to the three remaining animals skipping horse and the chicken.
const [blackAndWhite, , black, pink, ,] = farmAnimals.split(" ");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;
// Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;

//But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const [, , , , , indg, ,] = colors;

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

//Using destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

//Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;
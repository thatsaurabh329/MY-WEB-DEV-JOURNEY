let favmovie = "iron man";
let guessmovie = prompt("Guess my fav movie");

while ((guessmovie != favmovie) && (guessmovie != "quit"))
    {
  
    guessmovie = prompt(" OPPS! Wrong guess . Please try again ");
}

if( guessmovie==favmovie){


console.log("CONGRATULATIONS! Your guessed movie is correct");
}
else{
  console.log(" quit !")
}
  

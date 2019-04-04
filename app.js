$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var randomAuthor;
  getQuote();

  function getQuote() {

    var quotes = [
      "Moral indignation is jealousy with a halo.",
      "Glory is fleeting, but obscurity is forever.",
      "Political correctness is tyranny with manners.",
      "Not everything that can be counted counts, and not everything that counts can be counted.",
      "A lie gets halfway around the world before the truth has a chance to get its pants on."
    ]
    var authors = [
     "H. G. Wells ",
     "Napoleon Bonaparte",
     "Charlton Heston",
     "Albert Einstein",
     "Sir Winston Churchill"
    ]

    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];

    $("#quote").text(randomQuote);
    $("#author").text(randomAuthor);
  }

    $("#tweet").on("click", function() {
      window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + randomAuthor);
    });

    $("#quoteme").on("click", function() {
      getQuote();
    });

  }); 

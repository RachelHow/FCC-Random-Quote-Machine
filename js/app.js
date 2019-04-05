$(document).ready(function() {
  
  var quote;
  var author;

  function getNewQuote() {
      $.ajax({
        url: 'https://got-quotes.herokuapp.com/quotes',
        success: function(response) {
          quote = response.quote;
          author = response.character;
          $('#text').text(quote);
          if (author) {
            $('#author').text(author);
          } 
          else {
            $('#author').text('unknown');
          }
        }
      });
    }
  getNewQuote();

  $('#new-quote').on('click', function(event){
    event.preventDefault();
    getNewQuote();
  });

  $('#tweet-quote').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + "\u2014 " + author));
  });

});


$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
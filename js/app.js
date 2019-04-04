$(document).ready(function() {
  
  var quote;
  var author;

  function getNewQuote() {
      $.ajax({
        url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        success: function(response) {
          quote = response.quoteText;
          author = response.quoteAuthor;
          $('#quote').text(quote);
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
  })
  
});
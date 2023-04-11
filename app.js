$(document).ready(function() {
    $('#movie-form').submit(function(event) {
      event.preventDefault();
      var title = $('#title').val();
      var rating = $('#rating').val();
      $('#movie-list').append('<li>' + title + ' - ' + rating + '<button class="remove-btn">Remove</button></li>');
      $('#title').val('');
      $('#rating').val('');
    });
  
    $('#movie-list').on('click', '.remove-btn', function() {
      $(this).parent().remove();
    });
  });
  
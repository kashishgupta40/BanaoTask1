// script.js

$(document).ready(function() {
    $('#filter').on('change', function() {
      var selectedOption = $(this).val();
      if (selectedOption === '') {
        $('.card').show();
      } else {
        $('.card').hide();
        $('#' + selectedOption).show();
      }
    });
  });
  
  // Add event listeners to the share buttons
  $('.btn-outline-primary').on('click', function() {
    // Add your share functionality here
    alert('Share button clicked!');
  });
  
  // Add event listeners to the search form
  $('#search-form').on('submit', function(e) {
    e.preventDefault();
    var searchTerm = $('#search-input').val();
    // Add your search functionality here
    alert('Searching for: ' + searchTerm);
  });
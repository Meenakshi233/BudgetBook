// Wait until the page is fully loaded
$(document).ready(function () {
  
  // When a delete button is clicked
  $('.delete-transaction').click(function () {

    // Get the transaction ID from the button's data-id
    var id = $(this).attr('data-id');

    // Get the URL to send the delete request
    var url = $(this).attr('data-url');

    // Put the ID into the hidden input field inside the modal form
    $('.modal-form input').val(id);

    // Set the form's action to the correct delete URL
    $('.modal-form').attr('action', url);
  });
});

$(document).on("keypress", "input", function(e){
  if(e.which == 13){
    var search = $(this).val();
    const webpage = document.getElementById("webpage");
    webpage.setAttribute('src', 'https://www.google.com/search?q=' + search);
  }
});
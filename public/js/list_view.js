var page_no = 1;
var search_term;

function fetch_list(search_term){
  if(search_term != ""){
    $.ajax({
      url: 'http://127.0.0.1:3000/gallery/'+search_term+'/'+page_no,
      dataType: 'json',

      success: function(resp) {
        if(resp.hits.length==0)
          alert("sorry no results found");
        var result = "";
        $.each(resp.hits, function(index,value){
          result+="<div class=\"inner\">"+
          "<img class=\"list_img\" id=\""+value.id+"\" style=\"padding:1%;\" src=\""+value.webformatURL+"\">"+
          "</div>"
        }); 
        $("#placeholder").html(result);
     },

     error: function(resp){
      page_no--;
    }
  });
}
  console.log("infetch "+page_no);
}


$(document).ready(function() {

  $(document).keypress(function(e){
    var key = e.which;
    if(key==13){
      $('#search_btn').click();
    }
  });

  $('#search_btn').on('click', function() {
    search_term = $('#text_area').val();
    $('button').prop('disabled', false);
    page_no=1;
    fetch_list(search_term);
  });

  $('#next').on('click', function() {
    page_no++;
    fetch_list(search_term);
  });

  $('#previous').on('click', function() {
    page_no--;
    if(page_no<1)
      page_no=1;
    else
      fetch_list(search_term);
  });

});
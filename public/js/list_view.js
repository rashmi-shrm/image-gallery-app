var page_no = 1;

function fetch_list(){

	var search_term = $('#text_area').val();
	var url = 'http://127.0.0.1:3000/gallery/'+search_term+'/'+page_no;
	
	$.getJSON(url, function(resp) {
		if(resp.hits.length==0)
			alert("sorry no results found");
		result = ""
		$.each(resp.hits, function(index,value){
			result+="<div class=\"inner\">"+ 
				"<img class=\"list_img\" id=\""+value.id+"\" style=\"padding:1%;\" src=\""+value.webformatURL+"\">"
			 "</div>"
		});	
		$("#placeholder").html(result);
	});
	
}


$(document).ready(function() {
  $(document).keypress(function(e){
  	var key = e.which;
  	if(key==13){
  		$('#search_btn').click();
  	}
  });
  $('#search_btn').on('click', function() {
    fetch_list();
  });
  $('#next').on('click', function() {
  	page_no++;
    fetch_list();
  });
  $('#previous').on('click', function() {
  	page_no--;
  	if(page_no<1)
  		page_no=1;
    fetch_list();
  });

});
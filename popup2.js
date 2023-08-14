var shouldRun;
var a;
var elem;
var script1 = "";
var script2 = "";
var ips;
var object;
var getIps;
var getActivated;
var getIp;
function getStorage(key){
    chrome.storage.sync.get(key, function(result){
    object = result;
    var func = new Function("return object." + key);
    return func();
    });
}
function setStorage(key, value){
    chrome.storage.sync.set({key: value});
}
function error(text){
document.querySelector("#status").innerHTML = text;
document.querySelector("#status").style.color = "red";
}
function success(text){
document.querySelector("#status").innerHTML = text;
document.querySelector("#status").style.color = "green";
}
function connect(ip){
chrome.storage.sync.set({"ip": ip});
success("Successfully connected to " + ip);
    chrome.storage.sync.get("ips", function(result1){
    getIps = result1.ips;
let y = getIps;
if(y != undefined || y != "none"){
alert(y);
alert(atob(y));
ips = eval(atob(y));
document.querySelector("#ips").innerHTML = "";
for(var i = 0; i < ips.length; i++){
    chrome.storage.sync.get("ip", function(result2){
    getIp = result2.ip;

if(getIp == ips[i]){
document.querySelector("#ips").innerHTML += ("<p>" + ips[i] + "<button disabled>Already connected to " + ips[i] + "</button></p>");
} else {
document.querySelector("#ips").innerHTML += ("<p>" + ips[i] + "<button onclick='connect(" + '"' + ips[i] + '"' + ")'>Connect to " + ips[i] + "</button></p>");
}
document.querySelector("#ips").innerHTML += "<br>";
});
}
}
});
}
function on(){
chrome.storage.sync.set({"activated": "true"});
document.querySelector("#power").src = "images/off.png";
document.querySelector("#power").onclick = off;
success("Successfully turned on vpn");
}
function off(){
chrome.storage.sync.set({"activated": "false"});
document.querySelector("#power").src = "images/on.png";
document.querySelector("#power").onclick = on;
success("Successfully turned off vpn");
}
    chrome.storage.sync.get("activated", function(result1){
    getActivated = result1.activated;

if(getActivated == "false" || getActivated == undefined){
document.querySelector("#power").src = "images/on.png";
document.querySelector("#power").onclick = on;
}
if(getActivated == "true"){
document.querySelector("#power").src = "images/off.png";
document.querySelector("#power").onclick = off;
}
});
document.querySelector("#load").addEventListener("click", function(){
a = ["https://www.croxyproxy.rocks/_id/", "https://www.croxyproxy.rocks/_tr/", "https://www.croxyproxy.rocks/_es/", "https://www.croxyproxy.rocks/_pt/", "https://www.croxyproxy.rocks/_fr/", "https://www.croxyproxy.rocks/_de/", "https://www.croxyproxy.rocks/_it/", "https://www.croxyproxy.rocks/_ko/", "https://www.croxyproxy.rocks/_ar/", "https://www.croxyproxy.rocks/_zh/", "https://www.croxyproxy.rocks/_hi/", "https://www.croxyproxy.rocks/_bn/", "https://www.croxyproxy.rocks/_pa/", "https://www.croxyproxy.rocks/_ja/", "https://www.croxyproxy.rocks/_ru/"];
for(var i = 0; i < a.length; i++){
elem = document.createElement("iframe");
// elem.style.display = "none";
elem.src = a[i];
document.body.appendChild(elem);
}
});
document.querySelector("#refresh").addEventListener("click", function(){
chrome.storage.sync.set({"ips" : "none"});
a = ["https://www.croxyproxy.rocks/_id/", "https://www.croxyproxy.rocks/_tr/", "https://www.croxyproxy.rocks/_es/", "https://www.croxyproxy.rocks/_pt/", "https://www.croxyproxy.rocks/_fr/", "https://www.croxyproxy.rocks/_de/", "https://www.croxyproxy.rocks/_it/", "https://www.croxyproxy.rocks/_ko/", "https://www.croxyproxy.rocks/_ar/", "https://www.croxyproxy.rocks/_zh/", "https://www.croxyproxy.rocks/_hi/", "https://www.croxyproxy.rocks/_bn/", "https://www.croxyproxy.rocks/_pa/", "https://www.croxyproxy.rocks/_ja/", "https://www.croxyproxy.rocks/_ru/"];
for(var i = 0; i < a.length; i++){
elem = document.createElement("iframe");
// elem.style.display = "none";
elem.src = a[i];
document.body.appendChild(elem);
}
});

setInterval(function(){
shouldRun = true;
    chrome.storage.sync.get("ips", function(result1){
    getIps = result1.ips;
let y = getIps;
if(y != undefined || y != "none"){
script2 = atob(y);
  if(script2 == script1){
    shouldRun = false;
  } else {
      script1 = atob(y);
  }
  if(script1 == ""){
    shouldRun = false;
  }
  if(shouldRun == true){
alert(y);
alert(atob(y));
    ips = eval(atob(y));
document.querySelector("#ips").innerHTML = "";
for(var i = 0; i < ips.length; i++){
    chrome.storage.sync.get("ip", function(result2){
    getIp = result2.ip;

if(getIp == ips[i]){
document.querySelector("#ips").innerHTML += ("<p>" + ips[i] + "<button disabled>Already connected to " + ips[i] + "</button></p>");
} else {
document.querySelector("#ips").innerHTML += ("<p>" + ips[i] + "<button onclick='connect(" + '"' + ips[i] + '"' + ")'>Connect to " + ips[i] + "</button></p>");
}
document.querySelector("#ips").innerHTML += "<br>";
});
}
  }
}
});
}, 0);


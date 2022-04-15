let url = ""
let show = false
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
    document.getElementById("img").src = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+url
    document.getElementById("input").value = url
});

document.getElementById("img").addEventListener("click", function inputStatusChange(){
    show = !show
    if(show){
        document.getElementById("input").style = "display: block; width: 142px;"
    }
    else{
        document.getElementById("input").style = "display: none; width: 142px;"
    }
})

document.getElementById("input").addEventListener("change", function changeQR(){
    document.getElementById("img").src = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+document.getElementById("input").value
})
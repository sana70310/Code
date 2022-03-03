//ロード終了時処理
var loadground = document.getElementById("loadground");
window.onload = function(){
    loadground.style.opacity = "0";
    setTimeout(function(){
        loadground.style.display = "none";
    }, 300);
}
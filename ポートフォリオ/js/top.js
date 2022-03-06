//アイコン・リンク表示位置
const screenWidth = screen.width - (window.outerWidth - document.body.offsetWidth); //スクリーンの幅
const icon = document.getElementById("icon");
const toContents = document.getElementById("toContents");
icon.style.width = screen.availHeight*0.45 +"px";
icon.style.height = screen.availHeight*0.45 +"px";
icon.style.top =  screen.availHeight*0.15 +"px";
icon.style.left = (screenWidth - icon.offsetWidth)/2 +"px";
document.getElementById("particles-js").style.width = screenWidth +"px";
document.getElementById("particles-js").style.height = screen.availHeight +"px";
toContents.style.top = screen.availHeight*0.65 +"px";
toContents.style.left = (screenWidth - toContents.offsetWidth)/2 +"px";
document.getElementById("pin").style.top = screen.availHeight +"px";
document.getElementById("pin").style.left = screenWidth +"px";

//ホバーアクション
//target要素を指定
const target = document.getElementById('more');

//マウスが要素上に入った時
function mouseOver(){
    // document.body.classList.remove('mouseLeave');
    // document.body.classList.add('mouseOver');
}

//マウスが要素上から離れた時
function mouseLeave(){
    // document.body.classList.remove('mouseOver');
    // document.body.classList.add('mouseLeave');
}

//ロード終了時処理
var loadground = document.getElementById("loadground");
window.onload = function(){
    loadground.style.opacity = "0";
    setTimeout(function(){
        loadground.style.display = "none";
    }, 300);
}
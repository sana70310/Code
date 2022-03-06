//アイコン・リンク表示位置
const screenWidth = screen.width - (window.outerWidth - document.body.offsetWidth); //スクリーンの幅
const screenHeight = screen.availHeight - (window.outerHeight - innerHeight) ; //スクリーンの高さ
const icon = document.getElementById("icon");
const toContents = document.getElementById("toContents");
icon.style.width = screenHeight*0.5 +"px";
icon.style.height = screenHeight*0.5 +"px";
icon.style.top =  screenHeight*0.15 +"px";
icon.style.left = (screenWidth - icon.offsetWidth)/2 +"px";
document.getElementById("particles-js").style.width = screenWidth +"px";
document.getElementById("particles-js").style.height = screenHeight +"px";
toContents.style.top = screenHeight*0.7 +"px";
toContents.style.left = (screenWidth - toContents.offsetWidth)/2 +"px";

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
//グローバル変数
var thisDocument = document.documentElement;
var aboutArea = document.getElementById("aboutArea");
var newsArea = document.getElementById("newsArea");
var photoArea = document.getElementById("photoArea");
var musicArea = document.getElementById("musicArea");
var currentBackground = 1;

//スコープ内変数
const screenWidth = screen.width - (window.outerWidth - document.body.offsetWidth); //スクリーンの幅
const headerHeight = document.getElementById("fixedHeader").offsetHeight; //ヘッダーの高さ

//コンテンツの表示位置設定
document.getElementById("contents").style.paddingTop = headerHeight +"px";
//document.getElementById("contents").style.paddingLeft = screenWidth*0.19 +"px";

//目次の表示位置
document.getElementById("aboutTitle").style.top = headerHeight*2 +"px";
document.getElementById("newsTitle").style.top = headerHeight*2 + screenWidth*0.81/3*2 + screenWidth*0.81/3/3*2 +"px";
document.getElementById("photoTitle").style.top = headerHeight*2 + screenWidth*0.81/3*2*2 + screenWidth*0.81/3/3*2*2 +"px";
document.getElementById("musicTitle").style.top = headerHeight*2 + screenWidth*0.81/3*2*3 + screenWidth*0.81/3/3*2*3 +"px";
//各エリアの表示サイズ・位置設定
//width, height
aboutArea.style.width = screenWidth*0.81 +"px";
newsArea.style.width = screenWidth*0.81 +"px";
photoArea.style.width = screenWidth*0.81 +"px";
musicArea.style.width = screenWidth*0.81/3*2 +"px";
aboutArea.style.height = screenWidth*0.81/3*2 +"px";
newsArea.style.height = screenWidth*0.81/3*2 +"px";
photoArea.style.height = screenWidth*0.81/3*2 +"px";
musicArea.style.height = screenWidth*0.81/3*2 +"px";
//margin-bottom
aboutArea.style.marginBottom = screenWidth*0.81/3/3*2 +"px";
newsArea.style.marginBottom = screenWidth*0.81/3/3*2 +"px";
photoArea.style.marginBottom = screenWidth*0.81/3/3*2 +"px";
musicArea.style.marginBottom = screenWidth*0.81/3/3*2 +"px";

//スクロールイベント
//境界
const backgroundLine_1 = headerHeight + aboutArea.offsetHeight + screenWidth*0.81/3/3;
const backgroundLine_2 = headerHeight + aboutArea.offsetHeight + newsArea.offsetHeight + screenWidth*0.81/3/3*2*2;
const backgroundLine_3 = headerHeight + aboutArea.offsetHeight + newsArea.offsetHeight + photoArea.offsetHeight + screenWidth*0.81/3/3*2*2;
//色
const backgroundColor_1 = "#debecc";
const backgroundColor_2 = "#eae1cf";
const backgroundColor_3 = "#bbbcde";
const backgroundColor_4 = "#bed3ca";
//初期化
if(window.scrollY + screen.height/2<backgroundLine_1){
    document.body.style.backgroundColor = backgroundColor_1;
    currentBackground = 1;
}else if(window.scrollY + screen.height/2>=backgroundLine_1 && window.scrollY + screen.height/2<backgroundLine_2){
    document.body.style.backgroundColor = backgroundColor_2;
    currentBackground = 2;
}else if(window.scrollY + screen.height/2>=backgroundLine_2 && window.scrollY + screen.height/2<backgroundLine_3){
    document.body.style.backgroundColor = backgroundColor_3;
    currentBackground = 3;
}else if(window.scrollY + screen.height/2>=backgroundLine_3){
    document.body.style.backgroundColor = backgroundColor_4;
    currentBackground = 4;
}

window.addEventListener('scroll', () => {
    if(currentBackground==1 && window.scrollY + screen.height/2>=backgroundLine_1){
        document.body.style.backgroundColor = backgroundColor_2;
        currentBackground = 2;
    }else if(currentBackground==2 && window.scrollY + screen.height/2<backgroundLine_1){
        document.body.style.backgroundColor = backgroundColor_1;
        currentBackground = 1;
    }else if(currentBackground==2 && window.scrollY + screen.height/2>=backgroundLine_2){
        document.body.style.backgroundColor = backgroundColor_3;
        currentBackground = 3;
    }else if(currentBackground==3 && window.scrollY + screen.height/2<backgroundLine_2){
        document.body.style.backgroundColor = backgroundColor_2;
        currentBackground = 2;
    }else if(currentBackground==3 && window.scrollY + screen.height/2>=backgroundLine_3){
        document.body.style.backgroundColor = backgroundColor_4;
        currentBackground = 4;
    }else if(currentBackground==4 && window.scrollY + screen.height/2<backgroundLine_3){
        document.body.style.backgroundColor = backgroundColor_3;
        currentBackground = 3;
    }
});

//ロード終了時処理
var loadground = document.getElementById("loadground");
window.onload = function(){
    loadground.style.opacity = "0";
    setTimeout(function(){
        loadground.style.display = "none";
    }, 300);
}


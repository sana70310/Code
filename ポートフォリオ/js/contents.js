//グローバル変数
var thisDocument = document.documentElement;
var aboutArea = document.getElementById("aboutArea");
var newsArea = document.getElementById("newsArea");
var photoArea = document.getElementById("photoArea");
var musicArea = document.getElementById("musicArea");
var currentBackground = 1;

//ロード時処理
window.onload = function(){
    //スコープ内変数
    const screenWidth = screen.width - (window.outerWidth - document.body.offsetWidth); //スクリーンの幅
    const headerHeight = document.getElementById("fixedHeader").offsetHeight; //ヘッダーの高さ

    //コンテンツの表示位置設定
    document.getElementById("contents").style.paddingTop = headerHeight +"px";
    //document.getElementById("contents").style.paddingLeft = screenWidth*0.19 +"px";

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
    const backgroundColor_1 = "rgb(25,25,25)";
    const backgroundColor_2 = "#cca";
    const backgroundColor_3 = "rgb(109,147,158)";
    const backgroundColor_4 = "#bbc";
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
}


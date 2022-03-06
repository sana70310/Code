//グローバル変数
var thisDocument = document.documentElement;
var newsUl = document.getElementById("newsUl"); //ニュース掲載のulタグのセレクタ
var newsLi = newsUl.children; //ニュースのliタグのリスト
var popUp = document.getElementById("popUp"); //ポップアップのセレクタ
var popUpImg = document.getElementById("popUpImg"); //ポップアップ内imgタグのセレクタ
var currentPhotoIndex = 0;

//初期化時使用変数
  const scrollBarWidth = window.outerWidth - document.body.offsetWidth; //スクロールバーの幅
  const screenWidth = screen.width - scrollBarWidth; //スクリーンの幅
  const thisContents = document.getElementById("thisContents"); //コンテンツのセレクタ
  const headerHeight = document.getElementById("fixedHeader").offsetHeight; //ヘッダーの高さ

//liタグの表示サイズ設定(width, height)
  //写真の列数
  let newsImgCol = 5;
  //1枚の幅、高さ
  let newsImgWidth = screenWidth / (newsImgCol+1);
  //小さすぎた場合、4列に設定
  if(newsImgWidth<160){
      newsImgCol = 4;
      newsImgWidth = screenWidth / (newsImgCol+1);
  }
  //liタグ全てに適用
  for(let i=0; i<newsLi.length; i++){
      newsLi[i].style.width = newsImgWidth*newsImgCol + "px";
      newsLi[i].style.height = newsImgWidth*newsImgCol*0.5 + "px";
  }
//ulタグの表示サイズ・位置設定(width, left, margin-right)
  //newsUl.style.width = newsLiWidth*newsLiCol + (screenWidth - newsLiWidth*newsLiCol)/2 - scrollBarWidth + "px"; //ウィンドウサイズを小さくしたときにリストの右側に余白を表示するため
  newsUl.style.width = newsImgWidth*newsImgCol + "px";
  newsUl.style.marginLeft = (screenWidth - newsImgWidth*newsImgCol)/2 + "px";

//コンテンツの幅
thisContents.style.width = screenWidth;
thisContents.style.paddingTop = headerHeight + "px";

//ロード終了時処理
var loadground = document.getElementById("loadground");
window.onload = function(){
    loadground.style.opacity = "0";
    setTimeout(function(){
        loadground.style.display = "none";
    }, 300);
}

//写真クリック
function openPopUp(image) {
  if(image.id=="index_1"){
    currentPhotoIndex = 1;
  }else if(image.id=="index_2"){
    currentPhotoIndex = 2;
  }else if(image.id=="index_3"){
    currentPhotoIndex = 3;
  }
  popUpImg.src = "../img/news/index_"+ currentPhotoIndex +".jpg";
  popUp.style.display = "block";
  popUp.classList.add("showPopUp");
}
function mouseDownImg(image){
    
}
function mouseUpImg(image){
    
}

//SVG閉じるクリック
function closePopUp() {
  popUp.style.display = "none";
}

//前の写真へ
function prevPhoto(){
  currentPhotoIndex -= 1;
  if(currentPhotoIndex==0){
    currentPhotoIndex = 3;
  }
  popUpImg.src = "../img/news/index_"+ currentPhotoIndex +".jpg";
}

//次の写真へ
function nextPhoto(){
  currentPhotoIndex += 1;
  if(currentPhotoIndex==4){
    currentPhotoIndex = 1;
  }
  popUpImg.src = "../img/news/index_"+ currentPhotoIndex +".jpg";
}

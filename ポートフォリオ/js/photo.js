//グローバル変数
var thisDocument = document.documentElement;
var photoTypeTab = document.getElementById("photoTypeTab");
var tabLi = document.getElementById("tabUl").children; //タブのliタグのリスト
var thisContents = document.getElementById("thisContents"); //コンテンツのセレクタ
var photoUl = document.getElementById("photoUl"); //写真掲載のulタグのセレクタ
var photoLi = photoUl.children; //写真掲載のliタグのリスト
var popUp = document.getElementById("popUp"); //ポップアップのセレクタ
var currentPhotoIndex = 1; //ポップアップ内に表示されている写真のインデックス
var popUpImg = document.getElementById("popUpImg"); //ポップアップ内imgタグのセレクタ
var currentPath = "nature"; //写真のパス"../img/photo/"+ currentPath +"/index_"+ currentPhotoIndex +".jpg"

//初期化時使用変数
  const scrollBarWidth = window.outerWidth - document.body.offsetWidth; //スクロールバーの幅
  const screenWidth = screen.width - scrollBarWidth; //スクリーンの幅
  let firstTab = 1;
  
//タブの表示位置設定
  //padding-top, padding-left
  const headerHeight = document.getElementById("fixedHeader").offsetHeight; //ヘッダーの高さ
  const photoTypeTabLi = photoTypeTab.firstElementChild.children; //タブ内のLi
  let tabWidth = 0;
  for(let i=1; i<photoTypeTabLi.length; i++){
    tabWidth += photoTypeTabLi[i].offsetWidth;
  }

  photoTypeTab.style.paddingTop = headerHeight + "px";
  photoTypeTab.style.paddingLeft = (screenWidth - tabWidth)/2 - photoTypeTabLi[0].offsetWidth + "px";

//liタグの表示サイズ設定(width, height)
  //写真の列数
  let photoLiCol = 5;
  //1枚の幅、高さ
  let photoLiWidth = screenWidth / (photoLiCol+1);
  //小さすぎた場合、4列に設定
  if(photoLiWidth<160){
      photoLiCol = 4;
      photoLiWidth = screenWidth / (photoLiCol+1);
  }
  //liタグ全てに適用
  for(let i=0; i<photoLi.length; i++){
      let photoLiChild = photoLi[i];
      photoLiChild.style.width = photoLiWidth + "px";
      photoLiChild.style.height = photoLiWidth + "px";
  }
  
//ulタグの表示サイズ・位置設定(width, left, margin-right)
  //photoUl.style.width = photoLiWidth*photoLiCol + (screenWidth - photoLiWidth*photoLiCol)/2 - scrollBarWidth + "px"; //ウィンドウサイズを小さくしたときにリストの右側に余白を表示するため
  photoUl.style.width = photoLiWidth*photoLiCol + "px";
  photoUl.style.marginLeft = (screenWidth - photoLiWidth*photoLiCol)/2 + "px";

//コンテンツの幅
document.getElementById("thisContents").style.width = screenWidth;

//開始タブ
var queryString = window.location.search;
var queryObject = new Object();
if(queryString){
  queryString = queryString.substring(1);
  var parameters = queryString.split('&');

  for (var i = 0; i < parameters.length; i++) {
    var element = parameters[i].split('=');

    var paramName = decodeURIComponent(element[0]);
    var paramValue = decodeURIComponent(element[1]);

    queryObject[paramName] = paramValue;
  }
}
switch(queryObject.start){
    case "1":
      currentPath = "nature";
      firstTab = 1;
      break;
    case "2":
      currentPath = "portrait";
      firstTab = 2;
      break;
    case "3":
      currentPath = "disney";
      firstTab = 3;
      break;
    default:
      break;
  }
  for(let i=0; i<photoLi.length; i++){
    photoLi[i].firstChild.src = "../img/photo/"+ currentPath +"/index_"+ (i+1) +".jpg";
  }
//タブの表示設定
tabLi[firstTab].firstChild.style.textDecoration = "underline solid";

//タブクリック
function selectTab(selectedTab){
  switch(selectedTab.id){
    case "tab1":
      currentPath = "nature";
      break;
    case "tab2":
      currentPath = "portrait";
      break;
    case "tab3":
      currentPath = "disney";
      break;
  }
  for(let i=0; i<photoLi.length; i++){
    photoLi[i].firstChild.src = "../img/photo/"+ currentPath +"/index_"+ (i+1) +".jpg";
  }
  //タブの表示設定
  for(let i=1; i<tabLi.length; i++){
    tabLi[i].firstChild.style.textDecoration = "";
  }
  selectedTab.style.textDecoration = "underline solid";
}

//写真クリック
function openPopUp(image) {
  for(let i=0; i<photoLi.length; i++){
    if(image.id==photoLi[i].firstElementChild.id){
      currentPhotoIndex = i+1;
      popUpImg.src = "../img/photo/"+ currentPath +"/index_"+ currentPhotoIndex +".jpg";
      break;
    }
    //let Jimage = JSON.stringify(objectSort(image));
    //let JphotoLiItem = JSON.stringify(objectSort(photoLi[i]));
      // if(Jimage==JphotoLiItem){
      //     image.src = "../img/photo/nature/index_"+ (i+1) +".jpg";
      //     break;
      // }
  }
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
    currentPhotoIndex = 30;
  }
  popUpImg.src = "../img/photo/"+ currentPath +"/index_"+ currentPhotoIndex +".jpg";
}

//次の写真へ
function nextPhoto(){
  currentPhotoIndex += 1;
  if(currentPhotoIndex==31){
    currentPhotoIndex = 1;
  }
  popUpImg.src = "../img/photo/"+ currentPath +"/index_"+ currentPhotoIndex +".jpg";
}

//ロード終了時処理
var loadground = document.getElementById("loadground");
window.onload = function(){
  //ロード画面透明化
  loadground.style.opacity = "0";
  //アニメ―ション後処理
  setTimeout(function(){
    //ロード画面非表示
    loadground.style.display = "none";
  }, 300);
}



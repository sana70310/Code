//グローバル変数
var thisDocument = document.documentElement;
var photoTypeTab = document.getElementById("photoTypeTab"); //タブのdivタグのセレクタ
var tabLi = document.getElementById("tabUl").children; //タブのliタグのリスト
var thisContents = document.getElementById("thisContents"); //コンテンツのセレクタ
var photoUl = document.getElementById("photoUl"); //写真掲載のulタグのセレクタ
var photoLi = photoUl.children; //写真掲載のliタグのリスト
var popUp = document.getElementById("popUp"); //ポップアップのセレクタ
var currentVideoIndex = 1; //ポップアップ内に表示されている写真のインデックス
var popUpVideo = document.getElementById("popUpVideo"); //ポップアップ内iframeタグのセレクタ
var cinematicURL = ["lLjHmMWR9F4","zstJBCLLJ2o","YWGhR95DvHU","QI6OWX4iTjQ","plkPymQpSHo","7L71Vazq_c0"];
var emotionalURL = ["lq_-gH9hSgc","0448oeDDTUU","TOQN3r_xpUY"];
var typeList = [cinematicURL,emotionalURL];
var currentTypeIndex = 0; //typeListのインデックス

//ロード時処理
window.onload = function(){
  //スコープ内変数
    const scrollBarWidth = window.outerWidth - document.body.offsetWidth; //スクロールバーの幅
    const screenWidth = screen.width - scrollBarWidth; //スクリーンの幅

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
    let photoImgCol = 5;
    //1枚の幅、高さ
    let photoImgWidth = screenWidth / (photoImgCol+1);
    //小さすぎた場合、4列に設定
    if(photoImgWidth<160){
        photoImgCol = 4;
        photoImgWidth = screenWidth / (photoImgCol+1);
    }
    //liタグ全てに適用
    for(let i=0; i<photoLi.length; i++){
        photoLi[i].style.width = photoImgWidth*photoImgCol + "px";
        photoLi[i].style.height = photoImgWidth*photoImgCol*0.5 + "px";
    }
    //imgタグ
    const photoLiHeight = photoLi[0].firstElementChild.offsetHeight;
    for(let i=0; i<photoLi.length; i++){
      photoLi[i].firstElementChild.firstElementChild.style.width = photoImgWidth +"px";
      photoLi[i].firstElementChild.firstElementChild.style.height = photoImgWidth +"px";
      photoLi[i].firstElementChild.style.paddingTop = (photoLiHeight-photoImgWidth)/2 +"px";
    }
  //ulタグの表示サイズ・位置設定(width, left, margin-right)
    //photoUl.style.width = photoLiWidth*photoLiCol + (screenWidth - photoLiWidth*photoLiCol)/2 - scrollBarWidth + "px"; //ウィンドウサイズを小さくしたときにリストの右側に余白を表示するため
    photoUl.style.width = photoImgWidth*photoImgCol + "px";
    photoUl.style.marginLeft = (screenWidth - photoImgWidth*photoImgCol)/2 + "px";
  
  //コンテンツの幅
  document.getElementById("thisContents").style.width = screenWidth;

  //開始タブ
  var queryString = window.location.search;
  var queryObject = new Object();
  let listLength = cinematicURL.length;
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
  if(queryObject.start!=null){
    currentTypeIndex = parseInt(queryObject.start);
  }
  //タブに応じた表示設定
  let bridgeIndex = 0;
  let currentIndex = 0;
  for(let i=0; i<typeList.length; i++){
    bridgeIndex += typeList[i].length;
    if(i==currentTypeIndex){
      while(currentIndex<bridgeIndex){
        photoLi[currentIndex].style.display = "block";
        currentIndex++;
      }
    }else{
      while(currentIndex<bridgeIndex){
        photoLi[currentIndex].style.display = "none";
        currentIndex++;
      }
    }
  }
  //タブの表示設定
  tabLi[currentTypeIndex+1].firstChild.style.textDecoration = "underline solid";
}
//タブクリック
function selectTab(selectedTab){
  //押下されたタブを特定
  for(let i=1; i<tabLi.length; i++){
    if(selectedTab.id==tabLi[i].firstChild.id){
      currentTypeIndex = i-1;
      break;
    }
  }
  //タブに応じた表示設定
  let bridgeIndex = 0;
  let currentIndex = 0;
  for(let i=0; i<typeList.length; i++){
    bridgeIndex += typeList[i].length;
    if(i==currentTypeIndex){
      while(currentIndex<bridgeIndex){
        photoLi[currentIndex].style.display = "block";
        currentIndex++;
      }
    }else{
      while(currentIndex<bridgeIndex){
        photoLi[currentIndex].style.display = "none";
        currentIndex++;
      }
    }
  }
  //タブの表示設定
  for(let i=1; i<tabLi.length; i++){
    tabLi[i].firstChild.style.textDecoration = "";
  }
  tabLi[currentTypeIndex+1].firstChild.style.textDecoration = "underline solid";
}

//写真クリック
function openPopUp(image) {
  for(let i=0; i<photoLi.length; i++){
    if(image.id==photoLi[i].firstElementChild.firstElementChild.id){
      currentVideoIndex = i;
      popUpVideo.src = "https://www.youtube.com/embed/"+typeList[currentTypeIndex][currentVideoIndex];
      break;
    }
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

//前の動画へ
function prevPhoto(){
  currentVideoIndex -= 1;
  if(currentVideoIndex<0){
    currentVideoIndex = typeList[currentTypeIndex].length-1;
  }
  popUpVideo.src = "https://www.youtube.com/embed/"+typeList[currentTypeIndex][currentVideoIndex];
}

//次の動画へ
function nextPhoto(){
  currentVideoIndex += 1;
  if(currentVideoIndex==typeList[currentTypeIndex].length){
    currentVideoIndex = 0;
  }
  popUpVideo.src = "https://www.youtube.com/embed/"+typeList[currentTypeIndex][currentVideoIndex];
}
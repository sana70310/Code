//グローバル変数
var thisDocument = document.documentElement;
var photoUl = document.getElementById("photoUl"); //写真掲載のulタグのセレクタ
var photoLi = photoUl.children; //写真掲載のliタグのリスト
var popUp = document.getElementById("popUp"); //ポップアップのセレクタ
var currentVideoIndex = 1; //ポップアップ内に表示されている写真のインデックス
var popUpVideo = document.getElementById("popUpVideo"); //ポップアップ内iframeタグのセレクタ

//ロード時処理
window.onload = function(){
  //スコープ内変数
    const scrollBarWidth = window.outerWidth - document.body.offsetWidth; //スクロールバーの幅
    const screenWidth = screen.width - scrollBarWidth; //スクリーンの幅
    const thisContents = document.getElementById("thisContents"); //コンテンツのセレクタ
    const headerHeight = document.getElementById("fixedHeader").offsetHeight; //ヘッダーの高さ

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
  //ulタグの表示サイズ・位置設定(width, left, margin-right)
    //photoUl.style.width = photoLiWidth*photoLiCol + (screenWidth - photoLiWidth*photoLiCol)/2 - scrollBarWidth + "px"; //ウィンドウサイズを小さくしたときにリストの右側に余白を表示するため
    photoUl.style.width = photoImgWidth*photoImgCol + "px";
    photoUl.style.marginLeft = (screenWidth - photoImgWidth*photoImgCol)/2 + "px";
  
  //コンテンツの幅
  thisContents.style.width = screenWidth;
  thisContents.style.paddingTop = headerHeight + "px";
}

// //写真クリック
// function openPopUp(image) {
//   for(let i=0; i<photoLi.length; i++){
//     if(image.id==photoLi[i].firstElementChild.firstElementChild.id){
//       currentVideoIndex = i;
//       popUpVideo.src = "https://www.youtube.com/embed/"+typeList[currentTypeIndex][currentVideoIndex];
//       break;
//     }
//   }
//   popUp.style.display = "block";
//   popUp.classList.add("showPopUp");
// }
// function mouseDownImg(image){
    
// }
// function mouseUpImg(image){
    
// }

// //SVG閉じるクリック
// function closePopUp() {
//   popUp.style.display = "none";
// }

// //前の動画へ
// function prevPhoto(){
//   currentVideoIndex -= 1;
//   if(currentVideoIndex<0){
//     currentVideoIndex = typeList[currentTypeIndex].length-1;
//   }
//   popUpVideo.src = "https://www.youtube.com/embed/"+typeList[currentTypeIndex][currentVideoIndex];
// }

// //次の動画へ
// function nextPhoto(){
//   currentVideoIndex += 1;
//   if(currentVideoIndex==typeList[currentTypeIndex].length){
//     currentVideoIndex = 0;
//   }
//   popUpVideo.src = "https://www.youtube.com/embed/"+typeList[currentTypeIndex][currentVideoIndex];
// }
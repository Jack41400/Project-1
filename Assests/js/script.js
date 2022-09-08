// Variables from Index
var submitBtn = document.getElementById("#lyricSubmit");
var lyrics = document.getElementById("#lyricTextInput");







function lyricSearch() {
console.log(lyrics);
}
//links lyricSearch function to click of HTML submit button
submitBtn.addEventListener("click",lyricSearch);
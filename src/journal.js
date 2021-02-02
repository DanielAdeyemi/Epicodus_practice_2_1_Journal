export function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.numOfWords = function() {
  let titleCount = (this.title).replace(/[ ]{2,}/g, " ");
  let bodyCount = (this.body).replace(/[ ]{2,}/g, " ");
  titleCount = titleCount.split(" ").length;
  bodyCount = bodyCount.split(" ").length;
  return titleCount + bodyCount;
};
export function vowels() {

}
export function getTeaser() {

}
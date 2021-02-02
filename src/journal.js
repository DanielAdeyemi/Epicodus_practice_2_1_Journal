export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numOfWords = function() {
  let titleCount = (this.title).replace(/(^\s*)|(\s*$)/gi, "");
  let bodyCount = (this.body).replace(/(^\s*)|(\s*$)/gi, "");
  titleCount = (this.title).replace(/[ ]{2,}/g, " ");
  bodyCount = (this.body).replace(/[ ]{2,}/g, " ");
  titleCount = titleCount.split(" ").length;
  bodyCount = bodyCount.split(" ").length;
  titleCount = (!(this.title)) ? 0 : titleCount;
  bodyCount = (!(this.body)) ? 0 : bodyCount;
  return titleCount + bodyCount;
};

Entry.prototype.vowels = function() {
  let sent = `${this.title} ${this.body}`;
  let vowelCount = 0;
  let constCount = 0;
  Array.from(sent).forEach(function(tit) {
    if (/[aeiou]/gi.test(tit)) vowelCount++;
    else if (/[^aeiou]/gi.test(tit) && /[a-z]/gi.test(tit)) constCount++;
  });
  let s = `Vowels: ${vowelCount}, consonants: ${constCount}`;
  return s;
};

Entry.prototype.getTeaser = function() {
  let firstSentence = (this.body.split(/[.!?]/)[0]).split(" ").length;
  let out = (firstSentence < 8) ? (this.body.split(/[.!?]/)[0]) : (this.body.split(/[.!?]/)[0].split(" ").slice(0, 8).join(" "));
  return out;
};
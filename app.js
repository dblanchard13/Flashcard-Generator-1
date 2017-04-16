function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

function ClozeCard(text, cloze) {
if(text.includes(cloze)){
  this.fullText = text;
  this.cloze = cloze;
  this.partial = "..." + this.fullText.split(this.cloze).join("");
}else{
  console.log(cloze + " doesn't appear in " + text);
}

}


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// should throw or log an error because cloze not in text
var brokenCloze = new ClozeCard("This doesn't work", "oops");

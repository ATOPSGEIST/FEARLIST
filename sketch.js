let inputTexts = [
  "I fear approaching concepts of darkness. Sincerity in this regard, repulses me when it is my own. Perhaps it is a fear of engagement with the negative out of a desire to avoid the true or uncomfortable. In a higher sense, I avoid darkness to avoid the ensuing kitch and reducibility of the work.",
  
  "I fear comparing any aspect of visual art to music making. I have feared, I fear less now. The ingrained hierarchy of mediums still exists, that which is accessible and popular v. that ordained by institution. I dont want to be seen as a musician who makes art, or an artist who makes music, though I would be lucky to have either of these criticisms returned to me.",
  
  "I fear I do not experiment enough, or that my painting's arent heady/esoteric enough. Esoteric here meaning that a level of knowledge is required to appreciate it fully. This is maybe an absurd fear, and one that shows my priviliged location within an art institution.",
  
  "I fear injury in the process of making work. Not the long term health sort of injury, but the cutting slicing smashing kind",
  
  "I fear addressing masculinity within my work, as I do not know if I have a strong perspective on my own masculinity, although the masculine insecurity pervades. The masculinity of others is difficult to bring up without attraction or reduction to obtuse cultural criticism, though this may not always be the case.",
  
  "I fear addressing the humanity of others, though I am equally drawn to it",
  
  "I fear the inability to approach the unnameable. Ultimately, the ability to suggest beyond the nameable is what I see as the justification for art's value. To transcend process and to be the referred. This is impossible.",
  
  "I fear I lack the technical skill to achieve my goals. With painting, I know that if I put in the effort, I can generally get a good result, but for more techinical projects, my limits are found more harshly.",
  
  "I fear others will look down on my work for being vapid. That those who know, those who I respect will not respect my work. This is an insecurity arising from my personal fear of a lack of knowledge. I fear I have made the wrong choice by choosing to paint, that when I cant afford the dentist I will look at myself foolishly. I fear failing in my own eyes, of no longer having the ideas that qualify my personal right to be an artist.",
  
  "I fear the inherent loneliness of being an artist. The lack of collaboration gets me.",
  
  "I fear my work is ugly, garish and horid. Although sometimes this is a positive.",
  
  "I fear seeing myself in my work, or of expressing myself too openly. Everything is hidden or so opaque as to be incorporated into context and disapeared.",
  
  "I fear expressing joy in my work, as joy confuses me. It is named so simply but never is. I also worry this emotion is to surface, and without a treatment I could not provide woul result in superfluous art.",
  
  "I fear color in my work. I love color, but serious thinking about color is something I feel I must leave for others. I do think about color, but it feels like too much responsibility to take it as my own. I am also color blind (slightly)",
  
  "I am scared of working or developing too slowly, or too fast. I want to achieve some level of respect (self and otherwise), but I want career longevity as well",
  
  "I am scared of death.",
  
  "I am scared of the abject in my work, specifically as subject matter, though I find myself increasingly drawn to it",
  
  "I fear embracing humor as a crutch",
  
  "I fear embracing technology of a crutch. I also fear technology, and want to prioritize physical work",
  
  "I fear deleting my computer files"
  
];

let typedText = "";
let currentIndex = 0;
let currentTextIndex = 0;
let minTypingSpeed = 2; // Minimum typing speed (milliseconds per character)
let maxTypingSpeed = 10; // Maximum typing speed (milliseconds per character)
let lastTypedTime = 0;
let rightMarginPercentage = 10; // Adjust the right margin as a percentage of the screen width
let font;

function preload() {
  font = loadFont('Txt Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  textFont(font);
  stroke(2);
  textAlign(LEFT, TOP); // Align text to the left

  // Create a div element to contain the typed text
  textContainer = createDiv('');
  textFont(font);
  textContainer.position(20, 20);
  textContainer.style('width', '80%'); // Adjust the width as needed
  textContainer.style('height', '80%'); // Adjust the height as needed
  textContainer.style('overflow', 'auto'); // Enable scrolling
  textFont(font);
}

function draw() {
  textFont(font);
  background(255);
  fill(0);

  // Calculate the right margin based on the screen width
  let rightMargin = (width * rightMarginPercentage) / 100;

  // Calculate the maximum text width
  let maxTextWidth = width - rightMargin;

  // Display the typed text inside the textContainer div
  textContainer.html(typedText);

  // Check if there are characters left to type in the current block
  if (currentTextIndex < inputTexts.length) {
    let inputText = inputTexts[currentTextIndex];

    // Check if enough time has passed to type the next character
    if (currentIndex < inputText.length && millis() - lastTypedTime > getRandomTypingSpeed()) {
      // Type the next character
      typedText += inputText.charAt(currentIndex);
      currentIndex++;
      textFont(font);
      lastTypedTime = millis();
    }
    // If we've typed all characters in the current block, move to the next block
    else if (currentIndex >= inputText.length) {
      currentTextIndex++;
      currentIndex = 0;
      textFont(font);
      typedText += "<br><br>"; // Add two new lines between text chunks
    }
  }
}

function getRandomTypingSpeed() {
  return random(minTypingSpeed, maxTypingSpeed);
}

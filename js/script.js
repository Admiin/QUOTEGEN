/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    'quote': 'Once more unto the breach.',
    'source': 'Shakespeare | Henry V',
    'tags': 'literature',
    'color': '#839D9A'
  },
  {
    'quote': 'Any fool can criticize, condemn, and complain — and most fools do.',
    'source': 'Dale Carnegie',
    'tag': 'witticism',
    'color': '#D9F4C7'
  },
  {
    'quote': 'We cannot solve our problems with the same thinking we used when we created them.',
    'source': 'Albert Einstein',
    'tag': "historical figure",
    'color': '#71677C'
  },
  {
    'quote': 'Choose a job you love, and you will never have to work a day in your life.',
    'source': 'Confucius',
    'tag': 'historical figure',
    'color': '#4B3B40'

  },
  {
    'quote': 'Strength above all.',
    'source': 'Darius | league of legends',
    'citation': 'Riot Games',
    'color': '#7EA2AA'
  },
  {
    'quote': `Had to have high, high hopes for a living`,
    'source': 'Panic at the Disco | High High Hopes',
    'year': '2018',
    'color': '#E7CEE3'
  },
]

/***
 * `getRandomQuote` function
***/
const getRandomQuote = (quotes) =>{
  //get random number between 0 and quotes.length();
  randomNum = Math.floor(Math.random()*(quotes.length-1));
  randomQuote = quotes[randomNum];
  return randomQuote;
}

/***
 * `printQuote` function
***/

// function that creates an HTML element - takes a class name and one of a quote object key's value as paramaters
const createElement = function(className, textContent){
  return `<p class= ${className}>${textContent}</p>`
 }

const printQuote = () => {
  
  let quoteBox = document.querySelector('#quote-box'); //snag the quoteBox code from the HTML document
  let randomQuote = getRandomQuote(quotes); //select a random quote from the array

  // this code deals with all the "non-essential" information for a quote: tag name, citation, year
  let tag = '';
  let citation = '';
  let year = '';

  if (randomQuote['tag']){
    tag = createElement('tag', randomQuote['tag'])
  }
  if (randomQuote['citation']){
    citation = createElement('citation', randomQuote['citation']);
  }
  if (randomQuote['year']){
    year = createElement('tag', 'year', randomQuote['year']);
  }

  //builds the HTML code to display the quote to the page
  quoteBox.innerHTML = `
    ${createElement('quote', randomQuote['quote'])}
    ${createElement('source', randomQuote['source'])}
    ${tag}${year}${citation}
  `
  
  //change the background color when the quote changes
  document.body.style.backgroundColor = randomQuote['color'];

  let timeout; //variable created for the setTimeout function, used to cause the quotes to rotate out automatically after 5 sec

  // creates the automatic transition of quotes after 5 seconds, and includes a clear option if the button was clicked
  if (timeout){ 
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => printQuote(), 5000)
}

printQuote(); //loads a quote from the quotes array on page load
setTimeout(() => document.body.style.transition = 'background-color 1s', 100); // add color transition after initial page load

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

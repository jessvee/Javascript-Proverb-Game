/**
	proverb.js
*/

var proverbList = 	[
						"Two wrongs don't make a right",
						"The pen is mightier than the sword",
						"When in Rome, do as the Romans do",
						"The squeaky wheel gets the grease",
						"When the going gets tough, the tough get going",
						"Fortune favours the bold",
						"People who live in glass houses should not throw stones",
						"Hope for the best, but prepare for the worst",
						"Better late than never",
						"Birds of a feather flock together",
						"Keep your friends close and your enemies closer",
						"A picture is worth a thousand words",
						"There's no such thing as a free lunch",
						"There's no place like home",
						"Discretion is the greater part of valour",
						"The early bird catches the worm",
						"Never look a gift horse in the mouth",
						"You can't make an omelet without breaking a few eggs",
						"You can't always get what you want",
						"A watched pot never boils",
					];
	var proverbChars = new Array(100);
	var turns = 0;
	var chances = 3;
	var score = 0;
	var guess;
	var proverb;
	
function start()
{
	var proverbNumber = Math.floor(Math.random() * 20);
	proverb = proverbList[proverbNumber];
	var occupiedCells = proverb.length + 1;
	
	//fill the array and game board table with the proverb
	for (var proverbIndex = 0; proverbIndex < 100; proverbIndex++)
	{
		turns = occupiedCells / 2;
		var button = document.getElementById(proverbIndex);
		var ch = proverb.charAt(proverbIndex);
		button.value = ' ';
		
		if ((ch == ' ') || (proverbIndex >= proverb.length))
		{
			//darken spaces that are out of play
			button.style.backgroundColor = "#291400";
			proverbChars[proverbIndex] = ' '; 
		}
		else
		{
			//lighten spaces in play, populate proverbChars with the proverb
			button.style.backgroundColor = "#CCFF66";
			proverbChars[proverbIndex] = ch;
		}
	}
	return proverb;
}
function reveal(index)
{
	if (turns > 0)
	{
		var thisButton = document.getElementById(index);
		thisButton.value = proverbChars[index];
		thisButton.style.fontWeight = "bold";
		turns--;
	}
	else
	{
		guess = prompt("You're out of turns. Make your guess now, in the text box below.");
		//alert(guess);
		if (guess.toLowerCase() == proverb.toLowerCase())
		{
			alert("Correct! You are a " + chances + " star guesser!");
			score = score + chances;
			var points = document.getElementById("score");
			points.innerHTML = score;
		}	
		else
		{
			chances--;
			alert("You have guessed incorrectly! You can have " + chances + " more guesses.");
		}
	}
}

function attempt()
{
	guess = prompt("What is the hidden proverb?", "");
	if (guess.toLowerCase() == proverb.toLowerCase())
	{
		alert("Correct! You are a " + chances + " star guesser!");
		score = score + chances;
		var points = document.getElementById("score");
		points.innerHTML = score;
	}
	else
	{
		chances--;
		alert("You have guessed incorrectly! You can have " + chances + " more guesses.");
	}
}

function giveUp()
{
	userDone = confirm("Are you sure you want to give up?");
	for (i = 0; i < proverb.length; i++)
	{
		if(userDone)
		{
			var thisButton = document.getElementById(i);
			thisButton.value = proverbChars[i];
		}
	}
}
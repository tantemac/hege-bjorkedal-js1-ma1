// question 1
var cat = {
	complain: function() {
		console.log("Meaw!");
	}
};

// question 2
console.dir(document.querySelector("h3"));
const heading = document.querySelector("h3");
console.dir(heading);

// question 3
heading.style.fontSize = "2em";

// question 4
h3.classList.add("subheading");
console.log(h3.className);

// question 5
document.querySelectorAll("p");
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

// question 6
document.querySelector(".results");
const resultsContainer = document.querySelector(".results");
console.dir(resultsContainer);
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7
const cats = [
	{
		name: "Blob",
		age: 10
	},
	{
		name: "Harold"
	},
	{
		name: "Blurt",
		age: 21
	}
];

function ourCats(catArray) {
	for (let i = 0; i < catArray.length; i++) {
		console.log(catArray[i].name);
	}
}

ourCats(cats);

// question 8
function ourCats2(catArray) {
	let result = "";
	for (var i = 0; i < catArray.length; i++) {
		result += "<h5>" + catArray[i].name + "</h5>";
	}
	return result;
}

// question 9
ourCats2(cats);

resultContainer.innerHTML = ourCats2(cats);

// question 10
function ourCats3(catArray) {
	let result = "";
	for (var i = 0; i < catArray.length; i++) {
		let name = catArray[i].name;
		let age = catArray[i].age ? catArray[i].age : "Age unknown";
		result += "<div><h5>" + name + "</h5><p>" + age + "</p></div>";
	}
	return result;
}

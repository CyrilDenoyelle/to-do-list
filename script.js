
/*
var main = document.createElement("div");
var divhtml = document.getElementById("main").appendChild(main);
main.className="ui";
main.classList.add('card');
main.innerHTML = "<div class='content'>" + "<h3>" + customers[i].first_name + " " +
customers[i].last_name + "</h3>" + "<br>" +
"<span class='category'>" + customers[i].role + "</span>" + "<br>" + "<p class='extra content'>" +
customers[i].description + "</p>" + "<br>" + "<div class='float right'>" + customers[i].phone + "<br>" + customers[i].email 
+ "</div>" + "</div>";

*/

var recever = document.getElementById('recever');
var adding = document.getElementById('addind');

function addChildUl() {
	var text = prompt("COUCOU");
	var textnode = document.createTextNode(text);

	var list = document.createElement("LI");
	list.appendChild(textnode);

	var span = document.createElement("SPAN");
	var cross = document.createTextNode("\u00D7");
	span.appendChild(cross);

	span.className += "ui float right";

	span.addEventListener("click", function(){
		var thisparent = this.parentElement;
		thisparent.style.display = "none";
	});

	list.appendChild(span);

	recever.appendChild(list);
}

function addChildLi() {
	var text = prompt("COUCOU");
	var textnode = document.createTextNode(text);

	var list = document.createElement("LI");
	list.appendChild(textnode);

	var span = document.createElement("SPAN");
	var cross = document.createTextNode("\u00D7");
	span.appendChild(cross);

	span.className += "ui float right";

	span.addEventListener("click", function(){
		var thisparent = this.parentElement;
		thisparent.style.display = "none";
	});

	list.appendChild(span);

	recever.appendChild(list);
}

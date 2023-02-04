//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () { 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var table = document.getElementById("myTable");
var addNew = document.getElementById("add");
var count = table.rows.length;

function initialize() {
  for (var i = 1; i < table.rows.length; i += 2) {
    table.rows[i].innerHTML += "<td></td>";
  }
  for (var i = 2; i < table.rows.length; i += 2) {
    table.rows[i].style.display = "none";
  }
  table.rows[0].innerHTML += "<th>Edit</th>";
}

function addEventListeners() {
  console.log("addEventListeners", table.rows.length);
  for (let i = 1; i < table.rows.length; i += 2) {
    table.rows[i].cells[0].children[0].addEventListener("click", check);
    table.rows[i].cells[0].children[3].addEventListener("click", () => {
      showBottom(i);
    });
    table.rows[i].cells[8].addEventListener("click", () => {
      table.rows[i].remove();
      table.rows[i].remove();
      check();
    });
    table.rows[i].cells[9].addEventListener("click", () => {
      prompt("Edit Details");
    });
  }
}

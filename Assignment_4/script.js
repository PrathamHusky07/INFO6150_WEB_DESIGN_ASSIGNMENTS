var validatefname = false;
firstName.addEventListener("keyup", () => {
    const firstName = document.getElementById("firstName");
    const pattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

    if (firstName.value.match(pattern)) {
        firstName.style.color = "green";
        document.getElementById("fname").innerHTML = "";
        validatefname = true;
    }
    else {
        firstName.style.color = "red";
        document.getElementById("fname").innerHTML = "Please enter valid First Name";
        validatefname = false;
    }
})

var validatelname = false;
lastName.addEventListener("keyup", () => {
    const lastName = document.getElementById("lastName");
    const pattern = /^[A-Za-z]+$/;

    if (lastName.value.match(pattern)) {
        lastName.style.color = "green";
        document.getElementById("lname").innerHTML = "";
        validatelname = true;
    }
    else {
        lastName.style.color = "red";
        document.getElementById("lname").innerHTML = "Please enter valid Last Name";
        validatelname = false;
    }
})

var validateemail = false;
emailId.addEventListener("keyup", () => {
    const emailId = document.getElementById("emailId");
    const domain = "northeastern.edu";
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailId.value.match(pattern) && emailId.value.indexOf(domain) != -1) {
        emailId.style.color = "green";
        document.getElementById("email").innerHTML = "";
        validateemail = true;
    }
    else {
        emailId.style.color = "red";
        document.getElementById("email").innerHTML = "Please enter valid Email Id";
        validateemail = false;
    }
})

var validatephone = false;
phoneNumber.addEventListener("keyup", () => {
    const phoneNumber = document.getElementById("phoneNumber");
    const pattern = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if (phoneNumber.value.match(pattern)) {
        phoneNumber.style.color = "green";
        document.getElementById("phone").innerHTML = "";
        validatephone = true;
    }
    else {
        phoneNumber.style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter valid Phone Number";
        validatephone = false;
    }
})

var validatecity = false;
city.addEventListener("keyup", () => {
    const city = document.getElementById("city");
    const pattern = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

    if (city.value.match(pattern)) {
        city.style.color = "green";
        document.getElementById("cityid").innerHTML = "";
        validatecity = true;
    }
    else {
        city.style.color = "red";
        document.getElementById("cityid").innerHTML = "Please enter valid City";
        validatecity = false;
    }
})

var validatestate = false;
state.addEventListener("keyup", () => {
    const state = document.getElementById("state");
    const pattern = /^[A-Za-z]+$/;

    if (state.value.match(pattern)) {
        state.style.color = "green";
        document.getElementById("stateid").innerHTML = "";
        validatestate = true;
    }
    else {
        state.style.color = "red";
        document.getElementById("stateid").innerHTML = "Please enter valid State";
        validatestate = false;
    }
})

var validatezip = false;
zipcode.addEventListener("keyup", () => {
    const zipcode = document.getElementById("zipcode");
    const pattern = /^\d{5}$/;

    if (zipcode.value.match(pattern)) {
        zipcode.style.color = "green";
        document.getElementById("zip").innerHTML = "";
        validatezip = true;
    }
    else {
        zipcode.style.color = "red";
        document.getElementById("zip").innerHTML = "Please enter valid Zip Code";
        validatezip = false;
    }
})

var validatestorelocation = false;
storelocation.addEventListener("keyup", () => {
    const storelocation = document.getElementById("storelocation");
    const pattern = /^[A-Za-z]+$/;

    if (storelocation.value.match(pattern)) {
      storelocation.style.color = "green";
        document.getElementById("stateid").innerHTML = "";
        validatestorelocation = true;
    }
    else {
      storelocation.style.color = "red";
        document.getElementById("storelocationid").innerHTML = "Please enter a valid store location";
        validatestorelocation = false;
    }
})


var validationcheckbox = false;
var validationcheckboxdrink = false;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const check_box = document.forms[0]["source"];
    const check_box_dish = document.forms[0]["dish"];
    const check_box_dishtype = document.forms[0]["dishtype"];
    const elements = ["title", "firstName", "lastName", "emailId", "phoneNumber", "streetAddress1", "city", "state", "zipcode", "storelocation", "comments"];
    for (i = 0; i < elements.length; i++) {
        if (document.forms[0][elements[i]].value == "") {
            alert(" Please fill " + elements[i] + " field");
            break;
        }
        if (i == elements.length - 1) {
            if (check_box[0].checked == false && check_box[1].checked == false && check_box[2].checked == false) {
                alert(" Please select a checkbox for (How did you hear)");
                validationcheckbox = false
                break;
            }
            if (check_box_dishtype.value == "select") {
                alert(" Please select a dropdown for (Exclusive Tatte's Menu)");
                validationcheckbox = false;
            }
            if (check_box_dish[0].checked == false && check_box_dish[1].checked == false && check_box_dish[2].checked == false) {
                alert(" Please select an option for (Exclusive Tatte's Menu)");
                validationcheckbox = false;
                break;
            }
        }
    }
    if ((check_box_dish[0].checked == true || check_box_dish[1].checked == true || check_box_dish[2].checked == true) && validatefname && validatelname && validateemail && validatephone && validatecity && validatestate
        && validatezip && document.getElementById("streetAddress1") != "") {
        if (document.getElementById("reason").value == "") {
            alert(" Please fill reason field");
        }
        else {
            validationcheckbox = true;
        }
    }

    const titles = document.querySelectorAll('input[name="title"]');
    const source = document.querySelectorAll("#source");
    for (i = 0; i < titles.length; i++) {
        if (titles[i].checked) {
            var titleans = titles[i].value;
        }
    }
    var sourceans = "";
    const hear = document.getElementsByName("source");
    for (i = 0; i < hear.length; i++) {
        if (hear[i].checked && i == hear.length - 1) {
            sourceans += hear[i].value;
            break;
        }
        else {
            if (hear[i].checked) {
                sourceans += hear[i].value + ", ";
            }
        }
    }
    const dishes = document.querySelectorAll('input[name="dish"]');
    for (i = 0; i < dishes.length; i++) {
        if (dishes[i].checked) {
            var dishans = dishes[i].value;
        }
    }
    if (validationcheckbox && validatefname && validatelname && validateemail && validatephone && validatecity && validatestate
        && validatezip && validatestorelocation && document.getElementById("streetAddress1") != "") {

        let template = `
                <tr>
                <td>${titleans}</td>
                <td>${document.getElementById("firstName").value}</td>
                <td>${document.getElementById("lastName").value}</td>
                <td>${document.getElementById("emailId").value}</td>
                <td>${document.getElementById("phoneNumber").value}</td>
                <td>${document.getElementById("streetAddress1").value}</td>
                <td>${document.getElementById("streetAddress2").value}</td>
                <td>${document.getElementById("city").value}</td>
                <td>${document.getElementById("state").value}</td>
                <td>${document.getElementById("zipcode").value}</td>
                <td>${document.getElementById("storelocation").value}</td>
                <td>${sourceans}</td>
                <td>${document.getElementById("comments").value}</td>
                <td>${check_box_dishtype.value}</td>
                <td>${dishans}</td>
                <td>${document.getElementById("reason").value}</td>
                </tr>
        `;
        table.innerHTML += template;
        alert("Your details have been updated");
        form.reset();
        checkbox_dish.innerHTML = `
            <br>
            `;
        preference.innerHTML = "";
        validationcheckbox = false;
        validatefname = false;
        validatelname = false;
        validateemail = false;
        validatephone = false;
        validatecity = false;
        validatestate = false;
        validatestorelocation = false;
    }
})

var validationdrink = false;
dishtype.addEventListener('change', (e) => {

    if (e.target.value == 'Sandwiches') {
        checkbox_dish.style.display = 'block';
        checkbox_dish.innerHTML = `
        <br>
        <input id="check1" type='radio' name="dish" value="Breakfast Sandwich"/> Breakfast Sandwich
		    <input id="check2" type='radio' name="dish" value="Chicken Pita"/> Chicken Pita
		    <input id="check3" type='radio' name="dish" value="Croque Madam"/> Croque Madam
        <input id="check4" type='radio' name="dish" value="Halloumi Sunnyside-Up"/> Halloumi Sunnyside-Up
        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Shakshukas') {
        checkbox_dish.style.display = 'block';
        checkbox_dish.innerHTML = `
        <br>
        <input id="check1" type='radio' name="dish" value="Traditional"/> Traditional
		    <input id="check2" type='radio' name="dish" value="Lamb & Meatball"/> Lamb & Meatball
		    <input id="check3" type='radio' name="dish" value="Potato, Mushroom & Bacon"/> Potato, Mushroom & Bacon
        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Desserts') {
        checkbox_dish.style.display = 'block';
        checkbox_dish.innerHTML = `
        <br>
        <input id="check1" type='radio' name="dish" value="Dark Chocolate Mousse Cake"/> Dark Chocolate Mousse Cake
		    <input id="check2" type='radio' name="dish" value="Tiramisu"/> Tiramisu
		    <input id="check3" type='radio' name="dish" value="Halva Bomb"/> Halva Bomb
        <input id="check4" type='radio' name="dish" value="Espresso Mocha"/> Espresso Mocha

        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Cheesecakes') {
        checkbox_dish.style.display = 'block';
        checkbox_dish.innerHTML = `
        <br>
        <input id="check1" type='radio' name="dish" value="Blue Berry"/> Blue Berry
		    <input id="check2" type='radio' name="dish" value="Raspberry"/> Raspberry
		    <input id="check3" type='radio' name="dish" value="Strawberry"/> Strawberry
        <input id="check4" type='radio' name="dish" value="Crumbs"/>Crumbs

        <br><br>
        `;

        checkandtext();
    }
    else if (e.target.value == 'Miscellaneous') {
        checkbox_dish.style.display = 'block';
        checkbox_dish.innerHTML = `
        <br>
        <input id="check1" type='radio' name="dish" value="Hot Chocolate"/> Hot Chocolate
		    <input id="check2" type='radio' name="dish" value="Americano"/> Americano
		    <input id="check3" type='radio' name="dish" value="Drip Coffee"/> Drip Coffee
        <input id="check4" type='radio' name="dish" value="Nitro"/> Nitro

        <br><br>
        `;

        checkandtext();
    }
    else {
        checkbox_dish.style.display = "none";
        preference.style.display = "none";

        checkbox_dish.innerHTML = "";
    }

})

function checkandtext() {
    const check1 = document.getElementById("check1");
    check1.addEventListener("click", () => {
        if (check1.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
				<label for="reason">Customizations*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })

    const check2 = document.getElementById("check2");
    check2.addEventListener("click", () => {
        if (check2.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
                <label for="reason">Customizations*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })

    const check3 = document.getElementById("check3");
    check3.addEventListener("click", () => {
        if (check3.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
                <label for="reason">Customizations*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })

    const check4 = document.getElementById("check4");
    check4.addEventListener("click", () => {
        if (check4.checked) {
            preference.style.display = 'block';
            preference.innerHTML = `
                <label for="reason">Customizations*: </label>
                <textarea name="reason" id="reason" cols="25" rows="5"></textarea>
                `;
        }
        else {
            preference.innerHTML = "";
            preference.style.display = "none";
        }
    })



}
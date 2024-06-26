const div = document.createElement("div");
div.setAttribute("class", "heading");
const h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerText = "FORM SUBMISSION";
div.append(h1);
document.body.append(div);
const form = document.createElement("form");
form.setAttribute("id", "sform");
form.setAttribute("class", "sform");
const container = document.createElement("div");
container.setAttribute("class", "con");
const fNameLabel = document.createElement("label");
fNameLabel.setAttribute("id", "name-label");
fNameLabel.innerText = "First-Name : ";
const fNameInput = document.createElement("input");
fNameInput.setAttribute("type", "text");
fNameInput.setAttribute("id", "first-name");
fNameInput.setAttribute("placeholder", "First-Name");
fNameInput.required = true;
container.append(fNameLabel, fNameInput);
const lNameLabel = document.createElement("label");
lNameLabel.innerText = "Last-Name : ";
const lNameInput = document.createElement("input");
lNameInput.setAttribute("type", "text");
lNameInput.setAttribute("id", "last-name");
lNameInput.setAttribute("placeholder", "Last-Name");
lNameInput.required = true;
container.append(lNameLabel, lNameInput);
const eLabel = document.createElement("label");
eLabel.setAttribute("id", "email-label");
eLabel.innerText = "E-mail : ";
const eInput = document.createElement("input");
eInput.setAttribute("type", "email");
eInput.setAttribute("id", "email");
eInput.setAttribute("placeholder", "E-mail");
eInput.required = true;
container.append(eLabel, eInput);
const addrLabel = document.createElement("label");
addrLabel.innerText = "Address : ";
const addrInput = document.createElement("input");
addrInput.setAttribute("type", "text");
addrInput.setAttribute("id", "address");
addrInput.setAttribute("placeholder", "Address");
addrInput.required = true;
container.append(addrLabel, addrInput);
const pinLabel = document.createElement("label");
pinLabel.innerText = "Pincode : ";
const pinInput = document.createElement("input");
pinInput.setAttribute("type", "text");
pinInput.setAttribute("id", "pincode");
pinInput.setAttribute("placeholder", "Pincode");
pinInput.required = true;
container.append(pinLabel, pinInput);
const GenderLabel = document.createElement("label");
GenderLabel.innerText = "Gender : ";
const mLabel = document.createElement("label");
mLabel.innerText = "Male";
const mInput = document.createElement("input");
mInput.setAttribute("type", "radio");
mInput.setAttribute("id", "male");
mInput.setAttribute("value", "male");
mInput.setAttribute("name", "gender");
mInput.required = true;
GenderLabel.append(mLabel, mInput);

const fmLabel = document.createElement("label");
fmLabel.innerText = "Female";
const fmInput = document.createElement("input");
fmInput.setAttribute("type", "radio");
fmInput.setAttribute("id", "female");
fmInput.setAttribute("value", "female");
fmInput.setAttribute("name", "gender");
fmInput.required = true;
const b=document.createElement("br");
GenderLabel.append(fmLabel, fmInput,b);
container.append(GenderLabel);
const foodLabel = document.createElement("label");
const br=document.createElement("br");
foodLabel.innerText = "Choice of Food : (must choose atleat 2 out of 5 options) ";
foodLabel.setAttribute("id", "foodLabel");
const food1Label = document.createElement("label");
food1Label.innerText = "North Indian";
const food1Input = document.createElement("input");
food1Input.setAttribute("type", "checkbox");
food1Input.setAttribute("id", "food1");
food1Input.setAttribute("value", "North Indian");
food1Input.setAttribute("name", "food");
const br1=document.createElement("br");
foodLabel.append(food1Label, food1Input,br1);
const food2Label = document.createElement("label");
food2Label.innerText = "south Indian";
const food2Input = document.createElement("input");
food2Input.setAttribute("type", "checkbox");
food2Input.setAttribute("id", "food2");
food2Input.setAttribute("value", "south Indian");
food2Input.setAttribute("name", "food");
foodLabel.append(food2Label, food2Input);
const br2=document.createElement("br");
const food3Label = document.createElement("label");
food3Label.innerText = "chinese";
const food3Input = document.createElement("input");
food3Input.setAttribute("type", "checkbox");
food3Input.setAttribute("id", "food3");
food3Input.setAttribute("value", "chinese");
food3Input.setAttribute("name", "food");
foodLabel.append(food3Label, food3Input);
const food4Label = document.createElement("label");
food4Label.innerText = "japanese";
const food4Input = document.createElement("input");
food4Input.setAttribute("type", "checkbox");
food4Input.setAttribute("id", "food4");
food4Input.setAttribute("value", "japanese");
food4Input.setAttribute("name", "food");
foodLabel.append(food4Label, food4Input);
const food5Label = document.createElement("label");
food5Label.innerText = "sea foods";
const food5Input = document.createElement("input");
food5Input.setAttribute("type", "checkbox");
food5Input.setAttribute("id", "food5");
food5Input.setAttribute("value", "sea foods");
food5Input.setAttribute("name", "food");
foodLabel.append(food5Label, food5Input);
container.append(foodLabel);
const stLabel = document.createElement("label");
stLabel.innerText = "State : ";
const stInput = document.createElement("input");
stInput.setAttribute("type", "text");
stInput.setAttribute("id", "state");
stInput.setAttribute("placeholder", "State");
stInput.required = true;
container.append(stLabel, stInput);
const countryLabel = document.createElement("label");
countryLabel.innerText = "Country : ";
const countryInput = document.createElement("input");
countryInput.setAttribute("type", "text");
countryInput.setAttribute("id", "country");
countryInput.setAttribute("placeholder", "Country");
countryInput.required = true;
container.append(countryLabel, countryInput);
const suggestionsLabel = document.createElement("label");
suggestionsLabel.innerText = "Suggestions: ";
const suggestionsTextArea = document.createElement("textarea");
suggestionsTextArea.setAttribute("id", "comments");
container.append(suggestionsLabel, suggestionsTextArea);
const table = document.createElement("table");
table.setAttribute("id", "tableData");
const thead = document.createElement("thead");
const trow = document.createElement("tr");
const th1 = document.createElement("th");
th1.innerText = "State";
const th2 = document.createElement("th");
th2.innerText = "First Name";
const th3 = document.createElement("th");
th3.innerText = "Last Name";
const th4 = document.createElement("th");
th4.innerText = "Address";
const th5 = document.createElement("th");
th5.innerText = "Pincode";
const th6 = document.createElement("th");
th6.innerText = "Gender";
const th7 = document.createElement("th");
th7.innerText = "Food";
const th8 = document.createElement("th");
th8.innerText = "Country";
trow.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(trow);
table.append(thead);
const tbody = document.createElement("tbody");
tbody.setAttribute("id", "table-body");
const submitButton = document.createElement("button");
submitButton.innerText = "submit";
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("class", "btn btn-danger");
submitButton.setAttribute("id", "submit");
container.append(submitButton);
form.append(container);
document.body.append(form);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fNameInput = document.getElementById("first-name");
  let lNameInput = document.getElementById("last-name");
  let eInput = document.getElementById("email");
  let addrInput = document.getElementById("address");
  let pinInput = document.getElementById("pincode");
  let GenderInputs = document.getElementsByName("gender");
  let foodChoiceInputs = document.querySelectorAll(
    'input[name="food"]:checked');
  let stInput = document.getElementById("state");
  let countryInput = document.getElementById("country");
  let suggestions = document.getElementById("comments");
  let fName = fNameInput.value;
  let lName = lNameInput.value;
  let addr = addrInput.value;
  let pin = pinInput.value;
  let Gender = GenderInputs.value;
  let foodChoices = Array.from(foodChoiceInputs)
    .map((checkbox) => checkbox.value)
    .join(", ");
  let st = stInput.value;
  let country = countryInput.value;  
  let table = document.getElementById("tableData");
  let tbody = document.getElementById("table-body");
  let newRow = table.insertRow(table.rows.length);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);
  let cell7 = newRow.insertCell(6);
  let cell8 = newRow.insertCell(7);
  cell1.innerHTML = fName;
  cell2.innerHTML = lName;
  cell3.innerHTML = addr;
  cell4.innerHTML = pin;
  cell5.innerHTML = Gender;
  cell6.innerHTML = foodChoices;
  cell7.innerHTML = st;
  cell8.innerHTML = country;
  newRow.append(cell1, cell2, cell3, cell4, cell5, cell6,cell7, cell8);
  fNameInput.value = "";
  lNameInput.value = "";
  addrInput.value = "";
  eInput.value = "";
  pinInput.value = "";
  GenderInputs.value="";
  foodChoiceInputs.value="";
  stInput.value = "";
  countryInput.value = "";
  suggestions.value = "";
  table.append(tbody);
});
const P = document.createElement("P");
P.setAttribute("class", "heading");
const h3 = document.createElement("h3");
h3.setAttribute("id", "title");
h3.innerText = "TEMPORARY DATABASE";
P.append(h3);
document.body.append(P);
document.body.append(table);
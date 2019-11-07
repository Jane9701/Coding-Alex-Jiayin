console.log("Hello")
const topicList = document.querySelector("#topicList");
topicList.innerHTML = "Hello";

//create item
const item = document.createElement("div");
item.innerHTML ="Hello";
topicList.appendChild(item);
//create rule

const rule = document.createElement("hr");
topicList.appendChild(rule);

const label = document.createElement("label");
item.appendChild(label);

const checkbox = document.createElement("input");
checkbox.setAttribute("type","checkbox");
checkbox.setAttribute("name","topic");
label.appendchild(checkbox);

const labelText = document.createTextNode("HTML");
label.appendchild(labelText);


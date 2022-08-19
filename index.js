
const newP= document.createElement("p");
const newT = document.createTextNode("Hi there and greetings!");
document.body.appendChild(newT);
console.log(newP);

const ul = document.createElement("ul");
for (let i = 0; i < 9; i++) {
    const li = document.createElement("li");
    li.textContent=(1+ i).toString();
    ul.append(li);


 }
  document.body.append(ul);


  const main =document.getElementById("main")
  main.innerHTML=
   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
main.style.height="300px";
main.style.backgroundColor = "#ff9f9f";

main.classList.add("naz");
main.classList.remove("dog");

const ul_1 = document.getElementsByTagName("ul")[0];
const secondChild = ul_1.querySelector("li:nth-child(2)");
const Child_9 =  ul_1.querySelector("li:nth-child(5)");
ul.removeChild(secondChild);
ul.removeChild(Child_9);

ul.remove();
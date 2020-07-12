
const text = document.querySelector(".friv");
console.log(text);
const strtext = text.textContent;
console.log(strtext);
const splittext = strtext.split("");
text.textContent = "";
for(let i = 0; i < splittext.length; i++) {
    text.innerHTML += "<span>" + splittext[i] + "</span>";

};

let char = 0;
let timer;
timer = setInterval(onTick,90);


function onTick(){
    console.log(char);
    let span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char += 1;
    if(char === splittext.length)
    {
        clearInterval(timer);
    }  
};

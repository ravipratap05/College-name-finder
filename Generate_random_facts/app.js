// show the random facts
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch (e){
        return "No fact found.."
    }
}

// show college list on the behalf of input
let urls = "http://universities.hipolabs.com/search?name=";
let btns = document.querySelector("#btn");

btns.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let college = await getColleges(state);
    show(college);
});

function show(college){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of college){
        console.log(col.name);

        let li = document.createElement("li");
        details = col.name , col.state;
        li.innerText = details;
        list.appendChild(li);
    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(urls + state);
        return res.data;
    }catch (e) {
        console.log("error - ", e);
        return [];
    }
}
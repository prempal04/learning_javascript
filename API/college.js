let url3 = "http://universities.hipolabs.com/search";

let btn2 = document.querySelector (".btn2");
btn2.addEventListener("click", async ()=> {
    let state = document.querySelector("input").value.trim();

    if (!state) {
        show([]);
        return;
    }

    let collArr = await getColleges(state);
    show(collArr);

});

function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";

    for (let col of collArr) {
        console.log(col.name); 
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
 

async function getColleges(state) {
    try{
        let res = await axios.get(url3, {
            params: {
                country: "India",
                "state-province": state
            }
        });
        return res.data.filter((college) =>
            college.country === "India" &&
            college["state-province"]?.trim().toLowerCase() === state.toLowerCase()
        );
    }catch(e){
        console.log("error: ", e);
        return [];         
    }
}

const url = "https://recreate-fb07.restdb.io/rest/food?q={}&max=15";

const options = {
    headers: {
        "x-apikey": "613f394f43cedb6d1f97f031",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })

    .then((data) => {
        handData(data);
        console.log(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });




function handData(data) {

    data.forEach(showfoodsecond);
    data.forEach(showfood);
}


// -------------------------------------Clone template and put it in place---------------------------------

function showfood(food) {

    // grab template and clone it
    const templateSelection = document.querySelector(".templatecopy").content;
    const cloneOfTemplate = templateSelection.cloneNode(true);


    // // // change content
    cloneOfTemplate.querySelector(".photofood").src = `${food.coverimg}`;
    cloneOfTemplate.querySelector(".smalllogofood").src = `${food.miniimg}`;


    cloneOfTemplate.querySelector(".foodname").textContent = `${food.title}`;
    cloneOfTemplate.querySelector(".source").textContent = `${food.source}`;

    cloneOfTemplate.querySelector(".rating").textContent = `${food.rating}`;
    cloneOfTemplate.querySelector(".time").textContent = `${food.year}`;

    


    // // // put clone in the place
    const gridwithfood = document.querySelector("#firstfood");
    gridwithfood.appendChild(cloneOfTemplate);
};

function showfoodsecond(food) {

    // grab template and clone it
    const templateSelection = document.querySelector(".templatecopy").content;
    const cloneOfTemplatesecond = templateSelection.cloneNode(true);


    // // // change content
    cloneOfTemplatesecond.querySelector(".photofood").src = `${food.coverimg}`;
    cloneOfTemplatesecond.querySelector(".smalllogofood").src = `${food.miniimg}`;


    cloneOfTemplatesecond.querySelector(".foodname").textContent = `${food.title}`;
    cloneOfTemplatesecond.querySelector(".source").textContent = `${food.source}`;

    cloneOfTemplatesecond.querySelector(".rating").textContent = `${food.rating}`;
    cloneOfTemplatesecond.querySelector(".time").textContent = `${food.year}`;

    


    // // // put clone in the place
    const gridwithfoodsecond = document.querySelector("#secondfood");
    gridwithfoodsecond.appendChild(cloneOfTemplatesecond);
};

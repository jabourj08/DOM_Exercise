class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["green", "white", "red"])


function SwitchCountry() {
    //let input = "USA";
    let input = document.getElementById("CountryList").value;
    let country;
    let targetNode1 = document.getElementById("CountryName");
    let targetNode2 = document.getElementById("OfficialLanguage");
    let targetNode3 = document.getElementById("HelloWorld");
    let targetNode4 = document.getElementById("Flag");

    if (input === "USA") {
        //set country to usa 
        country = usa;
        targetNode4.src = "images/usa.jpg";
    } else if (input === "Mexico") {
        country = mexico;
        targetNode4.src = "images/mexico.jpg";
    } else if (input === "Algeria") {
        country = algeria;
        targetNode4.src = "images/algeria.jpg";
    }

    targetNode1.innerText = country.name;
    targetNode2.innerText = country.lang;
    targetNode3.innerText = country.greeting;

    DisplayColors(country);

}

function DisplayColors(country) {
    let color1 = document.getElementById("Color1");
    let color2 = document.getElementById("Color2");
    let color3 = document.getElementById("Color3");

    color1.style.backgroundColor = country.colors[0];
    color2.style.backgroundColor = country.colors[1];
    color3.style.backgroundColor = country.colors[2];
}
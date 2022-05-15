clicked = () => {
    let books = document.getElementById("books");
    if (books.style.display === "none") {
        books.style.display = "block";
        document.getElementById('div1').scrollIntoView();
    }
    else {
        books.style.display = "none";
    }
}

alsoclicked = () => {
    let cycle = document.getElementById("cycle");
    if (cycle.style.display === "none") {
        cycle.style.display = "block";
        document.getElementById('div2').scrollIntoView();
    }
    else {
        cycle.style.display = "none";
    }
}

clickedagain = () => {
    let places = document.getElementById("places");
    if (places.style.display === "none") {
        places.style.display = "block";
        document.getElementById('div3').scrollIntoView();
    }
    else {
        places.style.display = "none";
    }
}

alsoclickedagain = () => {
    let tech = document.getElementById("tech");
    if (tech.style.display === "none") {
        tech.style.display = "block";
        document.getElementById('div4').scrollIntoView();
    }
    else {
        tech.style.display = "none";
    }
}
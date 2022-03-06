clicked = () => {
    const a = document.createElement('ul');
    a.innerHTML=  "<li>Harry Potter</li><li>Percy Jackson</li><li>The Fault In Our Stars</li><li>The Man From The Egg</li><li>The Upside Down King</li>";
    document.getElementById('div1').appendChild(a)
    console.log("books unlocked")
}

alsoclicked = () => {
    const b = document.createElement('ul');
    b.innerHTML = "<li>increased cardiovascular fitness</li><li>increased muscle strength and flexibility</li><li>improved joint mobility</li><li>strengthened bones</li><li>decreased body fat levels</li><li>improved posture and coordination</li><li>prevention or management of disease</li>";
    document.getElementById('div2').appendChild(b)
    console.log("benefits of cycling unlocked")
}

clickedagain = () => {
    const c = document.createElement('ul');
    c.innerHTML = "<li>Dubai</li><li>Kerala</li><li>Karnataka</li><li>Tamil Nadu</li><li>Oman</li><li>Shimla</li><li>Chandigarh</li><li>Barog</li><li>Agra</li>";
    document.getElementById('div3').appendChild(c)
    console.log("places unlocked")
}

alsoclickedagain = () => {
    const d = document.createElement('ul');
    d.innerHTML = "<li>Over 6,000 new computer viruses are created and released every month.</li><li>The first computer mouse was made from wood</li><li>Computer Security Day is celebrated on November 30<sup>th</sup>.</li><li>Yahoo’s original name was a mouthful.</li><li>The first commercial text message was sent in 1992.</li><li>Until 2010, carrier pigeons were faster than the internet.</li>";
    document.getElementById('div4').appendChild(d)
    console.log("tech facts unlocked")
}
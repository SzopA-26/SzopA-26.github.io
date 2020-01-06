var imgChange = 1;
setInterval( function() {
    if (imgChange > 0) {
        document.getElementById("icon-party").src = "./img/party-icon-2.png"
    } else {
        document.getElementById("icon-party").src = "./img/party-icon-1.png"
    }
    imgChange *= -1;
}, 350 );

var hColor = 1;
setInterval( function() {
    if (hColor > 0) {
        document.getElementById("header").style.color = "#2f00ff";
    } else {
        document.getElementById("header").style.color = "#d13434";
    }
    hColor *= -1;
}, 150 );

function labelCheck() {
    let giftcheck = document.getElementById("gift-check");
    giftcheck.checked = !giftcheck.checked;
}

function addBtnOnClicked() {
    let name = document.getElementById("name-input").value;
    let giftcheck = document.getElementById("gift-check");
    document.getElementById("name-input").value = "";
    if (giftcheck.checked) {
        console.log("check")
        giftcheck.checked = false;
    }
    console.log(name)
}

console.log("test")
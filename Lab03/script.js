var imgChange = 1;
setInterval( function() {
    if (imgChange > 0) {
        document.getElementById("icon-party").src = "./img/party-icon-2.png"
    } else {
        document.getElementById("icon-party").src = "./img/party-icon-1.png"
    }
    imgChange *= -1;
}, 350 );

function labelCheck() {
    let giftcheck = document.getElementById("gift-check");
    giftcheck.checked = !giftcheck.checked;
}

var Guests = [];
var Gifts = [];
function addBtnOnClicked() {
    let name = document.getElementById("name-input").value;
    let giftcheck = document.getElementById("gift-check");
    
    if (name == "") {
        window.alert("Name is empty.")
    } else if (!name.match(/^[A-Za-zก-๏]*$/)) {
        window.alert("Name is invalid.")
    } else if (Guests.indexOf(name) != -1) {
        window.alert("This name is already exist.")
    } else {
        Guests.push(name);
        let nodeLi = document.createElement("li");
        let text = document.createTextNode(name+" ");
        nodeLi.appendChild(text);
        
        if (giftcheck.checked) {
            Gifts.push(1);
            let nodeI = document.createElement("i");
            nodeI.className = "fas fa-gift";
            nodeLi.appendChild(nodeI);
        } else {
            Gifts.push(0);
        }
        document.getElementById("name-list").appendChild(nodeLi);
    }
    
    document.getElementById("name-input").value = "";
    giftcheck.checked = false;
    document.getElementById("list-header").innerHTML = "ผู้เข้าร่วมงาน(" + Guests.length + ")";
}

function ranBtnOnClicked() {
    let ranGuests = [];
    let NotGive = [];
    for (let i=0; i<Guests.length; i++) {
        if (Gifts[i] == 1) {
            ranGuests.push(Guests[i]);
            NotGive.push(Guests[i]);
        }
    }
    if (ranGuests.length < 2)
        return;

    document.getElementById("random-list").innerHTML = "";
        
    for (let i=0; i<ranGuests.length; i++) {
        let guestGiven;
        do {
            guestGiven = NotGive[Math.floor(Math.random() * NotGive.length)];
        } while (ranGuests[i] == guestGiven)
        NotGive.splice(NotGive.indexOf(guestGiven) ,1);

        let node = document.createElement("div");
        let text = document.createTextNode(ranGuests[i]+" <--- ")
        node.appendChild(text);
        let nodeI = document.createElement("i");
        nodeI.className = "fas fa-gift";
        node.appendChild(nodeI);
        text = document.createTextNode(" ---- "+guestGiven);
        node.appendChild(text);
        document.getElementById("random-list").appendChild(node);
    }
    
    let node = document.createElement("HR");
    document.getElementById("random-list").appendChild(node);
    
    for (let i=0; i<ranGuests.length; i++) {
        console.log(ranGuests[i]);
    }
}

var name_input = document.getElementById("name-input");
name_input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});


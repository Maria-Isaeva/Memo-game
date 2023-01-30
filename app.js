'use strict';

window.onload = function(){
    var numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    let numLen = numbers.length;
    for (let i = 0; i <numLen; i++) {
        let currLen = numbers.length;
        let randomItem = Math.floor(Math.random()*numbers.length)
        let idBtn = 'btn'+i; 
        //console.log(idBtn);
        //document.getElementById(idBtn).innerText = numbers[randomItem];
        document.getElementById(idBtn).value = numbers[randomItem];
        numbers.splice(randomItem, 1);
    }
};

var openBtn = [];

function funClick(e) {
    console.log('current btn: ' + e.id);
    console.log('current class: ' + document.getElementById(e.id).className);
    console.log('current class: ' + e.className);
    e.className = 'btn_open';
    e.innerText = e.value;
    e.setAttribute('onclick','');

    openBtn.push(e.id);
    console.log ('cnt open : ' + openBtn.length);

    if (openBtn.length === 2){
        console.log('open two button');
        console.log(openBtn);
        // check value opened buttons
        if (document.getElementById(openBtn[0]).value === document.getElementById(openBtn[1]).value){
            //if equal set to matched
            setTimeout(() => {
                document.getElementById(openBtn[0]).className = "btn_matched";
                document.getElementById(openBtn[1]).className = "btn_matched";
                openBtn.splice(0,2);
                console.log('match button');
                console.log(openBtn);
            }, 1000);
        } else {
            //if not equal set to wrong, delay and then set to closed
            document.getElementById(openBtn[0]).className = "btn_wrong";
            document.getElementById(openBtn[1]).className = "btn_wrong";
            setTimeout(() => {
                document.getElementById(openBtn[0]).className = "btn_closed";
                document.getElementById(openBtn[1]).className = "btn_closed";
                document.getElementById(openBtn[0]).innerText = '*';
                document.getElementById(openBtn[1]).innerText = '*';
                document.getElementById(openBtn[0]).setAttribute('onclick',"funClick(this)");
                document.getElementById(openBtn[1]).setAttribute('onclick',"funClick(this)");
                openBtn.splice(0,2);
                console.log('not match button');
                console.log(openBtn);
            }, 1000);
        }
    }
};

function switchTheme(e) {
    document.body.className = e.value;
}
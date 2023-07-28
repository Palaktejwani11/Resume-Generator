function addNewaqField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewskField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter here");

    skOb=document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);
}

function addNewweField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewceField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ceField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter here");

    ceOb=document.getElementById("ce");
    let ceAddButtonOb = document.getElementById("ceAddButton");

    ceOb.insertBefore(newNode,ceAddButtonOb);
}

//going to generate resume
/*function generateResume(){
    //console.log("generating...")
       let nameField = document.getElementById("nameField").Value;
        
       let nameT1 = document.getElementById("nameT1");

       nameT1.innerHTML = nameField; 
       //direct
       document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTMl = document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTMl = document.getElementById("addressField").value;
    document.getElementById("emailT").innerHTMl = document.getElementById("emailField").value;
    document.getElementById("linkedT").innerHTMl = document.getElementById("linkedField").value;
    document.getElementById("fbT").innerHTMl = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTMl = document.getElementById("instaField").value;
    document.getElementById("objectiveT").innerHTMl = document.getElementById("objectiveField").value;

    let sks = document.getElementByClassName("skField");
    let str = "";
    for (let s of sks){
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("sks").innerHTML = str;
      

    let aqs = document.getElementByClassName("aqField");
    let str1 = "";
    for (let a of aqs){
        str1 = str1 + `<li> ${e.value}</li>`;
    }
    document.getElementById("aqs").innerHTML = str1;

    let wes = document.getElementByClassName("weField");
    let str = "";
    for (let w of wes){
        str2 = str2 + `<li> ${e.value}</li>`;
    }
    document.getElementById("wes").innerHTML = str2;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    //print resume
    function printResume(){
        window.print();
    }
 
}*/
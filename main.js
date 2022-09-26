let today = prompt("Meva Nomini kiriting").toLowerCase();
const h1El = document.querySelector("h1");
switch(today){
    case "olma":
     h1El.innerHTML = "Apple";
    break;
    case "banan":
     h1El.innerHTML = "Banana";
    break;
    case "abrikos":
    h1El.innerHTML = "Apricot";
    break;
    case "kivi":
    h1El.innerHTML = "Qiwi";
    break;
    case "apelsin":
    h1El.innerHTML = "Orange";
    break;
    case "qulupnay":
    h1El.innerHTML = "Strawbery";
    break;
    case "olcha":
    h1El.innerHTML = "Cherry";
    break;
    default:
    console.log("Meva Nomini Kiriting!")
}





// if(today === "Dushanba"){
//     console.log("Monday")
// }

// else if(today === "Seshanba"){
//     console.log("Tuesday")
// }

// else if(today === "Chorshanba"){
//     console.log("Wednesday")
// }

// else if(today === "Payshanba"){
//     console.log("Thirsday")
// }

// else if(today === "Juma"){
//     console.log("Friday")
// }

// else if(today === "Shanba"){
//     console.log("Saturday")
// }

// else if(today === "Yakshanba"){
//     console.log("Sunday")
// }

// else{
//     console.log("Hafta Kunini Kiriting!")
// }
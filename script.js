const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
//console.log(countdown);

const loading = document.querySelector(".loading");
window.addEventListener("load", ()=>{
    loading.style.display = "block";
    //miliseconds in setTimeout
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 2000);
    });

    
    // years.innerHTML = "00";
    // months.innerHTML = "00";
    // days.innerHTML = "00";
    // hours.innerHTML = "00";
    // minutes.innerHTML = "00";
    // seconds.innerHTML = "00";

    let H2Elements = document.getElementsByTagName("h2");
    //console.log("H2Elements", H2Elements);
    // for (let index = 0; index < H2Elements.length; index++) {
    //     H2Elements[index].innerHTML = "00";
    // }

    let H2Elements2 = countdown.querySelectorAll("h2");
    //console.log("H2Elements2", H2Elements2);

    // nodeList.forEach()
    // Array.forEach()

    // H2Elements2.forEach((element) =>{
    //     console.log(element)
    //     element.innerHTML = "00";
    // });

    //convert to array from html Collection
    // Array.from(H2Elements).forEach(el => {
    //     el.innerHTML = "00";
    // });

    [...H2Elements].forEach(el => {
        el.innerHTML = "00";
    });

let selectedBirthday;
console.log("today", selectedBirthday);
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event)=>{
    console.log("dateString", event.target.value);
    //event.target.value == birthdayInput.value
    //convert to date from dateString
    selectedBirthday = new Date(event.target.value); // stringi object e çevirdik. bugünle karşılaştırabilmek için
    console.log("dateObject", selectedBirthday);
    if(selectedBirthday > new Date()){
        alert("Doğum tarihiniz bugünden büyük olamaz!!");
        return;  //sadece return if clause ın içinden çıkmamızı sağlar. if else ile de yapabilirdim.
    }
    document.body.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

    loading.style.display = "block"; 
    setInterval(updateCountdown, 1000);// bir fonksiyon var. Bu fonksiyon ... aralıklarla sürekli çalışacak. Bu örnekte bu aralık 1 sn.
    setTimeout(()=>{
        loading.style.display = "none";   
        countdown.style.display = "flex";
    }, 2000);
    // set interval esnasında ekran boş durmasın diye loading ikonunu bir saniyeliğine ortaya çıkartacağım.
    
});

const updateCountdown = () => {
    let dateOfBirthYears = selectedBirthday.getFullYear();
    //console.log("Year", dateOfBirthYears);
    let dateOfBirthMonths = selectedBirthday.getMonth();
    //console.log("Month", dateOfBirthMonths);
    let dateOfBirthDays = selectedBirthday.getDate();
    //console.log("Day", dateOfBirthDays);
    let dateOfBirthHours = selectedBirthday.getHours();
    //console.log("Hours", dateOfBirthHours);
    let dateOfBirthMinutes = selectedBirthday.getMinutes();
    //console.log("Minutes", dateOfBirthMinutes);
    let dateOfBirthSeconds = selectedBirthday.getSeconds();
    //console.log("Seconds", dateOfBirthSeconds);

    let now = new Date();

    let currentYears = now.getFullYear();
    //console.log(currentYears);
    let currentMonths = now.getMonth();
    let currentDates = now.getDate();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();

    let yearsOfAge = currentYears - dateOfBirthYears;
    let monthsOfAge = currentMonths - dateOfBirthMonths;
    let daysOfAge = currentDates - dateOfBirthDays;
    let hoursOfAge = currentHours - dateOfBirthHours;
    let minutesOfAge = currentMinutes - dateOfBirthMinutes;
    let secondsOfAge = currentSeconds - dateOfBirthSeconds;

    //if positive no problem
    // if it is negative we will do following conditionals

    //seconds of age control
    if (secondsOfAge) {
        secondsOfAge += 60;
        minutesOfAge --;
        
    }

    //minutes of age control
    if (minutesOfAge) {
        minutesOfAge += 60;
        hoursOfAge --;
        
    }

    //hours of age control
    if (hoursOfAge) {
        hoursOfAge += 24;
        daysOfAge --;
        
    }

    //days of age control
    if (daysOfAge < 0) {
        daysOfAge += 30;
        monthsOfAge --;

    }

    // months of age control
    if (monthsOfAge < 0){
        monthsOfAge += 12;
        yearsOfAge -- ;
    }


    //Adds values to DOM

    years.innerHTML = yearsOfAge.toString().padStart(2, "0");
    months.innerHTML = monthsOfAge.toString().padStart(2, "0");
    days.innerHTML = daysOfAge.toString().padStart(2, "0");
    hours.innerHTML = hoursOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minutesOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondsOfAge.toString().padStart(2, "0");


}

// Barry hocanın çözümü...
/* const updateCountdown = () => {
    let birthdayValue = new Date(birthdayInput.value);
    let now = new Date();
    let age = new Date(now - birthdayValue);
  
    let yearOfAge = age.getFullYear() - 1970;
    let monthOfAge = age.getMonth();
    let dayOfAge = age.getDate();
    let hourOfAge = age.getHours();
    let minuteOfAge = age.getMinutes();
    let secondOfAge = age.getSeconds();
  
    //Add values to DOM
  
    years.innerHTML = yearOfAge.toString().padStart(2, '0');
    months.innerHTML = monthOfAge.toString().padStart(2, '0');
    days.innerHTML = dayOfAge.toString().padStart(2, '0');
    hours.innerHTML = hourOfAge.toString().padStart(2, '0');
    minutes.innerHTML = minuteOfAge.toString().padStart(2, '0');
    seconds.innerHTML = secondOfAge.toString().padStart(2, '0');
  }; */





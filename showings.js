function handleSelection() {
    console.log("selection handle called");
    var selectedOption = document.getElementById("movie").value;
    var mvName = document.getElementById("movName");
    var rgTime1 = document.getElementById("regTime1");
    var rgTime2 = document.getElementById("regTime2");
    var rgTime3 = document.getElementById("regTime3");
    var imxTime1 = document.getElementById("imaxTime1");
    var imxTime2 = document.getElementById("imaxTime2");
    var imxTime3 = document.getElementById("imaxTime3");
    var imgFile = document.getElementById("posterFile");

    switch (selectedOption) {
        case '1':
            console.log("Movie section: 1")           
            mvName.textContent = "127 Hours";
            rgTime1.textContent = "1:00 PM";
            rgTime2.textContent = "4:00 PM";
            rgTime3.textContent = "7:00 PM";
            imxTime1.textContent = "2:00 PM";
            imxTime2.textContent = "5:00 PM";
            imxTime3.textContent = "8:00 PM";
            rgTime1.href = "./seat_booking/tickets.html?movie=1&time=100&type=norm";
            rgTime2.href = "./seat_booking/tickets.html?movie=1&time=400&type=norm";
            rgTime3.href = "./seat_booking/tickets.html?movie=1&time=700&type=norm";
            imxTime1.href = "./seat_booking/tickets.html?movie=1&time=200&type=imax";
            imxTime2.href = "./seat_booking/tickets.html?movie=1&time=500&type=imax";
            imxTime3.href = "./seat_booking/tickets.html?movie=1&time=800&type=imax";
            imgFile.src = "./movie_posters/127_hours_poster.jpg";
            break;
        case '2':
            console.log("Movie section: 2")           
            mvName.textContent = "Avengers";
            rgTime1.textContent = "1:30 PM";
            rgTime2.textContent = "4:30 PM";
            rgTime3.textContent = "7:30 PM";
            imxTime1.textContent = "2:30 PM";
            imxTime2.textContent = "5:30 PM";
            imxTime3.textContent = "8:30 PM";
            rgTime1.href = "./seat_booking/tickets.html?movie=2&time=130&type=norm";
            rgTime2.href = "./seat_booking/tickets.html?movie=2&time=430&type=norm";
            rgTime3.href = "./seat_booking/tickets.html?movie=2&time=730&type=norm";
            imxTime1.href = "./seat_booking/tickets.html?movie=2&time=230&type=imax";
            imxTime2.href = "./seat_booking/tickets.html?movie=2&time=530&type=imax";
            imxTime3.href = "./seat_booking/tickets.html?movie=2&time=830&type=imax";
            imgFile.src = "./movie_posters/avengers_poster.jpg";
            break;
        case '3':
            console.log("Movie section: 3")           
            mvName.textContent = "Oppenheimer";
            rgTime1.textContent = "12:30 PM";
            rgTime2.textContent = "3:30 PM";
            rgTime3.textContent = "6:30 PM";
            imxTime1.textContent = "1:30 PM";
            imxTime2.textContent = "4:30 PM";
            imxTime3.textContent = "7:30 PM";
            rgTime1.href = "./seat_booking/tickets.html?movie=3&time=1130&type=norm";
            rgTime2.href = "./seat_booking/tickets.html?movie=3&time=330&type=norm";
            rgTime3.href = "./seat_booking/tickets.html?movie=3&time=630&type=norm";
            imxTime1.href = "./seat_booking/tickets.html?movie=3&time=130&type=imax";
            imxTime2.href = "./seat_booking/tickets.html?movie=3&time=430&type=imax";
            imxTime3.href = "./seat_booking/tickets.html?movie=3&time=730&type=imax";
            imgFile.src = "./movie_posters/oppenheimer_poster.jpg";
            break;
        case '4':
            console.log("Movie section: 4")           
            mvName.textContent = "Shrek";
            rgTime1.textContent = "1:45 PM";
            rgTime2.textContent = "4:45 PM";
            rgTime3.textContent = "7:45 PM";
            imxTime1.textContent = "2:45 PM";
            imxTime2.textContent = "5:45 PM";
            imxTime3.textContent = "8:45 PM";
            rgTime1.href = "./seat_booking/tickets.html?movie=4&time=145&type=norm";
            rgTime2.href = "./seat_booking/tickets.html?movie=4&time=445&type=norm";
            rgTime3.href = "./seat_booking/tickets.html?movie=4&time=745&type=norm";
            imxTime1.href = "./seat_booking/tickets.html?movie=4&time=245&type=imax";
            imxTime2.href = "./seat_booking/tickets.html?movie=4&time=545&type=imax";
            imxTime3.href = "./seat_booking/tickets.html?movie=4&time=845&type=imax";
            imgFile.src = "./movie_posters/shrek_poster.jpg";
            break;
        case '5':
            console.log("Movie section: 5")           
            mvName.textContent = "World War Z";
            rgTime1.textContent = "12:15 PM";
            rgTime2.textContent = "3:15 PM";
            rgTime3.textContent = "6:15 PM";
            imxTime1.textContent = "1:15 PM";
            imxTime2.textContent = "4:15 PM";
            imxTime3.textContent = "7:15 PM";
            rgTime1.href = "./seat_booking/tickets.html?movie=5&time=1215&type=norm";
            rgTime2.href = "./seat_booking/tickets.html?movie=5&time=315&type=norm";
            rgTime3.href = "./seat_booking/tickets.html?movie=5&time=615&type=norm";
            imxTime1.href = "./seat_booking/tickets.html?movie=5&time=115&type=imax";
            imxTime2.href = "./seat_booking/tickets.html?movie=5&time=415&type=imax";
            imxTime3.href = "./seat_booking/tickets.html?movie=5&time=715&type=imax";
            imgFile.src = "./movie_posters/world_war_z_poster.jpg";
            break;
    }
}


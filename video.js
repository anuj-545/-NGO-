let btn1 = document.querySelector(".meeting_id_button");
let display_content = document.querySelector(".content");
let meeting = document.querySelector(".meeting_id");

btn1.addEventListener("click" , () => {
    display_content.style.display = "block";
    meeting.style.display = "none" ; 
}
);
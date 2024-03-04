var message = "Thank you for Celebrating our big day with us";

// Get the data from each element on the form.
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const isAttending = document.getElementById("isAttending");
const attendance = document.getElementById("attendance");
const guestCount = document.getElementById("guestCount");
const foodRestriction = document.getElementById("foodRestriction");
const comments = document.getElementById("comments");
const submit = document.getElementsByClassName("form__contact")[0];
// Add More Here later
// const msg = document.getElementById('msg');

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    // alert("Clicked!");

    /* Testing grabbing data from form*/
    // document.getElementById("lblName").style.color = "red";

    /*Email Body Builder*/
    let emailContent =`
    <b>Name: </b>${firstName.value}&nbsp;${lastName.value}
    <br/>
    <b>Email: </b>${email.value}
    <br/>
    <b>Attending: </b>${attendance.value}
    <br/>
    <b>Guest Count: </b>${guestCount.value}
    <br/>
    <b>Dietary Restrictions: </b>${foodRestriction.value}
    <br/>
    <b>Comments: </b>${comments.value}
    <br/>
    `
    /*Test*/
    // alert(emailContent);

    /* Email Sender*/
    Email.send({
        SecureToken: "01fd5af2-9a05-4cea-b9b7-2a1bbb6bb94b",
        To: "kokoandinyene@gmail.com",
        From: "kokoandinyene@gmail.com",
        Subject: "Koko & Inyene Reservation",
        Body: emailContent
    }).then(
        (message) => alert(message)
    );
});
var message = "Thank you for Celebrating our big day with us";
var dialogState = "Close"

// Get the data from each element on the form.
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const isAttending = document.getElementById("isAttending");
const attendance = document.getElementById("attendance");
const partyCount = document.getElementById("partyCount");
const guestNames = document.getElementById("guestNames");
const foodRestriction = document.getElementById("foodRestriction");
const comments = document.getElementById("comments");
const submit = document.getElementsByClassName("form__contact")[0];
const formDialog = document.getElementById("formDialog");
const dialogIcon = document.getElementById("dialogIcon");
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
    <b>Guest Count: </b>${partyCount.value}
    <br/>
    <b>Guest Names: </b>${guestNames.value}
    <br/>
    <b>Dietary Restrictions: </b>${foodRestriction.value}
    <br/>
    <b>Comments: </b>${comments.value}
    <br/>
    `

    let emailContent_User =`
    <h2>Thank you for sharing in our wedding celebration!</h2>
    <br/>
    <br/>
    <h3>Your confirmation details are below:</h3>
    <br/>
    <b>Name: </b>${firstName.value}&nbsp;${lastName.value}
    <br/>
    <b>Date: </b> July 5th, 2024
    <br/>
    <b>Attending: </b>${attendance.value}
    <br/>
    <b>Guest Count: </b>${partyCount.value}
    <br/>
    <b>Guest Names: </b>${guestNames.value}
    <br/>
    <b>Dietary Restrictions: </b>${foodRestriction.value}
    <br/>
    <b>Comments: </b>${comments.value}
    <br/>
    <br/>
    <p>With Love,</p>
    <p>Kingsley Usen and Helen Edem</p>
    `

    /*Test*/
    // alert(dialogState);

    /* Email Sender*/
    if(dialogState == "Open"){
        alert("RSVP already received!")
    }
    else{
        // Send to Control
        Email.send({
            SecureToken: "01fd5af2-9a05-4cea-b9b7-2a1bbb6bb94b",
            To: "kokoandinyene@gmail.com",
            From: "kokoandinyene@gmail.com",
            Subject: "Koko & Inyene Reservation",
            Body: emailContent
        }).then(
            Confirm()
        );

        // Send to User
        Email.send({
            SecureToken: "01fd5af2-9a05-4cea-b9b7-2a1bbb6bb94b",
            To: email.value,
            From: "kokoandinyene@gmail.com",
            Subject: "Koko & Inyene Reservation",
            Body: emailContent_User
        }).then(
            Confirm()
        );
    }
});

dialogIcon.addEventListener('click', (e) => {
    e.preventDefault();

    formDialog.style.visibility = 'collapse';
    formDialog.style.height = '0rem';
});

// ** Helpers ** 
function Confirm(action){
    //--
    formDialog.style.visibility = 'visible';
    formDialog.style.height = 'auto';

    // -- Update Dialog State
    dialogState = "Open";
}
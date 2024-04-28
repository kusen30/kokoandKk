var message = "Thank you for sharing in our wedding celebration!";
var message2 = "We will miss your attendance, but we are grateful for your well wishes and support. Thank you again, and have a lovely day";
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
const attendanceControl = document.getElementById("attendanceControl");
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

    let emailContent_User = '';

    // alert(emailContent_User);
    // alert(attendance.value);

    if(attendance.value == 'no'){
        emailContent_User =`
        <h2>We will miss your attendance, but we are grateful for your well wishes and support. Thank you again, and have a lovely day</h2>
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
        <br/>
        <p>With Love,</p>
        <p>Kingsley Usen and Helen Edem</p>
        `
    }
    else{
        emailContent_User =`
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
    }

    /*Test*/
    // alert(emailContent_User);

    /* Email Sender*/
    if(dialogState == "Open"){
        alert("RSVP already received!");
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

attendance.addEventListener('change', (e) => {
    if(attendance.value == 'no'){
        attendanceControl.style.visibility = 'collapse';
        attendanceControl.style.height = '0rem';

        // -- Update required bindings
        EnforceRequired(false);
    }
    else{
        attendanceControl.style.visibility = 'visible';
        attendanceControl.style.height = 'auto';

        // -- Update required bindings
        EnforceRequired(true);
    }
});

// ** Helpers ** 
function Confirm(action){
    //--
    formDialog.style.visibility = 'visible';
    formDialog.style.height = 'auto';

    // -- Update Dialog State
    dialogState = "Open";
}

function EnforceRequired(action){
    if(action == 'true'){
        // partyCount.attr('required', true);
        // guestNames.attr('required', true);
        // alert(partyCount.getAttribute("type"));
        // alert(guestNames.getAttribute("type"));
        partyCount.setAttribute("required", true);
        guestNames.setAttribute("required", true);
    }
    else if(action = 'false'){
        // partyCount.attr('required', true);
        // guestNames.attr('required', true);
        // alert(partyCount.getAttribute("type"));
        // alert(guestNames.getAttribute("type"));
        partyCount.removeAttribute("required");
        guestNames.removeAttribute("required");
    }
}
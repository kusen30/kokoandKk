var message = "Thank you for Celebrating our big day with us";

// Get the data from each element on the form.
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const optionalMessage = document.getElementById("optionalMessage");
const submit = document.getElementsByClassName("form__contact")[0];
// Add More Here later
// const msg = document.getElementById('msg');

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    // alert("Clicked!");

    /* Testing grabbing data from form*/
    // document.getElementById("lblfirstName").style.color = "red";

    /*Email Body Builder*/
    let emailContent =`
    <b>Name: </b>${firstName.value}&nbsp;${lastName.value}
    <br/>
    <b>Message: </b>${optionalMessage.value}
    <br/>
    <b>Phone No.: </b>${firstName.value}
    <br/>
    `
    /* Email Sender*/
    // Email.send({
    //     SecureToken: "01fd5af2-9a05-4cea-b9b7-2a1bbb6bb94b",
    //     To: "kokoandinyene@gmail.com",
    //     From: "kokoandinyene@gmail.com",
    //     Subject: "This is the subject",
    //     Body: emailContent
    // }).then(
    //     (message) => alert(message)
    // );
});
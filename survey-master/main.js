
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB48BFRl97AqCmCkvBcOjAuxuBcQdUCfYo",
    authDomain: "contact-form-7c3aa.firebaseapp.com",
    databaseURL: "https://contact-form-7c3aa.firebaseio.com",
    projectId: "contact-form-7c3aa",
    storageBucket: "contact-form-7c3aa.appspot.com",
    messagingSenderId: "262467437710",
    appId: "1:262467437710:web:2343583b5588e963e835df",
    measurementId: "G-EG6MRY9TS0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //references messages collection
  var messagesRef = firebase.database().ref('messages');


// listen for submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


//submit form
function submitForm(e) {
    e.preventDefault();

    console.log('Form submitted');

    //gets values of contact form
    var date = getInputVal('date');
    var time = getInputVal('time');
    var first = getInputVal('first');
    var last = getInputVal('last');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    var q1 = getRadioVal('Q1');
    var q2 = getRadioVal('Q2');
    var q3 = getRadioVal('Q3');
    var q4 = getRadioVal('Q4');
    var q5 = getRadioVal('Q5');
    var q6 = getRadioVal('Q6');
    var is_patient = getInputVal('is_patient');
    var first_visit = getRadioVal('first_visit');
  

    //save message
    saveMessages(date, time, first, last,email, phone, message, q1, q2, q3, q4, q5, q6, is_patient, first_visit);

    console.log(date);
    console.log(time);
    console.log(first);
    console.log(last);
    console.log(email);
    console.log(phone);
    console.log(message);
    console.log( "Question 1: Ease of getting through to the clinic phone. "+ q1);
    console.log( "Question 2: Convenience of our office hours. "+ q2);
    console.log( "Question 3: Ease of Scheduling your appointment."+ q3);
    console.log( "Question 4: Courtesy of staff in the registration area."+ q4);
    console.log( "Question 5: Degree to which you were informed about delays."+ q5);
    console.log( "Question 6: Wait time at clinic(from arriving to leaving)."+ q6);
    console.log( "Other than the patient if filling out this form.  "+ is_patient);
    console.log( "First visit.  "+ first_visit);


}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function getRadioVal(name){
    let title = document.getElementsByName(name);
    let selecterRadio = document.getElementsByName(name);
    var selected;

    for(let i = 0; i < selecterRadio.length; i++){
        if(selecterRadio[i].checked){
            selected = selecterRadio[i].value;
        }
    }
    
    return selected;

}



//save message to firebase
function saveMessages(date, time, first, last,email, phone, message, q1, q2, q3, q4, q5, q6, is_patient, first_visit){

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        date: date, 
        time: time,
        first: first, 
        last: last,
        email: email,
        phone: phone, 
        message:message, 
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        is_patient: is_patient,
        first_visit: first_visit
    });


}
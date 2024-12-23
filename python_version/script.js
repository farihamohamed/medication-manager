

 /*const Medication = (medName, dosage, startDate, endDate, frequency) =>{
    this.medName = medName;
    this.dosage = dosage;
    this.startDate = startDate;
    this.endDate = endDate; 
    this.frequency = frequency;

 }


 

 const myMedication = new Medication();

 let myMedications = [];

*/ 
 // Add Medication Function
 
 const addButton = document.getElementById("add-btn"); 
 const table = document.getElementById("chart-background"); 
 const popup = document.getElementById("add-popup");
 addButton.addEventListener("click", ()=>{
      addNewMedication(addButton, table, popup);

 });

 const addNewMedication = (button, table, newSection) =>{
    button.style.backgroundColor = "pink";
    table.style.visibility = "hidden";
    newSection.style.visibility = "visible";


 }

  //Log out Button Function
  const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", ()=>{
      window.location.replace('./login.html');
      console.log("Working!");
  })


/* LOGIN PAGE SCRIPT */
//Prevent Default Form Behavior
document.getElementById('loginForm').addEventListener('submit', async function (e) {
   e.preventDefault();

   // Get form values
   const username = document.getElementById('username').value.trim();
   const password = document.getElementById('password').value.trim();

   // Validate inputs
   if (!username || !password) {
       displayError('All fields are required!');
       return;
   }

   // Send data to the backend
   try {
       const response = await fetch('http://127.0.0.1:5000/test', { // Replace '/login' with your actual backend endpoint
           method: 'POST',
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify({ username: "testuser", password: "testpass" })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));






       /*
       if (!response.ok) {
           throw new Error('Invalid login credentials');
       }

       const data = await response.json();

       // Redirect or update UI with user data
       console.log('User data:', data); // Replace this with actual UI update logic
       alert(`Welcome, ${data.name}!`);
   } catch (error) {
       displayError(error.message);
   }
});

// Display error message
function displayError(message) {
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.textContent = message;
   errorMessage.style.display = 'block';
}
*/ 
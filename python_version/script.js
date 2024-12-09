

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
    console.log("Hey!");

 }

  
# Medication Management Program

## Project Description

The Medication Management Program allows users to manage patient records, including their medication details. It supports operations such as adding new patients, viewing all patient records, searching for specific patients, and saving/loading data from a file.

## Program Specifications

### Purpose:
Design a modular program that will load patient data from a file at the start of the program. It should allow a user to:
- Add patient records to a file
- View all patient records
- Search for a specific patient
- Save all data for a file to be exported

The program will start by welcoming the user and providing a text-based menu for navigation.

### Data Flow:

- **Adding a Patient**:
  - Enter patient name, ID, and medications.
  - Add the patient to the `vector<Patient>`.
  - Sort the vector.
  
- **Viewing All Patients**:
  - Display all patients in the sorted order (alphabetically or by ID).
  
- **Searching for a Patient**:
  - Prompt the user for the name or ID.
  - Perform binary search to locate the patients (start with linear search then optimize with binary search).
  - Display the medications if the patient is found.

- **Saving and Loading Data**:
  - Save the sorted vector to a file.
  - Load the data back into the vector and sort it.

### Data Types and Algorithms:
This program will primarily use the **vector** data type and will include searching and sorting algorithms.

## To-Do List

- [ ] **Initialize Program**
  - Display a welcome message.
  - Provide a text-based menu for user navigation.
  
- [ ] **Add Patient Record**
  - Prompt the user to enter a patient's name, ID, and medications.
  - Add the patient to the `vector<Patient>`.
  - Sort the `vector` of patients.

- [ ] **View All Patient Records**
  - Display all patient records in sorted order (either by name or ID).
  - Format the output to show patient details and their medications.

- [ ] **Search for a Patient**
  - Prompt the user to enter a patient's name or ID.
  - Perform a linear search to find the patient.
  - Eventually, implement a binary search for faster results (after sorting patients).
  - If found, display the patient's details and their medications.

- [ ] **Save Records to a File**
  - Implement functionality to save the sorted `vector<Patient>` to a file.

- [ ] **Load Records from a File**
  - Implement functionality to load patient records from a file and populate the `vector<Patient>`.
  - Ensure that the records are sorted after loading.

- [ ] **Exit Program**
  - Provide an option to exit the program gracefully.

## Struct Definitions

### `Patient`

```cpp
struct Medication {
    string name;       // Name of the medication
    string dosage;     // Dosage information
    string startDate;  // Start date of the medication
    string endDate;    // End date of the medication
    string frequency;  // Frequency of taking the medication
};

struct Patient {
    string name;               // First name of the patient
    string id;                 // Unique patient ID
    vector<Medication> medications;  // List of medications for the patient
};




# Medication Management Program

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


### **How to Preview Markdown:**
- If you’re using **GitHub**, simply commit the `README.md` file, and it will automatically render on your repository page.
- If you’re using a **text editor** (like VS Code), you can preview Markdown by opening the file and selecting **Markdown Preview** (VS Code has this built-in).

---

That’s it! You now have a working to-do list with checkboxes and a `README.md` that will be rendered properly on GitHub.

Let me know if you need more help!


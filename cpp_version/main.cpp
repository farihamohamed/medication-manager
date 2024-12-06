/******************************************************************************
Fariha Mohamed 
Medication Management Program

*******************************************************************************/
#include <iostream>
#include <string> 
#include <iomanip> 
#include <vector> 

using namespace std;
// Function Prototypes 


// Welcome User 

int welcomeUser(); 
// Add patient 

void addPatient();

// View All Patients 

//void viewAllPatients();

struct Medication{
        string name;
        string dosage;
        string startDate;
        //Default Constructor
         Medication(string n = "", string d = "", string sd = "") 
        : name(n), dosage(d), startDate(sd) {}
    };
    
    
    struct Patient{ 
        string firstname;
        string lastname;
        string id;
        vector<Medication> medications;
        //Default Constructor
        
        Patient(string f = "", string l ="", string i = "", vector<Medication> meds = {}) 
        : firstname(f), lastname(l), id(i), medications(meds) {}
    
    };



int main(){
     
 

  int userChoice = welcomeUser(); // this will capture the user's choice from the menu and help will be used to know which function to call
 
   


    return 0;
}

// Function definitions 

int welcomeUser(){ 
    
    int userSelection = 0; // entered by user to determine what menu item will be selected
    cout << "Welcome to the medication management program" << endl; 
    cout << "Please use the following menu to choose what you would like to do" << endl; 
    cout << "1. Add a patient \n"; 
    cout << "2. Add a medication record \n"; 
    cout << "3. View all records in patient records\n";
    cout << "4. Find a patient’s records \n"; 
    cout << "5. Save records to a file \n"; 
    cout << "6. Load records from a file\n"; 
    cout << "7. Exit\n"; 
    
  do{ 
      cout << "Please enter a number" << endl;
      cin >> userSelection;
    
     }
    
    
    
    while((userSelection < 1) || (userSelection > 7));
    

    switch(userSelection){ 
       case 1:
           cout << "Add patient / This feature has not been added yet" << endl;
            //addPatient(); 
            break;
       case 2: 
            cout << " Add Medication Record /This feature has not been added yet" << endl;
            break;
       case 3: 
            cout << " View all records in patient records /This feature has not been added yet" << endl;
            break;
       case 4: 
            cout << "Find a patient’s records /This feature has not been added yet" << endl;
            break;
        case 5: 
            cout << "Save records to a file /This feature has not been added yet" << endl;
            break;
        case 6: 
            cout << "Load records from a file /This feature has not been added yet" << endl;
            break;
        case 7: 
            cout << "Exit // This feature has not been added yet" << endl;
            break;
        
        default: cout << "It looks like we don't have a user choice";
    }


    return userSelection;

    
}


void addPatient(){ 
    vector<string> patientNames; 
    
    string name;
    cout << "Please enter the name you would like to enter" << endl; 
    
    cin >> name; 
    cout << name << endl;
   // patientNames.push_back(name); 
    
   // cout << patientNames[1];
    

    
    
}
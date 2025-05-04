import { HomePage } from "../pageObjects/HomePage"

describe('Katalon scenarios', () => {
  
  //Scenario 1- Make an Appointment
  it('Make an Appointment', () => {
    
    //Open https://katalon-demo-cura.herokuapp.com/
    HomePage.visit();

    //Click- Make Appointment
    HomePage.cMakeAppointment.click();

    //Set username and password fields with the demo account credentials
    HomePage.tUsername.type('John Doe');
    HomePage.tPassword.type('ThisIsNotAPassword');

    //Click- Login
    HomePage.cLogin.click();

    //Set the following values:
    //Facility- Seoul CURA Healthcare Center
    HomePage.cfacility.select('Seoul CURA Healthcare Center');

    //Check- Apply for hospital readmission
    HomePage.aReadmission.click();

    //Select- Medicaid
    HomePage.cHealthcareProgramm.eq(1).click();

    //Set Date value by using the widget- 30
    HomePage.cCalendar.click();
    HomePage.sDay.contains('30').click();

    //Set comment- CURA Healthcare Service
    HomePage.sCommand.type('CURA Healthcare Service');

    //Click- Book Appointment
    HomePage.cBookAppointment.click();

    //Validate that previously set values are correct
    HomePage.vFacility.should('have.text', 'Seoul CURA Healthcare Center');
    HomePage.vReadmition.should('have.text', 'Yes');
    HomePage.vProgramm.should('have.text', 'Medicaid');
    HomePage.vVisitDay.should('contain.text', '30/');
    HomePage.vComment.should('have.text', 'CURA Healthcare Service'); 
  })

  //Scenario 2- Appointment history empty
  it('Appointment history empty', () => {

    //Open https://katalon-demo-cura.herokuapp.com/
    HomePage.visit();

    //Click- Make Appointment
    HomePage.cMakeAppointment.click();

    //Set username and password fields with the demo account credentials
    HomePage.tUsername.type('John Doe');
    HomePage.tPassword.type('ThisIsNotAPassword');

    //Click- Login
    HomePage.cLogin.click();
    
    //Click- Menu/Stack/Burger icon
    HomePage.navigation.click();

    //Validate that the sidebar is active
    HomePage.vNavigation.should('have.class', 'active');

    //Click- History
    HomePage.cHistory.click();

    //Validate that- No appointment- is visible
    HomePage.vAppointment.first().should('have.text', 'No appointment.');
  })
})

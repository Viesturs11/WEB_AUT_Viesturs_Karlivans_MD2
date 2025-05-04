import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    static get url() {
        return '';
    }

    static get cMakeAppointment() {
        return cy.get('a#btn-make-appointment');
    }

    static get tUsername() {
        return cy.get('input#txt-username');
    }

    static get tPassword() {
        return cy.get('input#txt-password');
    }

    static get cLogin() {
        return cy.get('button#btn-login');
    }

    static get cfacility() {
        return cy.get('select#combo_facility');
    }

    static get aReadmission() {
        return cy.get('input#chk_hospotal_readmission');
    }

    static get cHealthcareProgramm() {
        return cy.get('label.radio-inline');
    }

    static get cCalendar() {
        return cy.get('input.form-control');
    }

    static get sDay() {
        return cy.get('td.day');
    }

    static get sCommand() {
        return cy.get('textarea.form-control');
    }

    static get cBookAppointment() {
        return cy.get('#btn-book-appointment');
    }

    static get vFacility() {
        return cy.get('#facility');
    }

    static get vReadmition() {
        return cy.get('#hospital_readmission');
    }

    static get vProgramm() {
        return cy.get('#program');
    }

    static get vVisitDay() {
        return cy.get('#visit_date');
    }

    static get vComment() {
        return cy.get('#comment');
    }

    static get navigation() {
        return cy.get('a#menu-toggle');
    }

    static get vNavigation() {
        return cy.get('nav#sidebar-wrapper');
    }

    static get cHistory() {
        return cy.get('a[href="history.php#history"]');
    }

    static get vAppointment() {
        return cy.get('p');
    }
}
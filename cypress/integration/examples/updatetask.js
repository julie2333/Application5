
describe("Test ToDo App", () => {
    it("user want to update ", () => {
        cy.visit("http://localhost:8080/");
        cy.get("#app > div > form > input[type='text']").type(" Call me Task one!");
        cy.get("#app > div > form > button").click();
        cy.get("#app > div > table > tbody > tr > td:nth-child(2) > button:nth-child(1)").click(); 
        cy.get("#app > div > table > tbody > tr > td:nth-child(1) > form > input").type("Updated Please"); 
        cy.get("#app > div > table > tbody > tr > td:nth-child(2) > button:nth-child(1)").click(); 
       
    });
    after(() => {
      cy.clearCookies();
    });
  });
  
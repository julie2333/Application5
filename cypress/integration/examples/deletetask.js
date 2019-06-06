
describe("Test ToDo App", () => {
  it("user delete one ", () => {
      cy.visit("http://localhost:8080/");
      cy.get("#app > div > form > input[type='text']").type("Call me Task one!");
      cy.get("#app > div > form > button").click();
      cy.get("#app > div > table > tbody > tr > td:nth-child(2) > button.delete-btn").click(); 
  });
  after(() => {
    cy.clearCookies();
  });
});

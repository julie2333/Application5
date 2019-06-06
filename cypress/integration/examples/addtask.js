
describe("Test ToDo App", () => {
  it("user add one ", () => {
      cy.visit("http://localhost:8080/");
      cy.get("#app > div > form > input[type='text']").type("Call me Task one!");
      cy.get("#app > div > form > button").click();
      
  });
  after(() => {
    cy.clearCookies();
  });
});

describe("Zad2 GoIT - Michał Brzozowski", () => {
  beforeEach("Open Site", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Login and Logout on Site 1", () => {
    // Completion of fields Email and Password in Login
    cy.get("#user_email")
      .type("user888@gmail.com")
      .should("have.value", "user888@gmail.com");
    cy.get("#user_password").type("1234567890");

    // Log in Button
    cy.get(".css-1jphuq5").click();

    //Menu and Log uot
    cy.get(".css-7afvtf").click();
    cy.get(".css-bve2vl.e1phyiqy2").contains("Log out").click();
  });

  // describe("Drugi test LMS goIT", () => {
  it("Login and Logout on Site 2", () => {
    cy.login_out("testowyqa@qa.team", "QA!automation-1");
  });
});

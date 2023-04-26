import LoginPage from "../pages/Login";
import HomePage from "../pages/HomePage";

describe("Zad3 GoIT - Michał Brzozowski", () => {
  let loginPage;
  let homePage;

  before(() => {
    loginPage = new LoginPage();
    homePage = new HomePage();
  });

  beforeEach("Open Site", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Login and Logout on Site 1", () => {
    // Completion of fields Email and Password in Login
    loginPage.getInputLogin().type("user888@gmail.com");
    loginPage.getInputPassword().type("1234567890");

    // Log in Button
    loginPage.getSignIn().click();

    //Menu and Log uot
    homePage.getMenu().click();
    homePage.getLogOut().click();
  });

  it("Login and Logout on Site 2", () => {
    // Completion of fields Email and Password in Login
    loginPage.getInputLogin().type("testowyqa@qa.team");
    loginPage.getInputPassword().type("QA!automation-1");

    // Log in Button
    loginPage.getSignIn().click();

    //Menu and Log uot
    homePage.getMenu().click();
    homePage.getLogOut().click();
  });
});

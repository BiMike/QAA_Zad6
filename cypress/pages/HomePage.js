class HomePage {
  getMenu() {
    return cy.get(".css-7afvtf");
  }

  getLogOut() {
    return cy.get(".css-bve2vl.e1phyiqy2").contains("Log out");
  }
}

export default HomePage;

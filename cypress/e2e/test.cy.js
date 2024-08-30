describe("Task1", () => {
  it("US-01-01", () => {
    cy.fixture("fixtures").then((data) => {
      cy.visit("https://computer-database.gatling.io/computers");
      //open required page

      cy.get("#add").click();
      //click on add new computer button

      cy.get("#name").type(data.compName);
      cy.get("#introduced").type(data.intoduced);
      cy.get("#discontinued").type(data.discontinued);
      cy.get("#company").select("Apple Inc.");
      cy.get(".primary").click();
      //Fill all fields and add a new computer
      cy.get(".alert-message.warning").should("be.visible");
      //Check that confirmation message is visible
    });
  });

  it("US-01-02", () => {
    cy.fixture("fixtures").then((data) => {
      cy.visit("https://computer-database.gatling.io/computers");
      //open required page

      cy.get("#add").click();
      //click on add new computer button

      cy.get("#name").type(data.compName);
      cy.get("#introduced").type(data.intoduced);
      cy.get("#discontinued").type(data.discontinuedError);
      cy.get("#company").select("Apple Inc.");
      cy.get(".primary").click();
      //Fill all fields and add a new computer
      cy.get(".error > .input > .help-inline").should("be.visible");
      //Check that confirmation message is visible
    });
  });

  it("US-02-01", () => {
    cy.fixture("fixtures").then((data) => {
      cy.visit("https://computer-database.gatling.io/computers");
      //open required page

      cy.get("#searchbox").type(data.apple);
      //search for first 2 letters of a computer name

      cy.get("#searchsubmit").click();
      //click on filter button

      cy.get("#searchbox").clear().type(data.apple2);
      //search for first 3 letters of a computer name

      cy.get("#searchsubmit").click();
      //click on filter button
    });
  });

  it("US-02-02", () => {
    cy.fixture("fixtures").then((data) => {
      cy.visit("https://computer-database.gatling.io/computers");
      //open required page

      cy.get("#searchbox").type(data.dummy);
      //search for first 2 letters of a computer name

      cy.get("#searchsubmit").click();
      //click on filter button

      cy.get("em").should("be.visible");
    });
  });

  it("US-03-01", () => {
    cy.fixture("fixtures").then((data) => {
      cy.visit("https://computer-database.gatling.io/computers");
      //open required page

      cy.get(":nth-child(8) > :nth-child(1) > a").click();
      //click on a computer item from the list

      cy.get("#name").clear().type(data.compName);
      cy.get("#introduced").clear().type(data.intoduced);
      cy.get("#discontinued").clear().type(data.discontinued);
      cy.get("#company").select("Sony");
      cy.get(".primary").click();
      //Fill all fields and add a new computer
      cy.get(".alert-message.warning").should("be.visible");
    });
  });

  it("US-03-02", () => {
    cy.fixture("fixtures").then((data) => {
      cy.visit("https://computer-database.gatling.io/computers");
      //open required page

      cy.get("#searchbox").type(data.apple);
      //search for first 2 letters of a computer name

      cy.get("#searchsubmit").click();
      //click on filter button

      cy.get(":nth-child(6) > :nth-child(1) > a").click();
      //select item from the list of the search result

      cy.get("#name").clear().type(data.compName);
      cy.get("#introduced").clear().type(data.intoduced);
      cy.get("#discontinued").clear().type(data.discontinued);
      cy.get("#company").select("Sony");
      cy.get(".primary").click();
      //Fill all fields and add a new computer
      cy.get(".alert-message.warning").should("be.visible");
    });
  });
});

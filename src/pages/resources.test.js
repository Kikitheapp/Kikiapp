import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Resources from "./resources";

describe("Resources", () => {
    
  it("renders", async () => {

    const data = {
        "resources": {
          "group": [
            {
              "type": "Health + Wellness",
              "nodes": [
                {
                  "data": {
                    "resource_name": "Gay Men’s Health Crisis",
                    "resource_description": "Gay Men’s Health Crisis",
                    "resource_website": "https://www.gmhc.org/"
                  }
                },
                {
                  "data": {
                    "resource_name": "Hispanic AIDS Forum",
                    "resource_description": "HAF’s mission is to improve health outcomes for Latinos in New York City who are affected by HIV and other chronic illnesses. ",
                    "resource_website": "http://hafnyc.org/"
                  }
                }
              ]
            },
            {
              "type": "Housing",
              "nodes": [
                {
                  "data": {
                    "resource_name": "Open Rainbow Residence",
                    "resource_description": "Without any limits contributing to stopping homelessness in our community.",
                    "resource_website": "https://www.facebook.com/openrainbowresidence/"
                  }
                }
              ]
            },
            {
              "type": "Legal",
              "nodes": [
                {
                  "data": {
                    "resource_name": "The HIV Law Project",
                    "resource_description": "Serves low income NYC residents living with HIV/AIDS. Provides help with legal issues involving: public benefits, housing, or immigration.\n",
                    "resource_website": "https://www.housingworks.org/legal/hiv-law-project"
                  }
                }
              ]
            },
            {
              "type": "Queer Spaces",
              "nodes": [
                {
                  "data": {
                    "resource_name": "The Center",
                    "resource_description": "The Center is the cornerstone of our LGBTQ community in New York City. \nEach year, more than 400 community groups come here to meet and make \nconnections, find support systems, and to take advantage of our many \nresources.",
                    "resource_website": "https://gaycenter.org/"
                  }
                },
                {
                  "data": {
                    "resource_name": "Growing LGBTQ+ Youth Support - Western New York",
                    "resource_description": "GLYS provides a safe and positive environment for LGBTQ+ youth to learn more about themselves through peer interaction and educational experiences. This chapter serves Western NY.\n\n",
                    "resource_website": "https://www.glyswny.org/"
                  }
                }
              ]
            }
          ]
        },
      "extensions": {}
    };
    
    render(<Resources data={data} />);

    // Find heading, throw error if not found.
    // Ignore navbar links. 
    const heading = await screen.findByText("Resources", {ignore: "script, style, nav a"});

    // Find state heading, throw error if not found.
    const state = await screen.findByText("New York");

    // Find sections, throw error if not found.
    const housing = await screen.findByText("Housing");
    const legal = await screen.findByText("Legal");
    const health = await screen.findByText("Health + Wellness");
    const spaces = await screen.findByText("Queer Spaces");

  });
    
});

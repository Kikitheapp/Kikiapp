import React from 'react';
import * as Gatsby from 'gatsby';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Resources from "./";

describe("Resources", () => {

  const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
  const mockUseStaticQuery = {
    site: {
      siteMetadata: {
        "blogUrl": "https://medium.com/kiki-app"
      }
    }
  }

  beforeAll(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

    
  it("renders", async () => {

    const data = {
      "state": {
        "group": [
          {
            "type": "Health + Wellness",
            "nodes": [
              {
                "id": "afc656db-1d68-5863-abbc-a1430a27a2c7",
                "data": {
                  "resource_name": "Hispanic AIDS Forum",
                  "resource_description": "HAF’s mission is to improve health outcomes for Latinos in New York City who are affected by HIV and other chronic illnesses. ",
                  "resource_website": "http://hafnyc.org/",
                  "resource_national": null,
                  "resource_states": [
                    {
                      "data": {
                        "state_abreviation": "NY",
                        "state_fullname": "New York"
                      }
                    }
                  ]
                }
              },
              {
                "id": "082f9fae-ae3f-5f71-aeef-58b1065344a2",
                "data": {
                  "resource_name": "Gay Men’s Health Crisis",
                  "resource_description": "Gay Men’s Health Crisis",
                  "resource_website": "https://www.gmhc.org/",
                  "resource_national": null,
                  "resource_states": [
                    {
                      "data": {
                        "state_abreviation": "NY",
                        "state_fullname": "New York"
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "Housing",
            "nodes": [
              {
                "id": "e0d011b2-89ee-518c-811a-8481c303bf59",
                "data": {
                  "resource_name": "Open Rainbow Residence",
                  "resource_description": "Without any limits contributing to stopping homelessness in our community.",
                  "resource_website": "https://www.facebook.com/openrainbowresidence/",
                  "resource_national": null,
                  "resource_states": [
                    {
                      "data": {
                        "state_abreviation": "NY",
                        "state_fullname": "New York"
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "Legal",
            "nodes": [
              {
                "id": "7095fada-1a13-59d4-b219-1add0cb3e633",
                "data": {
                  "resource_name": "The HIV Law Project",
                  "resource_description": "Serves low income NYC residents living with HIV/AIDS. Provides help with legal issues involving: public benefits, housing, or immigration.\n",
                  "resource_website": "https://www.housingworks.org/legal/hiv-law-project",
                  "resource_national": null,
                  "resource_states": [
                    {
                      "data": {
                        "state_abreviation": "NY",
                        "state_fullname": "New York"
                      }
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "Queer Spaces",
            "nodes": [
              {
                "id": "59833fc8-1f4e-5531-b5ab-1b3b905d6ea0",
                "data": {
                  "resource_name": "The Center",
                  "resource_description": "The Center is the cornerstone of our LGBTQ community in New York City. \nEach year, more than 400 community groups come here to meet and make \nconnections, find support systems, and to take advantage of our many \nresources.",
                  "resource_website": "https://gaycenter.org/",
                  "resource_national": null,
                  "resource_states": [
                    {
                      "data": {
                        "state_abreviation": "NY",
                        "state_fullname": "New York"
                      }
                    }
                  ]
                }
              },
              {
                "id": "cf18bc01-f651-52a9-b658-af07aea59fff",
                "data": {
                  "resource_name": "Growing LGBTQ+ Youth Support - Western New York",
                  "resource_description": "GLYS provides a safe and positive environment for LGBTQ+ youth to learn more about themselves through peer interaction and educational experiences. This chapter serves Western NY.\n\n",
                  "resource_website": "https://www.glyswny.org/",
                  "resource_national": null,
                  "resource_states": [
                    {
                      "data": {
                        "state_abreviation": "NY",
                        "state_fullname": "New York"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      "national": {
        "group": [
          {
            "type": "Health + Wellness",
            "nodes": [
              {
                "id": "eb500546-983d-5884-aa10-fcc64d683682",
                "data": {
                  "resource_name": "National LGBTQIA+ Health Education Center ",
                  "resource_description": "We Are The National LGBTQIA+ Health Education Center ",
                  "resource_website": "https://www.lgbtqiahealtheducation.org/",
                  "resource_national": true,
                  "resource_states": null
                }
              }
            ]
          }
        ]
      }
    };
    
    render(<Resources data={data} />);

    // Find heading, throw error if not found.
    // Ignore navbar links. 
    const heading = await screen.findByText("LGBTQIA+ Resources", {ignore: "script, style, nav a"});

    // Find state heading, throw error if not found.
    const state = await screen.findByText("New York");

    // Find sections, throw error if not found.
    const national = await screen.findByText("National");

  });
    
});

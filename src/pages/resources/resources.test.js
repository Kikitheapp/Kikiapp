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
            "state": "Maine",
            "group": [
              {
                "type": "Health + Wellness",
                "nodes": [
                  {
                    "id": "f68b5346-f200-50d5-b14b-6a4db1cbb840",
                    "data": {
                      "resource_name": "Franny Peabody Center",
                      "resource_description": "Empowering and supporting people living with or affected by HIV/AIDS in Maine through integrative care, education, advocacy, and prevention services.",
                      "resource_website": "https://www.peabodycenter.org/"
                    }
                  },
                  {
                    "id": "6fd9e3e2-e554-5e69-a69d-28a1590cc1f6",
                    "data": {
                      "resource_name": "Maine Family Planning",
                      "resource_description": "Gender-Affirming Healthcare Services",
                      "resource_website": "https://mainefamilyplanning.org/gender-affirming-healthcare/"
                    }
                  },
                  {
                    "id": "7512bd14-aa87-555f-b369-8c83ff9f7c27",
                    "data": {
                      "resource_name": "Health Equity Alliance ",
                      "resource_description": "Health Equity Alliance is a nonprofit, nonpartisan 501(c)(3) organization that provides HIV+ care, sexual health and wellness services, and harm reduction programs.",
                      "resource_website": "https://www.mainehealthequity.org/"
                    }
                  },
                  {
                    "id": "c51d77e4-a03f-537e-86d7-f6785161efec",
                    "data": {
                      "resource_name": "Mable Wadsworth Center",
                      "resource_description": "The Mabel Wadsworth Center provides high-quality, client-centered, nonjudgmental sexual and reproductive health care for people of all genders at our independent clinic in Bangor, Maine. ",
                      "resource_website": "https://www.mabelwadsworth.org/services/lgbtq-healthcare/"
                    }
                  }
                ]
              },
              {
                "type": "Legal",
                "nodes": [
                  {
                    "id": "1f964095-3655-599c-ac8c-b5514da76559",
                    "data": {
                      "resource_name": "ACLU Maine",
                      "resource_description": "Defending equality, liberty & justice in Maine, including LGBTQ rights.\n",
                      "resource_website": "https://www.aclumaine.org/en/about/what-we-do"
                    }
                  }
                ]
              },
              {
                "type": "Queer Spaces",
                "nodes": [
                  {
                    "id": "c2934102-62b8-5c53-a412-9608af835e3e",
                    "data": {
                      "resource_name": "Flask Lounge",
                      "resource_description": "Portland Maine Dance Club: Inclusive Nightlife, DJs, EDM, Live Bands",
                      "resource_website": "https://www.facebook.com/flasklounge"
                    }
                  },
                  {
                    "id": "7018cfb5-f102-518d-92b6-33ba0945c71b",
                    "data": {
                      "resource_name": "Cocktail Mary",
                      "resource_description": "Portland, Maine queer bar and LGBTQ+ community hub.",
                      "resource_website": "https://www.cocktailmary.com/"
                    }
                  },
                  {
                    "id": "5c42ff57-7c2f-5ab3-978e-8b265ebb8773",
                    "data": {
                      "resource_name": "Mainestreet",
                      "resource_description": "Mainestreet is northern New England’s largest gay nightclub featuring 2 dance rooms, 2 outdoor decks, and 3 bars… it’s the best place in Ogunquit to party and catch the best shows around.",
                      "resource_website": "https://www.mainestreetogunquit.com/"
                    }
                  },
                  {
                    "id": "8453845a-ac1a-58ea-b2ff-782c3de9ea5e",
                    "data": {
                      "resource_name": "MaineTransNet",
                      "resource_description": "MaineTransNet is a community based organization led by transgender people for transgender people, providing peer-to-peer support groups, social and community events, and more.",
                      "resource_website": "https://www.mainetrans.net/"
                    }
                  },
                  {
                    "id": "0525ee2d-f91f-5b65-87da-38aab9c78c1b",
                    "data": {
                      "resource_name": "Pride Aroostook",
                      "resource_description": "From the back roads to the back porches Pride Aroostook is welcoming & inclusive. County queers thrive with support from allies.",
                      "resource_website": "https://www.instagram.com/pridearoostook/"
                    }
                  },
                  {
                    "id": "650b8621-4aa2-516e-abdd-3f42abd4b572",
                    "data": {
                      "resource_name": "Out Maine",
                      "resource_description": "LGBTQ+ Youth Programs in Maine",
                      "resource_website": "https://www.outmaine.org/"
                    }
                  },
                  {
                    "id": "5374c0c5-35b4-5f32-96df-b313c59ac146",
                    "data": {
                      "resource_name": "Blackstones",
                      "resource_description": "Portland's oldest operating gay bar offering low prices and strong drinks.",
                      "resource_website": "https://www.facebook.com/PortlandBlackstones"
                    }
                  },
                  {
                    "id": "3f19b8ae-1dd3-51ab-9788-e7dd055b9b0f",
                    "data": {
                      "resource_name": "Outright Lewiston-Auburn",
                      "resource_description": "Outright Lewiston/Auburn creates safe and affirming environments for youth ages 12-21 who are lesbian, gay, bisexual, transgender, and/or questioning.",
                      "resource_website": "https://outrightla.org/"
                    }
                  }
                ]
              }
            ]
          },
          {
            "state": "New York",
            "group": [
              {
                "type": "Health + Wellness",
                "nodes": [
                  {
                    "id": "082f9fae-ae3f-5f71-aeef-58b1065344a2",
                    "data": {
                      "resource_name": "Gay Men’s Health Crisis",
                      "resource_description": "Gay Men’s Health Crisis",
                      "resource_website": "https://www.gmhc.org/"
                    }
                  },
                  {
                    "id": "cb1656f9-5346-5988-8c27-78166bae8b33",
                    "data": {
                      "resource_name": "AIDS Center of Queens County",
                      "resource_description": "Our Programs and Services include comprehensive medical care, case management, harm reduction and syringe exchange, health education and prevention services, transitional and permanent housing services, legal services, a licensed mental health clinic, and a food pantry program.",
                      "resource_website": "https://acqc.org/youth-drop-in-center/"
                    }
                  },
                  {
                    "id": "438b9a78-a6be-5577-8aa7-97d5ce747570",
                    "data": {
                      "resource_name": "Callen-Lorde Community Health Center ",
                      "resource_description": "Callen-Lorde Community Health Center provides sensitive, quality health care and related services targeted to New York’s lesbian, gay, bisexual, and transgender communities",
                      "resource_website": "https://callen-lorde.org/"
                    }
                  },
                  {
                    "id": "afc656db-1d68-5863-abbc-a1430a27a2c7",
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
                    "id": "e0d011b2-89ee-518c-811a-8481c303bf59",
                    "data": {
                      "resource_name": "Open Rainbow Residence",
                      "resource_description": "Without any limits contributing to stopping homelessness in our community.",
                      "resource_website": "https://www.facebook.com/openrainbowresidence/"
                    }
                  },
                  {
                    "id": "082e8d5f-f449-5657-8fb3-d5d73f240367",
                    "data": {
                      "resource_name": "Ali Forney Center",
                      "resource_description": "Providing food, shelter, and other resources to homeless LGBTQIA+ youth.",
                      "resource_website": "https://www.aliforneycenter.org/"
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
                      "resource_website": "https://www.housingworks.org/legal/hiv-law-project"
                    }
                  }
                ]
              },
              {
                "type": "Queer Spaces",
                "nodes": [
                  {
                    "id": "000486ab-185b-5b0f-b504-09ffaaeea9c6",
                    "data": {
                      "resource_name": "Pride Center of Staten Island",
                      "resource_description": "Staten Island’s LGBTQIA+ Community Center",
                      "resource_website": "https://www.pridecentersi.org/"
                    }
                  },
                  {
                    "id": "59833fc8-1f4e-5531-b5ab-1b3b905d6ea0",
                    "data": {
                      "resource_name": "The Center",
                      "resource_description": "The Center is the cornerstone of our LGBTQ community in New York City. \nEach year, more than 400 community groups come here to meet and make \nconnections, find support systems, and to take advantage of our many \nresources.",
                      "resource_website": "https://gaycenter.org/"
                    }
                  },
                  {
                    "id": "cf18bc01-f651-52a9-b658-af07aea59fff",
                    "data": {
                      "resource_name": "Growing LGBTQ+ Youth Support - Western New York",
                      "resource_description": "GLYS provides a safe and positive environment for LGBTQ+ youth to learn more about themselves through peer interaction and educational experiences. This chapter serves Western NY.\n\n",
                      "resource_website": "https://www.glyswny.org/"
                    }
                  },
                  {
                    "id": "ef936727-197f-5074-88bb-05ce5e924921",
                    "data": {
                      "resource_name": "Lambda Lounge",
                      "resource_description": "One of the city's only Black-owned gay bars.",
                      "resource_website": "https://lambdaloungeny.com/story"
                    }
                  },
                  {
                    "id": "9e2c4f95-9591-5e7f-baf8-70e857e0ca59",
                    "data": {
                      "resource_name": "Audre Lorde Project",
                      "resource_description": "The Audre Lorde Project is a Lesbian, Gay, Bisexual, Two Spirit, Trans and Gender Non-Conforming People of Color community organizing center, focusing on the New York City area",
                      "resource_website": "https://alp.org/"
                    }
                  },
                  {
                    "id": "b4b897e0-f631-56ab-843f-b8f6ba872e7f",
                    "data": {
                      "resource_name": "The Bush",
                      "resource_description": "A dyke bar for queers.",
                      "resource_website": "https://www.bushbk.com/"
                    }
                  },
                  {
                    "id": "6d51bdc9-fc54-5f63-947e-aef76abdeaca",
                    "data": {
                      "resource_name": "Happyfun Hideaway",
                      "resource_description": "Queer Tiki Disco Divebar",
                      "resource_website": "https://www.instagram.com/happyfunhideaway/?hl=en"
                    }
                  },
                  {
                    "id": "0586b7ca-058c-5c1c-810f-1674bb98b2d5",
                    "data": {
                      "resource_name": "Cubbyhole",
                      "resource_description": "Long-running lesbian bar",
                      "resource_website": "https://www.instagram.com/cubbyholebar/?hl=en"
                    }
                  },
                  {
                    "id": "1f00174d-9c32-5fed-a0c7-d0f21325264e",
                    "data": {
                      "resource_name": "Henrietta Hudson",
                      "resource_description": "Henrietta Hudson is a queer human space built by Lesbians.",
                      "resource_website": "https://henriettahudson.com/"
                    }
                  },
                  {
                    "id": "33ce9c55-436a-5d27-b509-03f0abdc577e",
                    "data": {
                      "resource_name": "C'mon Everybody",
                      "resource_description": "Queer owned bar and music venue",
                      "resource_website": "https://www.cmoneverybody.com/"
                    }
                  },
                  {
                    "id": "deefd39f-c0b1-5f89-91aa-559eeee25802",
                    "data": {
                      "resource_name": "Bluestockings Cooperative",
                      "resource_description": "A worker-owned activist space, community center, and feminist bookstore",
                      "resource_website": "https://bluestockings.com/"
                    }
                  },
                  {
                    "id": "47709c12-50b1-518f-9c9f-2d4f6961b714",
                    "data": {
                      "resource_name": "Ginger's Bar",
                      "resource_description": "Brooklyn's oldest lesbian bar.",
                      "resource_website": "https://www.instagram.com/gingersbar_brooklyn/?hl=en"
                    }
                  }
                ]
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
                "id": "79de8d0b-6e46-5588-aa70-e5a6f3910474",
                "data": {
                  "resource_name": "Retire Guide",
                  "resource_description": "LGBTQ+ Elders Health Care Guide",
                  "resource_website": "https://www.retireguide.com/guides/lgbtq-elder-health-care/",
                  "resource_national": true,
                  "resource_states": null
                }
              },
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
          },
          {
            "type": "Queer Spaces",
            "nodes": [
              {
                "id": "89c5bdbc-fb3a-5b86-864b-04c65d9aebf5",
                "data": {
                  "resource_name": "GLSEN",
                  "resource_description": "Creating a better world for LGBTQ students",
                  "resource_website": "https://www.glsen.org/",
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

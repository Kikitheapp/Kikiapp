import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import AppBanner from './app-banner'
import userEvent from '@testing-library/user-event';

describe("App Banner", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  const bannerText = "Our app is now available for download!";
  const androidLinkText = "Get it on Google Play";
  const iosLinkText = "Download on the App Store";


  it("links to Play Store and App Store on web browsers", async () => {    
      
      render(<AppBanner />);
  
      // Find heading, throw error if not found.
      const heading = await screen.findByText(bannerText);

      // Find links, throw error if not found.
      const android = screen.getByAltText(androidLinkText);
      const ios = screen.getByAltText(iosLinkText);

  });

  it("links to Play Store on Android browser", async () => {  
    
    global.navigator.userAgent = `Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) 
      AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19`;
    
    render(<AppBanner />);

      // Find heading, throw error if not found.
      const heading = await screen.findByText(bannerText);

      // Find android link, throw error if not found.
      const android = screen.getByAltText(androidLinkText);

      // Find iOS link, throw error if found.
      const ios = screen.queryByAltText(iosLinkText);
      expect(ios).not.toBeInTheDocument();

  });

  it("links to App Store on iOS browser", async () => {

    global.navigator.userAgent = `Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 
      (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1`;

    render(<AppBanner />);

    // Find heading, throw error if not found.
    const heading = await screen.findByText(bannerText);

    // Find iOS link, throw error if not found.
    const ios = screen.getByAltText(iosLinkText);
    
    // Find android link, throw error if found.
    const android = screen.queryByAltText(androidLinkText);
    expect(android).not.toBeInTheDocument();

  });

});

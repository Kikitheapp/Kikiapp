import * as React from 'react';
import { useEffect, useState } from 'react';
import './app-banner.css';

import appStoreBadge from '../../assets/images/index/app-store-badge.svg';
import playStoreBadge from '../../assets/images/index/google-play-badge.png';

const androidLink = "https://play.google.com/store/apps/details?id=com.kikitheapp.app";
const iosLink = "https://apps.apple.com/us/app/kiki-for-the-future/id6443610226";

 
/***
 * AppBanner component to display app download links
 * @returns {JSX.Element} AppBanner component
 ***/
function AppBanner(){
  // links with badges to app store
  const androidImg = <a href={androidLink} key="android-link" ><img src={playStoreBadge} alt="Get it on Google Play" className="android-link" /></a>;
  const iosImg = <a href={iosLink} key="ios-link" ><img src={appStoreBadge} alt="Download on the App Store" className="ios-link" /></a>;

  // state to keep track of platform
  const [platform, setPlatform] = useState('other');

  // check platform on mount
  useEffect(() => {
    if(/Android/i.test(navigator.userAgent)){
      setPlatform('android');
    } else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
      setPlatform('ios');
    }
  }, []);
  
  // build banner content, depending on platform
  let bannerContent = [];

  // If platform is not ios, add ios link
  if(platform !== 'ios'){
    bannerContent.push(androidImg);
  }
  // If platform is not android, add android link
  if(platform !== 'android'){
    bannerContent.push(iosImg);
  }

  return (
    <div className="app-banner bg-bright-orange p-2 text-center sticky-top">
      <h2 className="mb-0">Our app is now available for download!</h2>
      {bannerContent}
    </div>
  );

}

export default AppBanner;

import React, { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import Layout from '../../common/Layout';
import { BrowserView, MobileView } from 'react-device-detect';
import { UserContext } from '../../../context/UserContext';
import StepButtons from '../../common/StepButtons';
import StepButtonsCustom from '../../common/StepButtonsCustom';

import mobileHero from '../../../assets/images/cart.svg';
import desktopHero from '../../../assets/images/cart.svg';
import checkMark from '../../../assets/images/check.png';

export default function SuccessScreen() {
  const { token } = useContext(UserContext);

  const decodedToken = token ? jwtDecode(token) : null;

  console.log(decodedToken);
  //claims["kyc_url"]
  return (
    <Layout title="UnLock Mastercard<sup>&reg;</sup><br/>next steps">

      <div className="form-layout">

        <div className='finish-block'>

          <div className='finish-block-header'>
            <div className='block-header'>
                <p>Unlock</p>
                <span>Mastercard</span> 
            </div>
            <p>Next Steps</p>
          </div>

        <>
          {/*<p className="max-w-[75%] text-center text-base -mt-7">Next steps</p>*/}
          <MobileView className="hero-image hero-image-custom-finish">
            <img src={mobileHero} alt="Hero image" />
          </MobileView>
          <BrowserView className="hero-image hero-image-custom-finish">
            <img src={desktopHero} alt="Hero image" />
          </BrowserView>

          {/* <div className='ppp'> */}

          <h3 className="max-w-[75%] subtitle text-center text-base m-0">To get your card, you'll need to:</h3>
          <ol className="max-w-[90%] p-0 m-0 mb-1 success-list">
            <li className="text-primary-color">
              <span className="ml-2">Sign your UnLock Credit Terms</span>
            </li>
            <li className="text-primary-color">
              <span className="ml-2 ">
               Link your bank account
              </span>
            </li>
            <li className="text-primary-color">
              <span className="ml-2">
                Complete your <a target="_blank" rel="noreferrer" href={decodedToken?.kyc_url}>ID check</a>
              </span>
            </li>
          </ol>
          <div className='finish-block-info'>
            <p className="max-w-[80%] text-center">
              Keep an eye out for UnLock SMSes and emails.
            </p>
            </div>
          {/* <StepButtons handleGotoNext={() => {window.location.href = 'https://unlockb2b.com/confirmation/'}} /> */}
          <StepButtonsCustom handleGotoNext={() => {window.location.href = 'https://unlockb2b.com/confirmation/'}} />
          <div className="mt-4 mx-auto text-base success-info" onClick={handleClick}>
            {/*<b>You may now close this browser window</b>*/}
          </div>
          <p>
            <br />
          </p>
        </>

        {/* </div> */}

        </div>

      </div>

    </Layout>
  );
}

const handleClick = () => {
  // window.open('/', '_self');
  window.close();
};

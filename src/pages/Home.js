import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { UserContext } from '../context/UserContext';

/** services */
import { initToken } from '../service/api';
import { BrowserView, MobileView } from 'react-device-detect';

// import mobileHero from '../assets/images/landing_mobile.png';
import mobileHero from '../assets/images/landing_desktop.svg';
// import mobileHero from '../assets/images/landing_desktop-2.png';
import desktopHero from '../assets/images/landing_desktop-2.svg';

import { globalObject } from '../globalVars';

function Home() {
  const history = useHistory();
  const { updateContext } = useContext(UserContext);

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    updateContext({ renderPixel: params.has('src') && params.get('src') == 'mccorkell' });

    if (params.has('first_name') && params.get('first_name') != '') {
      globalObject.firstName = params.get('first_name');
    }
    if (params.has('surname') && params.get('surname') != '') {
      globalObject.lastName = params.get('surname');
    }
    if (params.has('business_name') && params.get('business_name') != '') {
      globalObject.companyName = params.get('business_name');
    }
    if (params.has('email') && params.get('email') != '') {
      globalObject.emailAddress = params.get('email');
    }
    if (params.has('mobile') && params.get('mobile') != '') {
      globalObject.mobileNumber = params.get('mobile');
    }

    let shouldStartProcess = false;
    for (let key in globalObject) {
      if (globalObject[key] && globalObject[key] !== '') {
        shouldStartProcess = true;
        break;
      }
    }
    if (shouldStartProcess) {
      startProcess();
    }

  }, []);

  const startProcess = async () => {
    try {
      // console.log(window.location.search)
      // console.log(history.location.pathname)
      const search = window.location.search;
      const params = new URLSearchParams(search);
      updateContext({ loading: true, error: '' });
      // console.log(params.get('src'))
      const res = await initToken({
        lead_referrer: params.has('src') ? params.get('src') : undefined,
      });
      updateContext({ loading: false });
      if (res && res.data) {
        updateContext({ token: res.data.Token });
        history.push('/signup');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    // <Layout title="Account Application 2">
      <Layout>
      <div className='form-layout'>

      <div className='home-body-form'>

        <div className='static-block-name'>
          <p>Account Application</p>
        </div>

        <MobileView className="hero-image">
          <img src={mobileHero} alt="Hero image" />
        </MobileView>
        <BrowserView className="hero-image">
          <img src={desktopHero} alt="Hero image" />
        </BrowserView>
        {/* <h3 className="subtitle">To start buying with UnLock within 24 hours you'll need:</h3> */}
        <p className="list-header">You will need:</p>
        <ul className="home-list">
          <li>
            <span>an active ACN or ABN</span>
          </li>
          <li>
            <span>to have been trading for at least 12 months</span>
          </li>
          <li>
            <span>no judgment defaults</span>
          </li>
        </ul>
        <div>
          <div className="d-flex bottom-actions align-center custom-button-start">
            <div className="d-flex">
              <button className="start-btn" onClick={startProcess}>
                Start your Application
              </button>
            </div>
          </div>
        </div>

      </div>

      </div>
    </Layout>
  );
}

export default Home;

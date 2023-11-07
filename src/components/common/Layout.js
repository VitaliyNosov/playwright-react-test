// import React, { useContext } from 'react';
// // import ReactLoading from 'react-loading';
// import { UserContext } from '../../context/UserContext';
// import PageHeader from './PageHeader';
// import mobileLoadingSpinner from '../../assets/images/loading_icon_mobile.gif';
// import desktopLoadingSpinner from '../../assets/images/loading_icon_desktop.gif';
// import { BrowserView, MobileView } from 'react-device-detect';

// const Layout = ({ children, title }) => {
//   const { loading, customLoadingText } = useContext(UserContext);

//   return (
//     <div className="page-layout">
//       {loading && (
//         <div className="custom-spinner">
//           <MobileView>
//             <img src={mobileLoadingSpinner} alt="loading..." />
//           </MobileView>
//           <BrowserView>
//             <img src={desktopLoadingSpinner} alt="loading..." />
//           </BrowserView>
//           {customLoadingText && <p className="custom-loading-text">{customLoadingText}</p>}
//         </div>
//       )}
//       <PageHeader title={title} />
//       <div className="layout-content">{children}</div>
//     </div>
//   );
// };

// export default Layout;






import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import PageHeader from './PageHeader';

const Layout = ({ children, title }) => {
  const { loading, customLoadingText } = useContext(UserContext);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const updateCounter = () => {
  //     if (count < 100) {
  //       setCount(prevCount => prevCount + 1);
  //     }
  //   };

    useEffect(() => {
      const updateCounter = () => {
        if (count < 100) {
          setCount(prevCount => prevCount + 1);
        } else {
          setCount(0); 
        }
      };

    const interval = setInterval(updateCounter, 600);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const progressBarStyle = {
    width: `${count}%`,
  };

  return (
    <div className="page-layout">
      {/* ... Ваши стили ... */}
      <div className="static-block">
        <p>Get approved within minutes to pay for business expenses</p>
        <p>with your <strong>UnLock Mastercard</strong></p>
      </div>

      {loading && (
        <div className="custom-spinner">
          <div id="container">
            <div id="counter">{`${count}%`}</div>
            <div id="progress-container">
              <div id="progress-bar" style={progressBarStyle}></div>
            </div>
            <div>
              <p>Processing your Application ...</p>
            </div>
          </div>
        </div>
      )}

      <PageHeader title={title} />
      <div className="layout-content">{children}</div>
    </div>
  );
};

export default Layout;

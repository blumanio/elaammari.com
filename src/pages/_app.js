import Theme from '../styles/theme';
import ReactGA from "react-ga"
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('G-PN4VRFQVWV');
    //G-PN4VRFQVWV
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
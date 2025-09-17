import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { trackPhoneClick } from './FacebookPixel';
import siteConfig from '../config/siteConfig.js';

function StickyCallButton() {
  const handleCallClick = () => {
    trackPhoneClick('sticky_call_button');
    window.location.href = `tel:${siteConfig.company.telephone}`;
  };

  return (
    <button
      onClick={handleCallClick}
      className="sticky-call-button"
      title={`Call ${siteConfig.company.telephone}`}
      aria-label={`Call ${siteConfig.company.telephone}`}
    >
      <FontAwesomeIcon icon={faPhone} />
    </button>
  );
}

export default StickyCallButton;

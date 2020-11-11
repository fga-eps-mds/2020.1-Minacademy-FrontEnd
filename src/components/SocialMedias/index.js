import React from 'react';
import { ReactComponent as Share } from '../../assets/images/share.svg';
import { ReactComponent as Linkedin } from '../../assets/images/media/linkedin.svg';
import { ReactComponent as Facebook } from '../../assets/images/media/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/media/twitter.svg';
import { ReactComponent as Whatsapp } from '../../assets/images/media/whatsapp.svg';
import './style.scss';

function SocialMedias({ certificate }) {
  const certificateLink = `${window.location.origin}/certificado/${certificate._id}`;
  return (
    <>
      <input type="checkbox" id={certificate._id} className="click" />
      <label for={certificate._id} class="share-btn">
        <span className="certificateList__buttons-share">
          <Share />
        </span>
        <a
          href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${
            certificate.certificateType === 'Learner'
              ? 'Conclusão do tutorial Django Girls'
              : 'Monitoria voluntária do tutorial Django Girls'
          }&organizationName=Minacademy&issueYear
=${new Date(certificate.createdAt).getFullYear()}&issueMonth=${
            new Date(certificate.createdAt).getMonth() + 1
          }&certId=${
            certificate._id
          }&certUrl=${`${window.location.origin}/certificado/${certificate._id}`}`}
          target="_blank"
        >
          <Linkedin />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${certificateLink}&quote=#Minacademy`}
          target="_blank"
        >
          <Facebook />
        </a>
        <a
          href={`https://web.whatsapp.com/send?text=${certificateLink}`}
          data-action="share/whatsapp/share"
          target="_blank"
        >
          <Whatsapp />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${certificateLink}`}
          target="_blank"
        >
          <Twitter />
        </a>
      </label>
    </>
  );
}

export default SocialMedias;

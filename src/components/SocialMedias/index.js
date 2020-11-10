import React from 'react';
import { ReactComponent as Share } from '../../assets/images/share.svg';
import { ReactComponent as Linkedin } from '../../assets/images/media/linkedin.svg';
import { ReactComponent as Facebook } from '../../assets/images/media/facebook.svg';
import './style.scss';

function SocialMedias({ certificate }) {
  return (
    <>
      <input type="checkbox" id="click" />
      <label for="click" class="share-btn">
        <span className="certificateList__buttons-share">
          {' '}
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
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/certificado/${certificate._id}&quote=Minacademy`}>
          <Facebook />
        </a>
        <a href="#">
          <Share />
        </a>
      </label>
    </>
  );
}

export default SocialMedias;

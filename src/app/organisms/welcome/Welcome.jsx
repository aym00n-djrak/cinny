import React from 'react';
import './Welcome.scss';

import Text from '../../atoms/text/Text';


function Welcome() {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img className="app-welcome__logo noselect" src="https://cdn.discordapp.com/attachments/1019884669837254666/1079862868268294184/Am00n_Logo_for_a_centralized_messagery_compagny_mail_logoletter_ebf625db-8274-4945-b6c5-d2d6e442e9bb.png" alt="Kwado9 logo" />
        <Text className="app-welcome__heading" variant="h1" weight="medium" primary>Welcome to Kwado9</Text>
        <Text className="app-welcome__subheading" variant="s1">Yet another matrix client</Text>
      </div>
    </div>
  );
}

export default Welcome;

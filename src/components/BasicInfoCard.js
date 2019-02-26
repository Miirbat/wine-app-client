import React from 'react';
import '../stylesheets/BasicInfoCard.css';

const BasicInfoCard = ( { info } ) =>
  <div>
    <ul>
      <li> { info.first_name } </li>
      <li> { info.last_name } </li>
      <li> { info.email } </li>

    </ul>
  </div>;

export default BasicInfoCard;

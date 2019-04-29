import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Here you Sign Out
  </button>
);

export default withFirebase(SignOutButton);
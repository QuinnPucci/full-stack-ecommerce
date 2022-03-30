import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if(loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page.
      </h4>
    );
  }  

  return (
    <div>
      <div className="">
        <h2 className="">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
      </div>

      <div className="">
        <div className="">
            <div><span>First Name: </span>{user.billingFirstName}</div>
            <div><span>Last Name: </span>{user.billingLastName}</div>
            <div><span>Email: </span>{user.email}</div>
            <div><span>User Name: </span>{user.username}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

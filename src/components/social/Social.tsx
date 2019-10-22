
import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './Social.scss';

interface ISocialInfo {
  likes: number;
  reviews: number;
  lists: string;
  media: string;
}

const SOCIALINFO_QUERY = gql`
  query SocialInfoQuery  {
   getSocialInfo(id:1) {
     likes
     reviews
     lists
     media
   }
  }
`;

export default function Social() {

  return (
    <Fragment>

      <Query query={SOCIALINFO_QUERY} >

        {({ loading, error, data }: any) => {

          if (loading) {
            return <h4></h4>;
          }

          if (error) {
            console.log(error);
          }

          console.log(data.getSocialInfo);

          return <SocialInfo socialInfo={data.getSocialInfo} />;
        }}

      </Query>
    </Fragment >
  );
}

function SocialInfo(props: { socialInfo: ISocialInfo }) {
  
  const { reviews, lists, media, likes } = props.socialInfo;

  let likeText: string;

  if (likes >= 1000) {

    likeText = likes / 1000 + 'k';

  } else {

    likeText = likes + '';

  }

  let reviewsText: string;

  if (reviews >= 1000) {

    reviewsText = reviews / 1000 + 'k';

  } else {

    reviewsText = reviews + '';

  }


  return (
    <div className="user-stats">

      <div className="stats-data">
        <p className="data">{likeText}</p>
        <p className="name">likes</p>
      </div>

      <div className="stats-data">
        <p className="data">{reviewsText}</p>
        <p className="name">reviews</p>
      </div>

      <div className="stats-data">
        <p className="data">{lists}</p>
        <p className="name">lists</p>
      </div>

      <div className="stats-data">
        <p className="data">{media}</p>
        <p className="name">media</p>
      </div>

    </div>
  )
}
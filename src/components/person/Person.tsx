
import React, { createRef } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Social from '../social/Social';
import Navigation from '../navigation/Navigation';
import './Person.scss';

interface IMe {
   id: string;
   name: string;
   avatar: string;
   background: string;
}

export default class Person extends React.Component {
   private $main = createRef<HTMLElement>();
   render() {

      const ME_QUERY = gql`
         query MeQuery {
            me {
               id
               name
               avatar
               background
               }
            }
         `;

      return (
         <main className="main" ref={this.$main}>
            <Query query={ME_QUERY} >
               {({ loading, error, data }: any) => {

                  if (loading) {
                     return <h4>Loading...</h4>;
                  }

                  if (error) {
                     console.log(error);
                  }

                  console.log(data.me);
                  
                  return this.PersonalInfo(data.me);

               }}
            </Query>
         </main>
      );
   }
   PersonalInfo(me: IMe) {

      const { background, avatar, name } = me;

      const useProfileStyles = {
         backgroundImage: `url(${avatar})`
      };

      return (
         <>
            <section className="section hero">
               <img alt="hero" src={background} className="hero-img" />
            </section>

            <section className="section user">
               <div className="container">
                  <figure className="user-image" style={useProfileStyles} >
                  </figure>

                  <div className="user-info">
                     <span className="user-name">{name}</span>
                     <Social></Social>

                  </div>
               </div>
            </section>

            <section className="section links">

               <Navigation $main={this.$main}></Navigation>

            </section>

         </ >
      );
   }
};


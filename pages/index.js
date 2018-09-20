import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Rightside from '../components/Rightside'

const Home = () => (
  <div className='page'>
    <Head title="Paula" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerMain'>
        <h2 className='bookTitle'>Thank You for Smoking: Fun and Fearless Recipes Cooked with a Whiff of Wood Fire on Your Grill or Smoker  </h2>
        <img className='currentBook' src='/static/images/thankyouforsmoking_cover16.jpg' />
        <p> Award-winning author and grilling expert Paula Disbrowe shows home cooks how to elevate everyday meals with seductive,
            smoky flavors in this collection of 100 recipes for smoking meats, fish, poultry, vegetables, nuts, grains, pantry staples, and even cocktails on a smoker or grill in as little as 30 minutes.
        </p>
        <Link className='newAmazon' href="https://www.amazon.com/Thank-You-Smoking-Fearless-Recipes-ebook/dp/B07F5YGFRG?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
          <a>
            <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
          </a>
        </Link>
      </div>
      <div className='rightSide'>
        <Rightside />
      </div>

    </div>

    <style jsx global>{`
      @font-face {
        font-family: 'Playfair Display', serif;
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
      }

      body {
        margin: 0;
      }
      .page {
        font-family: 'Playfair Display', serif;
      }

      .hero {
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows:  1fr;
        grid-template-areas:
          'leftSide center rightSide'
        gap: 10%;
      }

      .leftSide {
        // grid-area: leftSide;
        width: 100%;
        border-right: 1px solid rgb(3,22,52);
        display: block;
        // background-color: pink;
      }


      .centerMain {
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
      }

      .bookTitle {
        text-align: center;
      }

      .currentBook {
        width: 100%;
        align-self: center;
      }

      .newAmazon {
        margin-left: auto;
        margin-right: auto;
      }

      .rightSide {
        width: 100%;
        display: block;
        padding: 2%;
        border-left: 1px solid rgb(3,22,52);
      }



        @media only screen and (min-width : 321px) and (max-width: 578px) {
          .hero {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas:
              "center"
              "right"
              "left"
          }

          .leftSide {
            grid-area: left;
            width: 100%;
          }

          .centerMain {
            grid-area: center;
            width: 100%;
          }

          .rightSide {
            grid-area: right;
            width: 100%;
          }

          .centerMain {
            width: 85%;
            display: inline;
            margin-left: auto;
            margin-right: auto;
          }

          .currentBook {
            width: 100%;
            align-self: center;
          }

        }

    `}</style>
  </div>
)

export default Home

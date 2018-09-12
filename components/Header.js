import React from 'react';
import Link from 'next/link';

function Header() {
  return (
  <div className='navBar'>

    <Link className='navbar-logo' href="/index">
      <h2 className='logo'> Paula Disbrowe</h2>
    </Link>
    <div className='navbar-Links'>
      <Link className='navbar-home' href="/index">
        <a>Home</a>
      </Link>
      <Link className='navbar-about' href="/about">
        <a>About</a>
      </Link>
      <Link className='navbar-branding' href="/branding">
        <a>Branding</a>
      </Link>
      <Link className='navbar-books' href="/books">
        <a>Books</a>
      </Link>
      <Link className='navbar-articles' href="/articles">
        <a>Articles</a>
      </Link>
      <Link className='navbar-instagram' href="/instagram">
        <a>Instagram</a>
      </Link>
    </div>



    <style jsx>{`
      @media only screen and (min-width : 321px) and (max-width : 767px)  {
        @font-face {
          font-family: 'Playfair Display', serif;
          @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
        }



        a {
          text-align: center;
          align-self: center;
          text-decoration: none;
        }

        .navBar {
          list-style-type: none;
          text-decoration: none;
          background-color: rgb(3,22,52);
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: 1fr ;
          grid-template-areas:
          'logo navBarLinks navBarLinks';
          align-self: center;
          font-family: 'Playfair Display', serif;
          grid-gap: 10px 10px;
          margin-bottom: -50px;
        }

        .navbar-Links {
          grid-area: navBarLinks;
          display: grid;
          grid-template-columns: repeat(6, 1fr) ;
          grid-template-areas:
          'home about branding books articles instagram';
          grid-gap: 5px 0px;
        }

        .navbar-logo {
          grid-area: logo;
          display: inline;
          text-decoration: none;
          text-align: center;
        }

        .navbar-home {
          grid-area: home;
          display: inline;
          text-decoration: none;
        }

        .navbar-about {
          grid-area: about;
          display: inline;
          text-decoration: none;
        }

        .navbar-branding {
          grid-area: branding;
          display: inline;
          text-decoration: none;
        }

        .navbar-books {
          grid-area: books;
          display: inline;
          text-decoration: none;
        }

        .navbar-articles {
          grid-area: articles;
          display: inline;
          text-decoration: none;
        }

        .navbar-instagram {
          grid-area: instagram;
          display: inline;
          text-decoration: none;
        }

      }






    @media only screen and (min-width: 768px) {
      @font-face {
        font-family: 'Playfair Display', serif;
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
      }

      body {
        font-family: 'Playfair Display', serif;
      }

      a {
        text-align: center;
        align-self: center;
        text-decoration: none;
        color: #F9C78F;
      }

      .navBar {
        list-style-type: none;
        text-decoration: none;
        background-color: white;
        display: grid;
        grid-template-columns: 2fr  4fr ;
        grid-template-rows:  1fr  ;
        grid-template-areas:
        'logo   navbar-Links';
        grid-gap: 5px 10px;
        font-family: 'Playfair Display', serif;
        // margin-bottom: 30px;
        background-color: rgb(3,22,52);
        border-bottom: 1px solid black
  }


      .navbar-logo {
        grid-area: logo;
        display: inline;
        margin: 10px;
        text-decoration: none;
        align-self: center;

      }

      .logo {
        text-align: center;
        color: #F9C78F;
        font-family: 'Playfair Display', serif;
      }

      .navbar-Links {
        display: grid;
        grid-template-columns: repeat(6, 1fr) ;
        grid-template-areas:
        'home about branding books articles instagram';
        grid-gap: 5px 25px;
        justify-content: center;
        color: yellow;
      }

      .navbar-home {
        grid-area: home;
        display: inline;
        text-decoration: none;
        align-self: center;
        color: #F9C78F;
      }



      .navbar-portfolio {
        grid-area: portfolio;
        display: inline;
        text-decoration: none;

      }

      .navbar-contact {
        grid-area: contact;
        display: inline;
        text-decoration: none;

      }

      .navbar-resume {
        grid-area: resume;
        display: inline;
        text-decoration: none;

      }

      .navbar-photos {
        grid-area: home;
        display: inline;
        text-decoration: none;
        align-self: center;

      }

    }


  `}</style>


  </div>
  );
}

export default Header;

import React, { Component } from "react";

export default class Footer extends Component {


  render() {
    return (
      <div className='bg-dark text-white py-4'>
        <div className='container text-center'>
          <p className='mb-0'>
            <i className='fas fa-crown text-warning'></i> Proudly crafted by{" "}
            <a
              href='https://creativeprogrammers.000webhostapp.com/aniket/'
              target='_blank'
              className='text-light'
              rel='noopener noreferrer'
            >
              Aniket Ram Kewat
            </a>{" "}
            | &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <div className='mt-3'>
            <a
              href='tel:+916266562082'
              target='_blank'
              className='text-light mr-3'
              rel='noopener noreferrer'
            >
              <i className='fas fa-phone'></i> +91 6266562082
            </a>
            <a
              href='mailto:aniket07r@gmail.com'
              target='_blank'
              className='text-light mr-3'
              rel='noopener noreferrer'
            >
              <i className='fas fa-envelope'></i> aniket07r@gmail.com
            </a>
            <a
              href='https://github.com/MrAniket1'
              target='_blank'
              className='text-light mr-3'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i> GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/aniket-ram604a31254/'
              target='_blank'
              className='text-light mr-3'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i> LinkedIn
            </a>
            <a
              href='https://www.facebook.com/me.aniket1'
              target='_blank'
              className='text-light mr-3'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook'></i> Facebook
            </a>
            <a
              href='https://www.instagram.com/mister_aniketram/'
              target='_blank'
              className='text-light'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i> Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }
}

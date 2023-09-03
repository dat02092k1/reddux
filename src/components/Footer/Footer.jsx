import React from 'react'
import './Footer.css';

export default function Footer(props) {
  const {isOpenPost, setOpen} = props;
  return (
    <>
        <footer className='footer-title' onClick={() => setOpen(!isOpenPost)}>
            {isOpenPost ? 'x' : '+'}
        </footer>
    </>
  )
}

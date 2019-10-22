import React, { RefObject } from 'react';
import './Navigation.scss';

const links = ['Activity', 'Lists', 'Reviews', 'Media', 'Connections'];

// Dynamic css classes generation
const iconClasses = ['icon-red', 'icon-green', 'icon-blue', 'icon-yellow']

export default function Navigation(props: { $main: RefObject<HTMLElement> }) {

  const $main = props.$main.current;

  // attribute a new class compact when when link is active
  const changeView = (index: number) => {
    if ($main) {

      $main.classList.add('compact');

    }
    const $links = document.querySelectorAll('.links-ctn > .link');

    if ($links.length > -1) {

      $links.forEach(($link, i) => {
        if (i === index) {
          $link.className = 'link is-active';
        } else {

          $link.className = 'link';
        }

      });
    }

  }

  return (
    <nav className="user-links">
      <div className="container">

        <div className="links-ctn">
          {
            links.map((link, index) => <a id={'item_' + index} key={index} onClick={() => changeView(index)} className="link">{link}</a>)
          }
        </div>

        <div className="outside-links">
          {
            iconClasses.map((icon, index) => <div key={index} className={icon}></div>)
          }
        </div>
      </div>

    </nav>
  )


}

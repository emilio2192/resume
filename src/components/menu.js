import React from 'react';

import '../_css/menu.css';

export default class MyNavbar extends React.Component{
    render(){
        return(
            <nav id="menu">
                <div className='title'>Resume</div>
                <ul className='listLanguages'>
                    <li>
                        <a href='#'>
                            English
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

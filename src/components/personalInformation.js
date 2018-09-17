import React from 'react';

import '../_css/personalInformation.css';
import profilePicture from '../_css/_img/profile.jpg';
import { MdMenu } from "react-icons/md";

const message = {
    en : {
        lblName:'Name',
        name:'Luis Emilio Reyes Palma',
        lblSite:'Site',
        site:'http://gocentroamerica.com/resume?lang=en',
        lblAge:'Age',
        age:'26',
        lblBorn:'Country Born',
        born:'Guatemala City',
        lblEmail:'E-mail',
        email:'lreyes@guatemalagps.com',
        lblLiving:'Living',
        living:'Guatemala',
        lblPhone:'Phone',
        phone:'+50242820081',
        lblLinkedin: 'Linkedin',
        linkedin:'https://www.linkedin.com/in/luis-emilio-reyes-palma-41980110b/',
        goProfileLinkedin: 'Go to profile',
    }
};
export default class PersonalInformation extends React.Component{
    render(){
        //let bg = {backgroundImage:'url('+profilePicture+')'};
        let bg = {};
        return(
            <div id="personal-information-container">
                <div className='profilePicture' style={bg}></div>
                <div className='information-container'>
                    <div className='col'>
                        <label>{message.en.lblName}:</label>
                        {message.en.name}
                    </div>
                    <div className='col'>
                        <label>{message.en.lblSite}:</label>
                        <a href={message.en.site} target='_blank'>{message.en.site}</a>
                    </div>
                    <div className='col'>
                        <label>{message.en.lblAge}:</label>
                        {message.en.age}
                    </div>
                    <div className='col'>
                        <label>{message.en.lblBorn}:</label>
                        {message.en.born}
                    </div>
                    <div className='col'>
                        <label>{message.en.lblEmail}:</label>
                        {message.en.email}
                    </div>
                    <div className='col'>
                        <label>{message.en.lblLiving}:</label>
                        {message.en.living}
                    </div>
                    <div className='col'>
                        <label>{message.en.lblPhone}:</label>
                        {message.en.phone}
                    </div>
                    <div className='col'>
                        <label>{message.en.lblLinkedin}:</label>
                        <a href={message.en.linkedin} target='_blank'>
                            {message.en.goProfileLinkedin}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
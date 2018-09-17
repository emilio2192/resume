import React from 'react';
import ReactDom from 'react-dom';
import './_css/style.css';
import MyNavbar from './components/menu';
import PersonalInformation from './components/personalInformation.js';

class Landing extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.title = "sadasd"
    }
    render(){
        return[
            <MyNavbar />,
            <PersonalInformation />
        ];
    }
}

ReactDom.render(
    <Landing />,
    document.getElementById('root')
);
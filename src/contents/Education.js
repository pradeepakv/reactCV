import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="MBA Systems" where="Madras University" from="July 2013" to="Present"/>
            <Widecard title="SSLC | HSC" where="VKV Higher Secondary School" from="2001" to="2007"/>
            </div>
            )
        }
    }
    
export default Education
    
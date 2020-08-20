import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="MBA Systems" where="Madras University" from="July 2013" to="July 2016"/>
            <Widecard title="MBA Systems" where="Cape Institute of technology" from="July 2007" to="July 2011"/>
            <Widecard title="SSLC | HSC" where="VKV Higher Secondary School" from="2001" to="2007"/>
            <p>
                <a href="https://drive.google.com/file/d/1wod9OHeeRlA7PdKIiGKFWIGWPBTtKUFG/view?usp=sharing" className="button"><i className="fa fa-download"></i>Download Resume</a>
            </p>
            </div>
            )
        }
    }
    
export default Education
    
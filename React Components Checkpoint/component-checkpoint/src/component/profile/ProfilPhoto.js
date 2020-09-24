import React, { Component } from 'react'
import photo from "./photo.png"
import './profileStyle.css';
export default class ProfilPhoto extends Component {
    render() {
        return (
            <div>
                <img  src={photo} ></img>
            </div>
        )
    }
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return (
        <div style={{ padding: "2rem", paddingLeft: "20%" }}>
            <h1 style={{ textDecorationLine: "underline" }}>Contact Us:</h1>
            <h3 style={{ paddingTop: "1.5rem" }}>☎️: (209) 237 8280</h3>
            <h3>
                <FontAwesomeIcon icon={faEnvelope}/>: thuytienthuytien134@gmail.com </h3>
            <h3>
                <FontAwesomeIcon icon={faFacebook} style={{color:"cornflowerblue"}}/>: <a href='https://www.facebook.com/thuytien.thuytiennguyen'>https://www.facebook.com/thuytien.thuytiennguyen</a></h3>
        </div>
    )
}

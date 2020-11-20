import React from 'react';
import './Home.css';
import VideoPotion from './video/background-video.mp4';

export default function Home(){
    return(
        <div className="full-screen">
            <video autoPlay loop muted>
                <source src={VideoPotion} type="video/mp4" />
            </video>
            <div className="content-title">
                <h1><span>M</span>armi<span>P</span>otion</h1>
                <p className="desc">Rethink your emotion...</p>
                <div className="discover">
                <a href="#intro"><button className="btn-discover">Discover Now</button></a>
                </div>
            </div>
        </div>
    );
}
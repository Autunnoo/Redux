import React, { Component } from "react";
import "./post.css";
import galochka from './galochka.png';
import like from './like.png';
import messages from './message.png';
import repost from './repost.png';
import share from './share.png';


const Post = ({ author, content, image, date }) => {
    const { name, photo, nickname } = author;
    return (
      
       
        <div id='osnova'> 
            <div>
                <div id='header'>
                    <img id='userPhoto' src={photo} alt=""/>
                    <div id='userData'>
                        <div id='userInfo'>
                            
                                <h2>
                                    <a id='aName' href='#'>
                                        {name}
                                    </a>
                                </h2>
                                <img id='galochka' src={galochka} alt=''/>
                                <a id='nickname' href='#'>
                                    {nickname}
                                </a>
                                {/* <span id="point">.</span>
                                <span id='date'>{date}</span> */}
                            </div>
                            <span id='content'>
                                {content}
                            </span>
                        </div>                      
                    </div>
                
            </div>
            <div id='image'>
                <img  id='imageImage' src={image}/>
            </div>
            <div id='footerIcon'>
                <div id='iconContainer'>
                    <img id='messages' src={messages}/>
                    <span>
                        482
                    </span>
                </div>
                <div id='iconContainer'>
                    <img id='share' src={share} alt=''/>
                    <span>
                        146
                    </span>
                </div>
                <div id='iconContainer'>
                    <img id='like' src={like}/>
                    <span>
                        887
                    </span>
                </div>
                <div id='iconContainer'>
                    <img id='repost' src={repost}/>
                </div>             
            </div>
        </div>

        
    )
}

export default Post;
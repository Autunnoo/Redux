import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./post/post.css";
import galochka from './post/galochka.png';
import like from './post/like.png';
import messages from './post/message.png';
import repost from './post/repost.png';
import share from './post/share.png';


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";



class Post extends Component {
render() {
return (
  <div id='osnova'> 
            <div>
                <div id='header'>
                    <img id='userPhoto' src={ANAKIN_IMAGE} alt=""/>
                    <div id='userData'>
                        <div id='userInfo'>                            
                                <h2>
                                    <a id='aName' href='#'>
                                        {this.props.post.title}
                                    </a>
                                </h2>
                                <img id='galochka' src={galochka} alt=''/>
                                <a id='nickname' href='#'>                                 
                                    @Autunno
                                </a>
                        </div>
                            <span id='content'>
                                {this.props.post.message}
                            </span>
                        </div>                      
                    </div>
                
            </div>
            <div id='image'>
              <img id='imageImage' srcSet={this.props.post.foto} alt={this.props.post.foto}/>
            </div>
            <div id='footerIcon'>
                <div id='iconContainer'>
                    <img id='messages' src={messages}/>
                    <span>
                        0
                    </span>
                </div>
                <div id='iconContainer'>
                    <img id='share' src={share} alt=''/>
                    <span>
                        0
                    </span>
                </div>
                <div id='iconContainer'>
                    <img id='like' src={like}/>
                    <span>
                        0
                    </span>
                </div>
                <div id='iconContainer'>
                    <img id='repost' src={repost}/>
                </div>             
            </div>
        </div>

);
}
}

export default connect()(Post);
import React, { Component } from "react";
import Post from './post'


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";



export default class Posts extends Component {
    render() {
        return (
        <>    
            <Post author={{
                name: "Anakin skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
             }}
             content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
             image={RAY_IMAGE}
             date={"26 февр."}
              />

            <Post author={{
                name: "Сhubaka Brazzers",
                photo: "https://vokrug.tv/pic/news/4/d/e/9/4de9ff942cdc6a7f43d7de10bf151153.jpg",
                nickname: "@dart_vader"
             }}
             content="Luke !!! 1 Fly already! I'm ready"
             image="https://icdn.lenta.ru/images/2017/12/14/18/20171214185724933/detail_62e511d5ee11fb831f47c49eafd8bc81.jpg"
             date={"16 февр."}
              />

            <Post author={{
                name: "Anakin skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
             }}
             content="I am young"
             image="https://genplan.ucoz.net/_si/0/16417440.png"
             date={"06 февр."}
              />

        </>      
            );
        }
    }
    
    
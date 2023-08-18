import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ArtecaleData} from "../ArticalsData";
import css from "./SingleBlog.module.css";
import clapImg from "../../Image/rythm.svg";
import share from "../../Image/share.svg";
import Arrow from "../../Image/arrow.svg"

import { useAutoAnimate } from '@formkit/auto-animate/react';


import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube} from "react-icons/io5";


function SingleBlog() {

// Use Auto-Animeat Libery
let [someCardanimetion] = useAutoAnimate();


  // used for top big card
let [clickBlog, setClickBlog] = useState("");
let {passPara} = useParams();


// Use for bottom card
let [blog, setBlog] = useState(ArtecaleData);
let [noOfBlog, setNoOfblog] = useState(3);
let [load, setLoad] = useState(true);

// let lodeCard = document.querySelector("#lodeCard");

useEffect(() => {
  const currentBlog = ArtecaleData.filter((blog) => {
    let findBlog = blog.listblog === passPara;
    return findBlog;
  })
  
  setClickBlog(currentBlog[0]);
  
  
  if(noOfBlog == blog.length){
    // lodeCard.innerHTML = "Reset card";
    setLoad((pre) => pre = false);
  }
  else{
    // lodeCard.innerHTML = "Load Card";
    setLoad((pre) => pre = true);
  }
  
 
}, [noOfBlog]);


let showMoreCard = () =>{
  
  if(noOfBlog + 2 < blog.length){
    setNoOfblog((number) => number + 2);
    
  }else{
    setNoOfblog((number) => number = blog.length);
    
  }

  if(noOfBlog == blog.length){
    setNoOfblog((number) => number = 3);
    // lodeCard.innerHTML = "Load Card";
    setLoad((pre) => pre = true);
  }
 
}



let showUpsideCard = (lowerContent) => {
  setClickBlog((state) => state = lowerContent);
}


let showSomeBlog = blog.slice(0, noOfBlog).map((blog, index) => {
     let { listblog, image, profile, publishedDate, time, author,title} = blog;
     
     return(
       <div className={css.moreCard} key={index} onClick={() => showUpsideCard(blog)}>
         <div className={css.moreImage}>
           <img src={ image} alt="card_img"/>
         </div>
         <div className={css.lastAutherContent}>
          <div className={`${css.title} ${css.lastTitle}`}><h2>{title}</h2></div>
          <div className={`${css.authorContainer} ${css.lastAutherContainer}`}>
            <div className={css.authorDetails}>
              <img src={profile} alt='Profile_img' className={css.lastAuthorImg}/>
              <div className={css.authorName}> 
                <p>{author}</p>
                <div>
                  <span>{publishedDate}, &nbsp;</span>
                  <span>{time}</span>
                </div>
                
              </div>
            </div>
          </div>
         </div>
       </div>
     )
   
  })
   


  let {listblog, author, publishedDate, time, body, title, clap, profile, image, codeImage} = clickBlog;

  return (
    <div className={css.heroContainer}>
      <div className={css.blogContainer}>
      <div className={css.outSideIcon}>
          <div className={css.iconBox}>
            <img src={clapImg} alt="Clape_Image"/>
            <span>{clap} claps</span>
          </div>
          <div className={css.iconBox}>
            <img src={share} alt="Clape_Image"/>
            <span>Share this article</span>
          </div>
          
        </div>
      <div className={css.contentContainer}>
        <div className={css.title}>
          <h2>{title}</h2>
        </div>
        <div className={css.authorContainer}>
          <div className={css.authorDetails}>
            <img src={profile} alt='Profile_img' />
            <div className={css.authorName}> 
              <p>{author}</p>
              <div>
                <span>{publishedDate}, &nbsp;</span>
                <span>{ time}</span>
              </div>
            </div>
          </div>
          <div className={css.socialIcon}>
              <IoLogoFacebook />
              <IoLogoTwitter /> 
              <IoLogoInstagram /> 
              <IoLogoYoutube />
            </div>
        </div>

        <div className={css.mainImage}>
          <img src={image} alt='blog_Image'/>
          <div>
            <h3>The blog content is showimg here...</h3>
            <button>Read Now</button>
          </div>
          
        </div>

        <div className={css.bodyContent}>
          <p>{body}</p>
        </div>

        <div className={css.Codeimg}>
          <p>Let’s talk about them</p>
          <img src={codeImage} alt="code_Image" />
          <div>
            <button>React Js</button>
            <button>Javascript</button>
            <button>Animation</button>
          </div>
        </div>

        <div className={css.clap}>
          <img src={clapImg} alt="Clape_Image"/>
          <span>{clap} claps</span>
        </div>

        <div className={css.authorContainer}>
          <div className={css.authorDetails}>
            <img src={profile} alt='Profile_img' />
            <div className={css.authorName}> 
              <span className={css.lastAuthorName}>WRITTEN BY</span>
              <p>{author}</p>
              <div>
                <span>{publishedDate}, &nbsp;</span>
                <span>{time}</span>
              </div>
              
            </div>
          </div>
        </div>

      </div>
        
      </div>

      <div className={css.moreArticleContener}>
        <div className={css.title}>
          <h4>More From The Siren</h4>
        </div>
        <div className={css.moreArticle} ref={someCardanimetion}>
          {showSomeBlog}
        </div>
        <div className={css.ShowMore} onClick={showMoreCard}>
          <img src={Arrow} atl="showMore_Bloges" />
          <span > {load ? "Load More" : "Reset Card"}</span>
        </div>
      </div>
      
    </div>
  )
}

export default SingleBlog;
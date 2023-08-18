import React from 'react';
import css from "../Articles/SingleBlog.module.css";
import storyCss from "./Stories.module.css";
import { useEffect, useState } from 'react';
import {StoriesData} from "../ArticalsData";
import Arrow from "../../Image/arrow.svg"

import { useAutoAnimate } from '@formkit/auto-animate/react';

function Stories() {
  let [blog, setBlog] = useState(StoriesData);
  let [noOfBlog, setNoOfblog] = useState(3);
  let [load, setLoad] = useState(true);
  let [someCardanimetion] = useAutoAnimate();


  useEffect(() => {
    
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


  let showSomeBlog = blog.slice(0, noOfBlog).map((blog, index) => {
    let { listblog, publishedDate, title, body} = blog;
    
    return(
      <div className={`${css.moreCard} ${storyCss.storieCard}`} key={index}>
        <div className={`${css.lastAutherContent} ${storyCss.storyContenair}`}>
         <div className={`${css.title} ${css.lastTitle} ${storyCss.storyTitle}`}><h2>{title}</h2></div>
         <div className={`${css.authorContainer} ${css.lastAutherContainer}`}>
           <div className={`${css.authorDetails} ${storyCss.storyDetails}`}>
             <div className={`${css.authorName} ${storyCss.storyBody}`}> 
               <p>{body}</p>
               <div>
                 <span><b>TECH / &nbsp;</b>{publishedDate}, &nbsp;</span>
                 
               </div>
               
             </div>
           </div>
         </div>
        </div>
      </div>
    )
  
 })



  return (
    <div className={css.moreArticleContener}>
    <div className={css.title}>
      <h4>Lates Stories</h4>
    </div>
    <div className={css.moreArticle} ref={someCardanimetion}>
      {showSomeBlog}
    </div>
    <div className={css.ShowMore} onClick={showMoreCard}>
      <img src={Arrow} atl="showMore_Bloges" />
      <span > {load ? "Load More" : "Reset Card"}</span>
    </div>
  </div>
  )
}

export default Stories;
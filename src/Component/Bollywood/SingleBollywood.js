import React,  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {ArtecaleData} from "../ArticalsData";
import singleBollCss from "./singleBollywood.module.css";
import css from "../Articles/SingleBlog.module.css";
import clapImg from "../../Image/rythm.svg";
import share from "../../Image/share.svg";
import Arrow from "../../Image/arrow.svg"


import { useAutoAnimate } from '@formkit/auto-animate/react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube} from "react-icons/io5";




function SingleBollywood() {

    // Use Auto-Animeat Libery
    let [someCardanimetion] = useAutoAnimate();
    let navigate = useNavigate();

    // used for top big card
    let [clickBlog, setClickBlog] = useState("");
    let {passBollywoodCard} = useParams();


    useEffect(() => {
        const currentBlog = ArtecaleData.filter((blog) => {
          let findBlog = blog.listblog === passBollywoodCard;
          return findBlog;
        })
        
        setClickBlog(currentBlog[0]);
      });

      let {listblog, author, publishedDate, time, body, title, clap, profile, image, codeImage} = clickBlog;
  return (
    <div className={css.heroContainer} key={listblog}>
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

      <div className={singleBollCss.navigationBtn} onClick={() => {navigate("/bollywood");}}>
        <img src={Arrow} alt="navigation_icon" />
        <button>Go Back</button>
      </div>
      
    </div>
  )
}

export default SingleBollywood;
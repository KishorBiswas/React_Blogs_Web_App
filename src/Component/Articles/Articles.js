import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import css from "./Articles.module.css";
import Arrow from "../../Image/arrow.svg"

// Insert Swiper js Libery
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { ArtecaleData, VarticalGalaryImg, PostData} from "../ArticalsData";

// Use Auto-Animeat Libery
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Articles() {

let [articels, setArticels] = useState(ArtecaleData);
let [showNoOfArticle, setshowNoOfArticle] = useState(4);
let [load, setLoad] = useState(true);


let [postData, setPostData] = useState(PostData);
let [numOfPostData, setnumOfPostData] = useState(4);

let [showCardAnimetion] = useAutoAnimate();

useEffect(() => {

    if(showNoOfArticle == articels.length ){
      // lodeCard.innerHTML = "Reset card";
      setLoad((pre) => pre = false);
    }
    else{
      // lodeCard.innerHTML = "Load Card";
      setLoad((pre) => pre = true);
    }
    
   
  }, [showNoOfArticle]);





let showMore = () => {
    if(showNoOfArticle + 2 < articels.length ){
        setshowNoOfArticle((state) => state + 2);
    }else{
        setshowNoOfArticle((state) => state = articels.length);
        
    }

    if(showNoOfArticle == articels.length ){
        setshowNoOfArticle((number) => number = 4);
        // lodeCard.innerHTML = "Load Card";
        setLoad((pre) => pre = true);
    }
}


let showArticles = articels.slice(0, showNoOfArticle).map((artical, index) => {
    let {listblog, title, body, publishedDate, image} = artical;
    return (
        // <Link  className={css.linkComponent}>
        <Link to={listblog} key={index} className={css.cardContainer} >
            <div className={css.imgContainer}>
                <img src={image} alt="bligImg" />
            </div>
            <div className={css.cardContent}> 
                <h3>{title}</h3>
                <p>{body.slice(0, 80)}</p>
                <span><b>Travel &nbsp; </b> / {publishedDate}</span>
            </div>
            
        </Link>
        // </Link>
    )
});






  return (
    <div className={css.mainContainer}>
        <div className={css.title}>
            <h3>Latest Articles</h3>
        </div>

        <div className={css.itemContainer}>
            <div className={css.articleContainer}>
                <div className={css.articlesList} ref={showCardAnimetion}>
                        {showArticles.length ? showArticles : "Bloges is Loading..."}
                    <div className={css.ShowMore} onClick={showMore}>
                        <img src={Arrow} atl="showMore_Bloges" />
                        <span> {load ? "Load More" : "Reset Card"}</span>
                    </div>
                </div>
                <div className={css.verticalGelary}>
                    <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    // loop= {true}
                    className={css.myVarticelSlide}
                    >
                        {VarticalGalaryImg.map((items, index) => {
                            let {title, publishDate, image} = items;
                            return(
                                <SwiperSlide className={css.mySwiper_slide} key={index}>
                                    <img src={image} alt="swiper_Image" />
                                    <h4>{title}</h4>
                                    <span><b>Travel &nbsp;</b>/ {publishDate}</span>
                                </SwiperSlide>
                            )
                        })}
                        
                    </Swiper>
                </div>
            </div>

            <div className={css.postContainer}>
                <div className={css.advertisment}>
                    <p>Advertisment</p>
                </div>
                <div className={css.postCardList}>
                <div className={css.title}>
                    <h3>Top Post</h3>
                </div>
                    {postData.slice(0, numOfPostData).map((post, index) => {
                        let {listblog, title, body, publishedDate, image} = post;

                        return(
                            
                            <div className={css.postCard} key={index}>
                                <img src={image} alt="Post_Blog" />
                                <div className={css.postContent}>
                                    <h3>{title}</h3>

                                    <span><b>Travel &nbsp;</b> / {publishedDate}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles;
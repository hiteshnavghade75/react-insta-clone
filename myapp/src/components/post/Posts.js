import React from "react";
import "./posts.css"
import heart from "../../images/heart.png"
import share from "../../images/share.png"

export default function Posts() {
  return <>
  
    <div className="post-container">
      <div className="header-container">
        <header>
          <p className="three-dots">&#8226;&#8226;&#8226;</p>
          <span>Siva</span>
          <span>Banglore</span>
        </header>
      </div>
      <div className="body-container">
        <img src="https://th.bing.com/th/id/R.ee40033f64923ad14fa4e3d981489446?rik=Ahl9JUObw3%2bSow&riu=http%3a%2f%2f4.bp.blogspot.com%2f-8_hVQYjHkb8%2fUQ_dLeyysjI%2fAAAAAAAADf0%2fF7gIld_n7A4%2fs1600%2fHarry-Potter-Wallpaper-harry-potter-25652284-1024-768.jpg&ehk=1w8LsHbZJQ6%2fJnbF4EVjf3nshI94UTJkBIsWDyn0aQM%3d&risl=&pid=ImgRaw&r=0" alt="post_image"/>
      </div>
     <div className="footer-container">
      <footer>
        <span>10-Jan-2023</span>
        <img src={heart} alt="heart_image"/>
        <img src={share} alt="share_image" />
        <p className="likes">64 Likes</p>
        <h4>Welcome to Hogwartz</h4>
      </footer>
     </div>
    </div>
  </>
}
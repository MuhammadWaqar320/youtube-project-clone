import React from "react";

import { GrHome } from "react-icons/gr";
import { AiOutlineUpload} from "react-icons/ai";
import { MdOutlineExplore, MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineWatchLater } from "react-icons/md";
import { RiVideoLine     } from "react-icons/ri";
import { BiLike    } from "react-icons/bi";
import {GrHistory} from "react-icons/gr";
import HrLine from "../../atoms/horizontalLine/hrLine";
import SubscriptionList from "../../atoms/sideBarList/subscriptionList";


import "./sideBar.css";
import SideBarList from "../../atoms/sideBarList/sideBarList";
const SideBar = () => {
  const news24Image = "https://upload.wikimedia.org/wikipedia/en/9/93/24_News_HD_Logo.png";
  const geoNewsImage = "https://play-lh.googleusercontent.com/L9CCnh8HPYLEOiDFmKLy-_HV9kyG68_xMU4aEW_gB-OHIw8xsyWXthGGGHnjIjUquNZS";
  const expressImage = "https://play-lh.googleusercontent.com/Fd4Fk_D17i-kZPQmjwBuoJQt426gz_sLJ2Glx0nse6A5LDWMTGbjBwEyap6FP1edjA";
  const ishtarMusicImage = "https://play-lh.googleusercontent.com/uqs0CSEtIaLGU-a8uz15AZHCV_9eWbPzBIPll0UItiOwUashMHC_oDIT0EfGMOnqiAw";
  return (
    <div className="side-main">
      <div className="side-nav">
        <SideBarList title="Home" icon={<GrHome />} active="active" toNavigate='/' />
        <SideBarList title="Explore" icon={<MdOutlineExplore />} toNavigate='/explore'  />
        <SideBarList title="Shorts" icon={<GrHome />} toNavigate='/shorts' />
        <SideBarList title="Subscriptions" icon={<MdOutlineSubscriptions />} toNavigate='/' />
      </div>
      <HrLine />
      <div className="side-nav">
        <SideBarList title="Library" icon={<MdOutlineVideoLibrary />} toNavigate='/' />
        <SideBarList title="History" icon={<GrHistory />} toNavigate='/' />
        <SideBarList title="Upload" icon={<AiOutlineUpload />} toNavigate='/upload' />
        <SideBarList title="Watch Later" icon={<MdOutlineWatchLater />} toNavigate='/' />
        <SideBarList title="Liked" icon={<BiLike />} toNavigate='/' />
      </div>
      <HrLine />
      <div className="side-nav">
        <p>SUBSCRIPTIONS</p>
        <SubscriptionList title="24 News HD" image={news24Image} />
        <SubscriptionList title="Geo News" image={geoNewsImage} />
        <SubscriptionList title="Express" image={expressImage} />
        <SubscriptionList title="Samaa" image={ishtarMusicImage} />
      </div>
    </div>
  );
};

export default SideBar;


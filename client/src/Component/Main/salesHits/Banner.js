import React, { useEffect, useReducer, useRef } from 'react'
import { reducerBanner } from '../../../Reducer/reducerBanner'

export default function Banner() {

  const arrimg = ["https://cemhri.org/wp-content/uploads/2018/04/Home-Four-Banner-Background-Image.png",
                  "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
                  "https://png.pngtree.com/thumb_back/fh260/back_pic/04/48/50/00585a3568a0a7d.jpg"]
  const [bannerImg, setBannerImg] = useReducer(reducerBanner, {length: arrimg.length, index:0})



  return (
    <div className="banner__container">
      <img src={arrimg[bannerImg.index]} alt=""/>
      <button className='banner__left' onClick={e => setBannerImg({type:"left"})}>{"<"}</button>
      <button className='banner__right' onClick={e => setBannerImg({type:"right"})}>{">"}</button>
    </div>
  )
}

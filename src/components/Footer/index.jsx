import React, {memo} from "react"
import {FooterWrapper} from "./style"
import IconSubLogo from "@/assets/svg/IconSubLogo"
import IconWeiBo from "@/assets/svg/IconWeiBo"
import IconWeixin from "@/assets/svg/IconWeixin"

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="top">
          <div className="top-item">
            <h2>爱彼迎</h2>
            <ul>
              <li>工作机会</li>
              <li>爱彼迎新闻</li>
              <li>政策</li>
              <li>无障碍设施</li>
            </ul>
          </div>
          <div className="top-item">
            <h2>发现</h2>
            <ul>
              <li>信任与安全</li>
              <li>旅行基金</li>
              <li>商务差旅</li>
              <li>爱彼迎杂志</li>
              <li>Airbnb.org</li>
            </ul>
          </div>
          <div className="top-item">
            <h2>出租</h2>
            <ul>
              <li>为什么要出租？</li>
              <li>待客之道</li>
              <li>房东义务</li>
              <li>开展体验</li>
              <li>
                <span>资源中心</span>
                <span className="tag">新推出</span>
              </li>
            </ul>
          </div>
          <div className="top-item">
            <h2>客服支持</h2>
            <ul>
              <li>帮助</li>
              <li>
                <span>邻里支持</span>
                <span className="tag">新推出</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="icon">
            <IconSubLogo />
            </div>
            <div className="info">
              <p>
                <a href="#;">京ICP备16017121号</a>&nbsp;
                <a href="#;">京ICP证 160773号</a>&nbsp;
                <img src={require("@/assets/img/footer_gaj.png")} alt="中国公安局标志" />&nbsp;
                <a href="#;">京公网安备11010502032345号</a>&nbsp;
                <span>安彼迎网络（北京）有限公司</span>
                <img src={require("@/assets/img/footer_yyzz.png")} alt="中国电子营业执照标志" />
                <a href="#;">营业执照</a>
              </p>
              <p>
                <span>© 2022 Airbnb, Inc. All rights reserved. </span>
                <a href="#;">条款</a>
                <span> · </span>
                <a href="#;">隐私政策</a>
                <span> · </span>
                <a href="#;">网站地图</a>
                <span> · 全国旅游投诉渠道 12301</span>
              </p>
            </div>
          </div>
          <div className="right">
          <IconWeiBo />&nbsp;&nbsp;&nbsp;
          <IconWeixin />
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default Footer

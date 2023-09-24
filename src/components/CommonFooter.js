import React from 'react';
import { useSelector } from 'react-redux';
import './CommonFooter.scss';
import { NavLink } from 'react-router-dom';
export default function CommonFooter() {
  const selector = (state) => {
    return {
      catalogue: state.catalogueStage,
    };
  };
  const {
    catalogue,
  } = useSelector(selector);
  return (
    <div
      style={{

      }}
      className='CommonFooter'
    >
      {/* LOGO */}
      <div className='logo'>
        <img src="cfpp_l.png" alt="cfpp-LOGO" />
      </div>
      <div className='container'>
        {/* 站内导航 */}
        <div className='siteMap'>
          <div className='title'>站内导航</div>
          <div className='content'>
            <div>首页</div>
            {Object.keys(catalogue).map((item, index) => {
              return <NavLink key={index} to={`/article/${item}/index`} style={{
                display: 'block',
              }}>{catalogue[item].title}</NavLink>;
            })}
          </div>
          <div className='title'>联系方式</div>
          <div>Email: 2513151911@qq.com</div>
          <div>GitHub: abc2513</div>
        </div>
        {/* 关于本站 */}
        <div className='about'>
          <div className='title'>关于本站</div>
          <div className='content'>
            <div>本站是陈帆所开发的个人网站</div>
            <div>本站的前端源码均为本人原创，转载请注明出处。</div>
            <div className='title'>本站使用的技术栈 / 第三方库：</div>
            <div className='list'>
              <div>ReactJS</div>
              <div>Redux</div>
              <div>ReactRouter</div>
              <div>Sass</div>
              <div>PixiJS</div>
              <div>PixiFilters</div>
              <div>Marked</div>
              <div>Axios</div>
              <div>Eslint</div>
            </div>

            <div className='title'>部分图片素材取自: </div>
            <a href='https://act.mihoyo.com/ys/event/e20230916preview/index.html'>https://act.mihoyo.com/ys/event/e20230916preview/index.html</a>
            <div>（出于非商业用途）</div>
          </div>
        </div>
      </div>

    </div>
  );
}

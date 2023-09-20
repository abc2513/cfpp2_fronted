import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function getArticleFileName(catalogue,page,articleKey){
  if(!catalogue[page]) return 'index.md';
  let result='index.md';
  Object.keys(catalogue[page].folders).forEach((folderKey)=>{
    Object.keys(catalogue[page].folders[folderKey].articles).forEach((article)=>{
      if(article===articleKey){
        result=catalogue[page].folders[folderKey].articles[article].fileName;
        return;
      }
    });
  });
 return result;
}
export default function ArticleContent(props) {
  const {
    page,
    article,
  }=useParams();
  const {
    catalogue,
  }=useSelector(state=>{
    return{
      catalogue:state.catalogueStage,
    };
  });
  console.log('page1',page);
  console.log('article1',article);
  const article_fileName=getArticleFileName(catalogue,page,article);
  return (
    <div
    style={{
      flex:1,
      backgroundColor:'#fff',
      overflow:'hidden'
    }}
    >
      <iframe src={
            article_fileName.match(/\.html$/)?
            `/data/article/${page}/${article_fileName}`:
            article_fileName.match(/\.md$/)?
            `/data/article/${page}/md-reader.html?mdurl=${article_fileName}`
            :null
      }
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
    </div>
  );
}

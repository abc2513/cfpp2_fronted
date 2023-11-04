import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function getArticleFileName(catalogue, page, articleKey) {
  if (!catalogue[page]) return 'index.md';
  let result = 'index.md';
  Object.keys(catalogue[page].folders).forEach((folderKey) => {
    Object.keys(catalogue[page].folders[folderKey].articles).forEach((article) => {
      if (article === articleKey) {
        result = catalogue[page].folders[folderKey].articles[article].fileName;
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
  } = useParams();
  const {
    catalogue,
  } = useSelector(state => {
    return {
      catalogue: state.catalogueStage,
    };
  });
  const article_fileName = getArticleFileName(catalogue, page, article);
  if (article === 'index') {
    return catalogue[page] && (
      <div style={{ margin: '2rem',padding:'0rem',flex:'1' }}>
        <h2>{catalogue[page].title}</h2>
        
        {
          Object.keys(catalogue[page].folders).map((folderKey) => (
            <div key={folderKey} style={{marginTop:'1.6rem'}}>
              <h4 style={{}}>{catalogue[page].folders[folderKey].title}</h4>
              {
                Object.keys(catalogue[page].folders[folderKey].articles).map((articleKey) => (
                  <>
                    <NavLink
                      key={articleKey}
                      to={`/article/${page}/${articleKey}`}
                      className='article-link'
                      style={{
                        color:'var(--secondary-color-dark)',
                        textDecoration:'underline',
                      }}
                    >
                      {catalogue[page].folders[folderKey].articles[articleKey].title}
                    </NavLink>
                    &nbsp; | &nbsp;
                  </>
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden'
      }}
    >
      <iframe
        src={
          article_fileName.match(/\.html$/) ?
            `/data/article/${page}/${article_fileName}` :
            article_fileName.match(/\.md$/) ?
              `/data/article/${page}/md-reader.html?mdurl=${article_fileName}`
              : null
        }
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
}

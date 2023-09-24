import React, { useEffect } from 'react';
import ArticleSider from './ArticleSider';
import ArctileContent from './ArticleContent';
export default function ArticlePage() {
  useEffect(() => {
    //窗口滚动到顶部
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        minHeight:'calc(100vh - 5rem)'
      }}>
      <ArticleSider />
      <ArctileContent />
    </div>
  );
}

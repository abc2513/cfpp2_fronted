import React from 'react';
import ArticleSider from './ArticleSider';
import ArctileContent from './ArticleContent';
export default function ArticlePage() {
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

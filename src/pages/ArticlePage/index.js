import React from 'react';
import ArticleSider from './ArticleSider';
import ArctileContent from './ArticleContent';
export default function ArticlePage() {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1'
      }}>
      <ArticleSider />
      <ArctileContent />
    </div>
  );
}

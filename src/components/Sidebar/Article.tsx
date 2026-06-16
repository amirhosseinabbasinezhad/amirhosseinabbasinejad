import React from 'react';
import { Box, Typography } from '@mui/material';
interface articles {
      id: number,
      title: string,
      author: string,
      source: string,
      link: string,
      date: string
}

interface articlesProps {
  articles: articles[];
}
const Articles = ({articles}:articlesProps) => {
  

  return (
    <Box sx={{ mt: 3 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: '#f1f5f9',
          borderBottom: '2px solid #334155',
          display: 'inline-block',
          pb: 0.5,
        }}
      >
        مقالات
      </Typography>
      
      <Box>
        {articles.map((article, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography sx={{ 
                fontSize: '0.85rem', 
                fontWeight: 500,
                color: '#f1f5f9'
              }}>
                {article.title}
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mb: 0.5 
            }}>
              <Typography sx={{ 
                fontSize: '0.75rem', 
                color: '#94a3b8'
              }}>
                {article.author} • {article.source}
              </Typography>
              <Typography sx={{ 
                fontSize: '0.75rem', 
                color: '#94a3b8'
              }}>
                {article.date}
              </Typography>
            </Box>

            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                color: '#38bdf8',
                textDecoration: 'none',
                cursor: 'pointer',
                marginTop: '2px'
              }}
              onMouseEnter={(e) => {
    (e.target as HTMLElement).style.textDecoration = 'underline';
  }}
  onMouseLeave={(e) => {
    (e.target as HTMLElement).style.textDecoration = 'none';
  }}
             
            >
              مشاهده مقاله →
            </a>
            {idx < articles.length - 1 && (
              <hr style={{
                border: 'none',
                borderTop: '1px solid #334155',
                marginBottom: '16px'
              }} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Articles;
import { Paper, Box } from '@mui/material';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainContent } from './components/MainContent/MainContent';

export const ResumeLayout = () => {
  return (
    <Box
      sx={{
        direction:"rtl",
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '2rem',
        overflow: 'hidden',
        boxShadow: '0 25px 45px -12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '34% 66%',
          },
        }}
      >
        {/* سایدبار */}
        <Box>
          <Sidebar />
        </Box>

        {/* محتوای اصلی */}
        <Box>
          <Paper elevation={0} sx={{ padding: { xs: 2, md: 3 }, borderRadius: 0 }}>
            <MainContent />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
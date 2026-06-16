import { Box, Divider } from '@mui/material';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Gallery } from './Gallery';
import { resumeData } from '../../resumeData';
import { Education } from './Education';

export const MainContent = () => {
  return (
    <Box>
      <About text={resumeData.about} />
      <Education experiences={resumeData.education} />
      <Experience experiences={resumeData.experiences} />
      <Projects projects={resumeData.projects} />
      <Gallery gallery={resumeData.gallery} />
      
      <Divider sx={{ my: 2 }} />
      
      {/* بخش پایین (گواهی‌نامه‌ها و تاریخ) */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: '#334155',
          mt: 2,
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Box><i className="fas fa-check-circle" style={{ color: '#2b9348' }}></i> MikroTik MTCNA</Box>
          <Box><i className="fas fa-check-circle" style={{ color: '#2b9348' }}></i> VMware VCP</Box>
          <Box><i className="fas fa-check-circle" style={{ color: '#2b9348' }}></i> CompTIA Network+</Box>
          <Box><i className="fas fa-microchip"></i> مجازی‌سازی و Windows Server</Box>
        </Box>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ textAlign: 'right', fontSize: '0.7rem', color: '#94a3b8' }}>
        آخرین به‌روزرسانی: ۱۴۰۵ | آماده برای همکاری و چالش‌های جدید
      </Box>
    </Box>
  );
};
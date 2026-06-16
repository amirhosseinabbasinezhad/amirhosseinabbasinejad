import { Box } from '@mui/material';
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
      
      <Box sx={{ textAlign: 'right', fontSize: '0.7rem', color: '#94a3b8' }}>
        آخرین به‌روزرسانی: ۱۴۰۵ | آماده برای همکاری و چالش‌های جدید
      </Box>
    </Box>
  );
};
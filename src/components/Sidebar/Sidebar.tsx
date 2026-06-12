import { Box } from '@mui/material';
import { Profile } from './Profile';
import { ContactInfo } from './ContactInfo';
import { Certificates } from './Certificates';
import { Skills } from './Skills';
import { resumeData } from '../../resumeData';
import { SoftSkills } from './SoftSkills';

export const Sidebar = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0f172a',
        color: '#e2e8f0',
        p: { xs: 2, md: 3 },
        height: '100%',
      }}
    >
      <Profile name={resumeData.name} title={resumeData.title} />
      <ContactInfo contact={resumeData.contact} />
      <Certificates certificates={resumeData.certificates} />
      <Skills skills={resumeData.skills} />
      <SoftSkills />
    </Box>
  );
};
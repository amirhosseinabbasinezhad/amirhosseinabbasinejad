import { Box, Typography, Stack } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ChatIcon from '@mui/icons-material/Chat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

interface SkillItem {
  name: string;
  icon: React.ReactElement;
  value: number | string;
  percent?: number; // فقط برای مهارت‌هایی که درصد دارند
}

const softSkills: SkillItem[] = [
  {
    name: 'کار تیمی',
    icon: <PeopleIcon sx={{ color: '#38bdf8', fontSize: '1.1rem' }} />,
    value: '90%',
    percent: 90
  },
  {
    name: 'زبان انگلیسی',
    icon: <LanguageIcon sx={{ color: '#38bdf8', fontSize: '1.1rem' }} />,
    value: '60',
    percent: 60
  },
  {
    name: 'حل مسئله',
    icon: <PsychologyIcon sx={{ color: '#38bdf8', fontSize: '1.1rem' }} />,
    value: '95%',
    percent: 95
  },
  {
    name: 'ارتباط موثر',
    icon: <ChatIcon sx={{ color: '#38bdf8', fontSize: '1.1rem' }} />,
    value: '85%',
    percent: 85
  },
  {
    name: 'مدیریت زمان',
    icon: <AccessTimeIcon sx={{ color: '#38bdf8', fontSize: '1.1rem' }} />,
    value: '85%',
    percent: 85
  }
];

export const SoftSkills = () => {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#f1f5f9',
          borderBottom: '2px solid #334155',
          display: 'inline-block',
          paddingBottom: '0.3rem'
        }}
      >
        <VerifiedUserIcon sx={{ marginLeft: '0.5rem', fontSize: '1.1rem' }} />
        خصوصیات اخلاقی
      </Typography>

      <Stack direction="column" spacing={1.5} sx={{ marginTop: '1rem' }}>
        {softSkills.map((skill, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                marginBottom: '0.3rem'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {skill.icon}
                <Typography sx={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
                  {skill.name}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {skill.value}
              </Typography>
            </Box>
            {skill.percent !== undefined && (
              <Box
                sx={{
                  backgroundColor: '#1e293b',
                  borderRadius: '20px',
                  height: '6px',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    width: `${skill.percent}%`,
                    backgroundColor: '#38bdf8',
                    height: '6px',
                    borderRadius: '20px',
                    transition: 'width 0.3s ease'
                  }}
                />
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
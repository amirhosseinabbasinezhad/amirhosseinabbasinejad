import { Box, Typography, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

interface ContactInfoProps {
  contact: {
    phone: string;
    email: string;
    location: string;
    website: string;
    military: string;
  };
}

export const ContactInfo = ({ contact }: ContactInfoProps) => {
  const contacts = [
    { icon: <PhoneIcon />, text: contact.phone, type:"phone", dir: 'ltr' as const },
    { icon: <EmailIcon />, text: contact.email,type:"mail", dir: 'ltr' as const },
    { icon: <LocationOnIcon />, text: contact.location, dir: 'ltr' as const },
    { icon: <LanguageIcon />, text: contact.website,type:"link", dir: 'ltr' as const },
    { icon: <BadgeOutlinedIcon />, text: contact.military, dir: 'ltr' as const },
  ];

  return (
    <Box sx={{ mb: 3 }}>
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
        اطلاعات تماس
      </Typography>
      <Stack spacing={1.5}>
        {contacts.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              fontSize: '0.85rem',
              direction: 'ltr',
            }}
          >
            <Box sx={{ color: '#38bdf8', minWidth: '1.6rem' }}>{item.icon}</Box>
            <span style={{ direction: 'rtl' }}>{
            item.type === "phone" ?  <a href={`tel:${item.text}`} style={{ 
          color: 'inherit', textDecoration: 'none'
        }}> {item.text} </a> : 
            item.type==="mail" ?<a href={`mailto:${item.text}`} style={{ 
          color: 'inherit', textDecoration: 'none'
        }} >{item.text}</a> :
            item.type=== "link" ?<a href={`https://${item.text}`}target="_blank"
          rel="noopener noreferrer" style={{ 
          color: 'inherit', textDecoration: 'none'
        }}>{item.text}</a> :
            item.text }</span>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
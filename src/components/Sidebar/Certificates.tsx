import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import ciscoImg from '../../assets/cisco.svg';
import MikroTikImg from '../../assets/MikroTik3.svg';
import WindowsImg from "../../assets/windows.svg";
import VMWareImg from "../../assets/vmware.svg";
import CopmptiaImg from "../../assets/comptia24.svg"
import comptiaColor from "../../assets/comptia25.svg"
import MikroTikColor from "../../assets/MikroTik31.svg"
import { useState } from 'react';

interface VendorLogoProps {
  vendor: string;
  width?: number | string;
  hoveridx: number | null;
  idx: number;
}

const logos: Record<string, string> = {
  cisco:ciscoImg ,
  MikroTik: MikroTikImg,
  windows: WindowsImg,
  VMware : VMWareImg,
  comptia:CopmptiaImg,
};

const logosColor: Record<string, string> = {
  cisco:ciscoImg ,
  MikroTik: MikroTikColor,
  windows: WindowsImg,
  VMware : VMWareImg,
  comptia:comptiaColor,
};

function VendorLogo({ vendor, width = 24, hoveridx, idx }: VendorLogoProps) {
  const logoSrc = logos[vendor];
  const clogosrc = logosColor[vendor];
  
  if (!logoSrc) {
    return <span>📁</span>; // Fallback
  }
  
  return (
    <img 
      src={idx === hoveridx ? clogosrc : logoSrc} 
      alt={vendor} 
      width={width}
      style={{ transition: '0.3s' }}
    />
  );
}

export default VendorLogo;
interface Certificate {
  name: string;
  width: number;
  vendor:string;
  localIcon?: string; // آیکون محلی
}

interface CertificatesProps {
  certificates: Certificate[];
}

export const Certificates = ({ certificates }: CertificatesProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          marginBottom: 2,
          color: '#f1f5f9',
          borderBottom: '2px solid #334155',
          display: 'inline-block',
          paddingBottom: 0.5,
        }}
      >
        مدارک و گواهینامه‌ها
      </Typography>
      
      <List dense disablePadding>
        {certificates.map((cert, idx) => (
          <ListItem 
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)} 
            disablePadding 
            sx={{ 
              marginBottom: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                borderRadius: 1,
                transition: '0.3s',
              }
            }}
          >
            <Box
              component="img"
              dir='rtl'
              src={cert.localIcon || `/icons/${cert.vendor}.svg`}
              alt={cert.name}
              sx={{
                width: '1.3rem',
                height: '1.3rem',
                filter: 'brightness(0) invert(1)', // برای سفید کردن آیکون‌ها در پس‌زمینه تیره
                opacity: 0.9,
              }}
              onError={(e: any) => {
                // اگر آیکون پیدا نشد، از fallback استفاده کن
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <Box sx={{ display: 'none' }}>
              <VendorLogo vendor={cert.vendor} width={cert.width} hoveridx={hoveredIndex} idx={idx}/>
              </Box> {/* Fallback emoji */}
            <ListItemText
              primary={cert.name}
              sx={{ 
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
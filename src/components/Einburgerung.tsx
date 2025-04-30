import { useState, useEffect, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Link
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

import { stepOneContent, stepTwoContent, stepThreeContent, stepFourContent, stepFiveContent, stepSixContent } from '@/data';


import SearchBar from './SearchBar';
import CollapsiblePanel from './CollapsiblePanel';
import { JSX } from 'react/jsx-runtime';

const NavigationTab = styled(Paper)(({ active, theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: active ? '#000000' : 'transparent',
  color: active ? '#ffffff' : 'inherit',
  borderRadius: 0,
  marginBottom: theme.spacing(1),
  border: active ? 'none' : `1px solid ${theme.palette.divider}`,
  cursor: 'pointer',
}));

const OnlineRequestTab = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 0,
  border: `1px solid ${theme.palette.divider}`,
  cursor: 'pointer',
}));

const StepIndicator = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  backgroundColor: '#e53935', // Red-600 equivalent
  borderRadius: '50%',
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1.5),
  flexShrink: 0,
}));

const StepContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const StepContent = styled(Box)(({ theme }) => ({
  display: 'flex',
}));

const StepInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export default function EinburgerungPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const renderStep = (number: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, content: string | number | boolean | Iterable<ReactNode> | JSX.Element | null | undefined) => (
    <StepContainer>
      <StepContent>
        <StepIndicator />
        <StepInfo>
          <Typography variant="body1" fontWeight="medium" mb={1}>
            {number}. {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {content}
          </Typography>
          <Link href="#" variant="body2" color="primary" sx={{ display: 'block', mt: 1 }}>
            Mehr Infos findest du hier
          </Link>
        </StepInfo>
      </StepContent>
    </StepContainer>
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>

      <Container maxWidth="md" sx={{ pt: 2, pb: 8 }}>
        <SearchBar />

        {/* Navigation tabs */}
        <Box sx={{ mt: 3 }}>
          <NavigationTab active>
            <Typography>Überblick</Typography>
          </NavigationTab>
          <NavigationTab>
            <Typography>Unterlagen</Typography>
          </NavigationTab>
          <NavigationTab>
            <Typography>Beratung</Typography>
          </NavigationTab>
          <NavigationTab>
            <Typography>Videos</Typography>
          </NavigationTab>
          <OnlineRequestTab>
            <Typography>Online beantragen</Typography>
            <ArrowForwardIcon />
          </OnlineRequestTab>
        </Box>

        {/* Content */}
        <Box sx={{ mt: isMobile ? 3 : 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'flex-start' }}>
            <Typography variant="h5" fontWeight="medium">
              Überblick zur Einbürgerung
            </Typography>
            {!isMobile && (
              <Box>
                <IconButton size="small">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton size="small">
                  <ShareIcon />
                </IconButton>
              </Box>
            )}
          </Box>

          <Typography variant="body2" sx={{ mb: 3 }}>
            Du möchtest die deutsche Staatsbürgerschaft beantragen? Wir helfen dir dabei.
            Hier bekommst du nützliche Tipps für eine Einbürgerung in Berlin. Du hast Fragen zum Online-Antrag?
            Du willst wissen, welche Unterlagen du dafür brauchst? Du suchst eine persönliche Beratung? Los geht's!
          </Typography>

          <CollapsiblePanel
            title="Welche Behörde ist zuständig?"
            icon={<InfoOutlinedIcon />}
            defaultOpen={true}
          >
            <Typography variant="body2">
              Das Landesamt für Einwanderung (LEA) ist zuständig für die Einbürgerung in Berlin. Sie entscheiden über deinen Antrag.
            </Typography>
          </CollapsiblePanel>

          {/* Steps */}
          <Box sx={{ mt: 3 }}>
            {renderStep("1", "Online-Antrag stellen", stepOneContent)}
            {renderStep("2", "Online-Antrag stellen", stepTwoContent)}
            {renderStep("3", "Deutschkenntnisse", stepThreeContent)}
            {renderStep("4", "Einkommen", stepFourContent)}
            {renderStep("5", "Wechsel zwischen mehreren Aufenthaltstiteln", stepFiveContent)}
            {renderStep("6", "Wartezeiten bei der Einbürgerung", stepSixContent)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
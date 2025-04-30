import { styled } from '@mui/material/styles';
import { 
  Box, 
  InputBase, 
  IconButton, 
  Paper, 
  Select, 
  MenuItem, 
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SearchInputWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1, 1, 1, 2),
}));

const LanguageSelector = styled(Select)(({ theme }) => ({
  backgroundColor: '#f8bbd0', // pink-200 equivalent
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  fontSize: '0.875rem',
  padding: theme.spacing(0, 1),
  '& .MuiSelect-select': {
    paddingRight: '26px', // Make room for the arrow icon
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  '&:before, &:after': {
    display: 'none',
  },
}));

const LanguageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(1.5),
  gap: theme.spacing(2),
}));

export default function SearchBar(/* { className } */) {
  return (
    <Box /* className={className} */>
      <SearchInputWrapper>
        <StyledInputBase
          placeholder="Suchen..."
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton size="small">
                <MicIcon />
              </IconButton>
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </SearchInputWrapper>
      
      <LanguageWrapper>
        <LanguageSelector
          value="de"
          IconComponent={KeyboardArrowDownIcon}
          variant="standard"
          disableUnderline
        >
          <MenuItem value="de">Deutsch - DE</MenuItem>
          <MenuItem value="en">English - EN</MenuItem>
        </LanguageSelector>
        
        <IconButton size="small">
          <MicIcon />
        </IconButton>
      </LanguageWrapper>
    </Box>
  );
}
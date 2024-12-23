import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import {
  Paper,
  InputBase,
  IconButton,
  Box,
  Popper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ClickAwayListener
} from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
  initialValue?: string;
}

interface Suggestion {
  id: string;
  text: string;
  category?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search products...",
  initialValue = "" 
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialValue);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  // Simulated suggestions - replace with your actual API call
  const getSuggestions = (value: string): Suggestion[] => {
    const dummySuggestions: Suggestion[] = [
      { id: '1', text: 'Laptop', category: 'Electronics' },
      { id: '2', text: 'Smartphone', category: 'Electronics' },
      { id: '3', text: 'Headphones', category: 'Audio' },
      { id: '4', text: 'Smart Watch', category: 'Wearables' },
      { id: '5', text: 'Camera', category: 'Photography' }
    ];
    return dummySuggestions.filter(item =>
      item.text.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setSearchTerm(value);
    setAnchorEl(event.currentTarget);

    if (value.length > 0) {
      const newSuggestions = getSuggestions(value);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (term: string = searchTerm): void => {
    if (term) {
      onSearch(term);
      setSuggestions([]);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearchSubmit();
    }
  };

  const handleClear = (): void => {
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion: Suggestion): void => {
    setSearchTerm(suggestion.text);
    handleSearchSubmit(suggestion.text);
    setSuggestions([]);
  };

  const handleClickAway = (): void => {
    setSuggestions([]);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, margin: '0 auto' }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          border: '1px solid #e0e0e0',
          '&:hover': {
            borderColor: '#bdbdbd',
          },
        }}
      >
        <IconButton 
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={() => handleSearchSubmit()}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        {searchTerm && (
          <IconButton 
            sx={{ p: '10px' }}
            aria-label="clear"
            onClick={handleClear}
          >
            <ClearIcon />
          </IconButton>
        )}
      </Paper>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Popper
          open={suggestions.length > 0}
          anchorEl={anchorEl}
          placement="bottom-start"
          sx={{ width: anchorEl?.clientWidth, zIndex: 1300 }}
        >
          <Paper elevation={3}>
            <List>
              {suggestions.map((suggestion) => (
                <ListItem key={suggestion.id} disablePadding>
                  <ListItemButton onClick={() => handleSuggestionClick(suggestion)}>
                    <SearchIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                    <ListItemText 
                      primary={suggestion.text}
                      secondary={suggestion.category}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Popper>
      </ClickAwayListener>
    </Box>
  );
};

export default SearchBar;
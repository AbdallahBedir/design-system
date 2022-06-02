import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useDebounce } from 'use-debounce';

import { Colors } from 'colors';
import { InputField } from '../InputField';
import { Spinner } from '../Spinner';

import SearchIcon from 'assets/search.svg';

const StyledContainer = styled.div({
  display: 'flex',
  padding: 24,
  background: '#FFF',
});

const Input = styled(InputField)({
  height: '100%',
  paddingLeft: 40,
  background: '#F8F8FA',
  minWidth: 300,
});

const SearchBox: React.FC<{
  searchTerm: string; // initial search term
  onDebouncedTextChange: (debouncedText: string) => void;
  loading: boolean;
  placeholder?: string;
}> = ({ searchTerm, onDebouncedTextChange, loading, placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedText] = useDebounce(searchValue, 1000);

  useEffect(() => {
    setSearchValue(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    onDebouncedTextChange(debouncedText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedText]);

  return (
    <StyledContainer>
      <div style={{ position: 'relative', height: 40 }}>
        <div style={{ position: 'absolute', top: 14, left: 18 }}>
          {loading ? (
            <Spinner size={15} spinnerColor={Colors.grey1} ringColor={Colors.grey2} />
          ) : (
            <SearchIcon />
          )}
        </div>

        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder || ''}
        />
      </div>
    </StyledContainer>
  );
};

export { SearchBox };

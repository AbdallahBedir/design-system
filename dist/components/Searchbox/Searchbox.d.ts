import React from 'react';
declare const SearchBox: React.FC<{
    searchTerm: string;
    onDebouncedTextChange: (debouncedText: string) => void;
    loading: boolean;
    placeholder?: string;
}>;
export { SearchBox };

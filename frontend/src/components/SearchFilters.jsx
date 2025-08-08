import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { countries, languages, genres } from '../mock';

const SearchFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCountry, 
  setSelectedCountry,
  selectedLanguage,
  setSelectedLanguage,
  selectedGenre,
  setSelectedGenre,
  onClearFilters 
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-gray-200/50 rounded-xl p-6 mb-8 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full lg:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search TV stations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/80 border-gray-300 focus:border-blue-500 focus:bg-white"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full sm:w-[160px] bg-white/80 border-gray-300">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full sm:w-[160px] bg-white/80 border-gray-300">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-full sm:w-[160px] bg-white/80 border-gray-300">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            onClick={onClearFilters}
            className="bg-white/80 border-gray-300 hover:bg-gray-100"
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
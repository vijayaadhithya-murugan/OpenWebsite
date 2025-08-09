import { useState, useMemo } from 'react';
import { workExperience } from '../data/allDetails';
import { 
  calculateDuration, 
  formatDateRange, 
  getCurrentExperience,
  getTotalExperience,
  getAllTechnologies,
  searchExperiences,
  sortExperiencesByDate
} from '../utils/experienceUtils';

/**
 * Custom hook for managing experience data with enhanced functionality
 */
export const useExperience = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'Full-time', 'Internship'
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest', 'oldest'

  // Memoized calculations
  const experiences = useMemo(() => {
    let filtered = workExperience;

    // Apply search filter
    if (searchTerm) {
      filtered = searchExperiences(filtered, searchTerm);
    }

    // Apply type filter
    if (filterType !== 'all') {
      filtered = filtered.filter(exp => exp.type === filterType);
    }

    // Apply sorting
    if (sortOrder === 'newest') {
      filtered = sortExperiencesByDate(filtered);
    } else {
      filtered = sortExperiencesByDate(filtered).reverse();
    }

    return filtered;
  }, [searchTerm, filterType, sortOrder]);

  const currentExperience = useMemo(() => getCurrentExperience(workExperience), []);
  
  const totalExperience = useMemo(() => getTotalExperience(workExperience), []);
  
  const allTechnologies = useMemo(() => getAllTechnologies(workExperience), []);

  const experienceTypes = useMemo(() => {
    const types = [...new Set(workExperience.map(exp => exp.type))];
    return types;
  }, []);

  const experienceStats = useMemo(() => {
    return {
      total: workExperience.length,
      current: currentExperience ? 1 : 0,
      completed: workExperience.filter(exp => exp.endDate !== null).length,
      totalDuration: totalExperience,
      companies: [...new Set(workExperience.map(exp => exp.company))].length,
      technologies: allTechnologies.length
    };
  }, [currentExperience, totalExperience, allTechnologies]);

  // Helper function to get experience by ID
  const getExperienceById = (id) => {
    return workExperience.find(exp => exp.id === id);
  };

  // Helper function to get experiences by company
  const getExperiencesByCompany = (company) => {
    return workExperience.filter(exp => exp.company === company);
  };

  // Helper function to check if technology is used in any experience
  const isTechnologyUsed = (technology) => {
    return allTechnologies.includes(technology);
  };

  return {
    // Data
    experiences,
    currentExperience,
    allTechnologies,
    experienceTypes,
    experienceStats,
    
    // Filters and search
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    sortOrder,
    setSortOrder,
    
    // Helper functions
    getExperienceById,
    getExperiencesByCompany,
    isTechnologyUsed,
    formatDateRange,
    calculateDuration,
    
    // Utility functions
    utils: {
      formatDateRange,
      calculateDuration,
      getCurrentExperience,
      getTotalExperience,
      getAllTechnologies,
      searchExperiences,
      sortExperiencesByDate
    }
  };
};

// Experience data utilities and management

/**
 * Calculate the duration between two dates
 * @param {string} startDate - Format: 'YYYY-MM'
 * @param {string|null} endDate - Format: 'YYYY-MM' or null for current
 * @returns {string} - Human readable duration
 */
export const calculateDuration = (startDate, endDate = null) => {
  const start = new Date(startDate + '-01');
  const end = endDate ? new Date(endDate + '-01') : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
  
  return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
};

/**
 * Format date range for display
 * @param {string} startDate - Format: 'YYYY-MM'
 * @param {string|null} endDate - Format: 'YYYY-MM' or null for current
 * @returns {string} - Formatted date range
 */
export const formatDateRange = (startDate, endDate = null) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const [year, month] = dateStr.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

/**
 * Get experience by type
 * @param {Array} experiences - Array of experience objects
 * @param {string} type - Type filter ('Full-time', 'Internship', etc.)
 * @returns {Array} - Filtered experiences
 */
export const getExperiencesByType = (experiences, type) => {
  return experiences.filter(exp => exp.type === type);
};

/**
 * Get current experience
 * @param {Array} experiences - Array of experience objects
 * @returns {Object|null} - Current experience or null
 */
export const getCurrentExperience = (experiences) => {
  return experiences.find(exp => exp.endDate === null);
};

/**
 * Sort experiences by start date (newest first)
 * @param {Array} experiences - Array of experience objects
 * @returns {Array} - Sorted experiences
 */
export const sortExperiencesByDate = (experiences) => {
  return experiences.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
};

/**
 * Get total experience duration
 * @param {Array} experiences - Array of experience objects
 * @returns {string} - Total duration
 */
export const getTotalExperience = (experiences) => {
  let totalMonths = 0;
  
  experiences.forEach(exp => {
    const start = new Date(exp.startDate + '-01');
    const end = exp.endDate ? new Date(exp.endDate + '-01') : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    totalMonths += months;
  });
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  }
  
  if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
  
  return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
};

/**
 * Get all unique technologies from experiences
 * @param {Array} experiences - Array of experience objects
 * @returns {Array} - Unique technologies
 */
export const getAllTechnologies = (experiences) => {
  const allTechs = experiences.flatMap(exp => exp.technologies || []);
  return [...new Set(allTechs)];
};

/**
 * Search experiences by keyword
 * @param {Array} experiences - Array of experience objects
 * @param {string} keyword - Search keyword
 * @returns {Array} - Matching experiences
 */
export const searchExperiences = (experiences, keyword) => {
  const searchTerm = keyword.toLowerCase();
  
  return experiences.filter(exp => {
    const searchableText = [
      exp.role,
      exp.company,
      exp.location,
      ...(exp.responsibilities || []),
      ...(exp.technologies || []),
      ...(exp.achievements || [])
    ].join(' ').toLowerCase();
    
    return searchableText.includes(searchTerm);
  });
};

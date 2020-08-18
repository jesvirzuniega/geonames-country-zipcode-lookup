/**
 * Geonames country and zipcode lookup
 * 
 * Data from http://download.geonames.org/export/zip/
 * formattend to JSON by yours truly
 */

module.exports = {
    /**
     * Search place using ISO alpha-2 country code and zipcode
     * 
     * @param {String} countryCode
     * @param {String|RegExp} match - string or regex
     * @param {String} key - default is 'postal_code'
     * 
     * @return {Array} - Array of objects that matched the zip code
     */
    lookup: (countryCode, match, key='postal_code') => {
        const data = require(`./data/${countryCode.toUpperCase()}.json`)
        if (!match) return data
        
        match = match instanceof RegExp ? regex : new RegExp(`^${match}`)
        return data.filter(c => c[key].match(match))
    }
}
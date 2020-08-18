# geonames-country-zipcode-lookup
Simple library for looking up places using ISO alpha-2 country code and zip/postal code

Data is taken from http://download.geonames.org/export/zip/

# Install
`npm i geonames-country-zipcode-lookup`

# Basic Usage
```javascript
import geoCountryZipCode from 'geonames-country-zipcode-lookup'

const result = geoCountryZipCode.lookup('PH', '1000')
console.log(result)
/** Logs
{
    country_code: 'PH',
    postal_code: '1000',
    place_name: 'Manila Central Post Office'
}
*/
```

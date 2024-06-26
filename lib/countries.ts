const countries: any = {
    'NL': {'nl': 'Nederland', 'en': 'Netherlands'},
    'DE': {'nl': 'Duitsland', 'en': 'Germany'},
    'BE': {'nl': 'België', 'en': 'Belgium'},
    'AF': {'nl': 'Afghanistan', 'en': 'Afghanistan'},
    'AL': {'nl': 'Albanië', 'en': 'Albania'},
    'DZ': {'nl': 'Algerije', 'en': 'Algeria'},
    'AS': {'nl': 'Amerikaans-Samoa', 'en': 'American Samoa'},
    'AD': {'nl': 'Andorra', 'en': 'Andorra'},
    'AO': {'nl': 'Angola', 'en': 'Angola'},
    'AI': {'nl': 'Anguilla', 'en': 'Anguilla'},
    'AQ': {'nl': 'Antarctica', 'en': 'Antarctica'},
    'AG': {'nl': 'Antigua en Barbuda', 'en': 'Antigua and Barbuda'},
    'AR': {'nl': 'Argentinië', 'en': 'Argentina'},
    'AM': {'nl': 'Armenië', 'en': 'Armenia'},
    'AW': {'nl': 'Aruba', 'en': 'Aruba'},
    'AU': {'nl': 'Australië', 'en': 'Australia'},
    'AT': {'nl': 'Oostenrijk', 'en': 'Austria'},
    'AZ': {'nl': 'Azerbeidzjan', 'en': 'Azerbaijan'},
    'BS': {'nl': 'Bahama\'s', 'en': 'Bahamas'},
    'BH': {'nl': 'Bahrein', 'en': 'Bahrain'},
    'BD': {'nl': 'Bangladesh', 'en': 'Bangladesh'},
    'BB': {'nl': 'Barbados', 'en': 'Barbados'},
    'BY': {'nl': 'Wit-Rusland', 'en': 'Belarus'},
    'BZ': {'nl': 'Belize', 'en': 'Belize'},
    'BJ': {'nl': 'Benin', 'en': 'Benin'},
    'BM': {'nl': 'Bermuda', 'en': 'Bermuda'},
    'BT': {'nl': 'Bhutan', 'en': 'Bhutan'},
    'BO': {'nl': 'Bolivia', 'en': 'Bolivia'},
    'BA': {'nl': 'Bosnië en Herzegovina', 'en': 'Bosnia and Herzegovina'},
    'BW': {'nl': 'Botswana', 'en': 'Botswana'},
    'BR': {'nl': 'Brazilië', 'en': 'Brazil'},
    'IO': {'nl': 'Brits Territorium in de Indische Oceaan', 'en': 'British Indian Ocean Territory'},
    'VG': {'nl': 'Britse Maagdeneilanden', 'en': 'British Virgin Islands'},
    'BN': {'nl': 'Brunei', 'en': 'Brunei'},
    'BG': {'nl': 'Bulgarije', 'en': 'Bulgaria'},
    'BF': {'nl': 'Burkina Faso', 'en': 'Burkina Faso'},
    'BI': {'nl': 'Burundi', 'en': 'Burundi'},
    'KH': {'nl': 'Cambodja', 'en': 'Cambodia'},
    'CM': {'nl': 'Kameroen', 'en': 'Cameroon'},
    'CA': {'nl': 'Canada', 'en': 'Canada'},
    'CV': {'nl': 'Kaapverdië', 'en': 'Cape Verde'},
    'KY': {'nl': 'Caymaneilanden', 'en': 'Cayman Islands'},
    'CF': {'nl': 'Centraal-Afrikaanse Republiek', 'en': 'Central African Republic'},
    'TD': {'nl': 'Tsjaad', 'en': 'Chad'},
    'CL': {'nl': 'Chili', 'en': 'Chile'},
    'CN': {'nl': 'China', 'en': 'China'},
    'CX': {'nl': 'Christmaseiland', 'en': 'Christmas Island'},
    'CC': {'nl': 'Cocoseilanden', 'en': 'Cocos Islands'},
    'CO': {'nl': 'Colombia', 'en': 'Colombia'},
    'KM': {'nl': 'Comoren', 'en': 'Comoros'},
    'CK': {'nl': 'Cookeilanden', 'en': 'Cook Islands'},
    'CR': {'nl': 'Costa Rica', 'en': 'Costa Rica'},
    'HR': {'nl': 'Kroatië', 'en': 'Croatia'},
    'CU': {'nl': 'Cuba', 'en': 'Cuba'},
    'CW': {'nl': 'Curaçao', 'en': 'Curacao'},
    'CY': {'nl': 'Cyprus', 'en': 'Cyprus'},
    'CZ': {'nl': 'Tsjechië', 'en': 'Czech Republic'},
    'CD': {'nl': 'Democratische Republiek Congo', 'en': 'Democratic Republic of the Congo'},
    'DK': {'nl': 'Denemarken', 'en': 'Denmark'},
    'DJ': {'nl': 'Djibouti', 'en': 'Djibouti'},
    'DM': {'nl': 'Dominica', 'en': 'Dominica'},
    'DO': {'nl': 'Dominicaanse Republiek', 'en': 'Dominican Republic'},
    'TL': {'nl': 'Oost-Timor', 'en': 'East Timor'},
    'EC': {'nl': 'Ecuador', 'en': 'Ecuador'},
    'EG': {'nl': 'Egypte', 'en': 'Egypt'},
    'SV': {'nl': 'El Salvador', 'en': 'El Salvador'},
    'GQ': {'nl': 'Equatoriaal-Guinea', 'en': 'Equatorial Guinea'},
    'ER': {'nl': 'Eritrea', 'en': 'Eritrea'},
    'EE': {'nl': 'Estland', 'en': 'Estonia'},
    'ET': {'nl': 'Ethiopië', 'en': 'Ethiopia'},
    'FK': {'nl': 'Falklandeilanden', 'en': 'Falkland Islands'},
    'FO': {'nl': 'Faeröer', 'en': 'Faroe Islands'},
    'FJ': {'nl': 'Fiji', 'en': 'Fiji'},
    'FI': {'nl': 'Finland', 'en': 'Finland'},
    'FR': {'nl': 'Frankrijk', 'en': 'France'},
    'PF': {'nl': 'Frans-Polynesië', 'en': 'French Polynesia'},
    'GA': {'nl': 'Gabon', 'en': 'Gabon'},
    'GM': {'nl': 'Gambia', 'en': 'Gambia'},
    'GE': {'nl': 'Georgië', 'en': 'Georgia'},
    'GH': {'nl': 'Ghana', 'en': 'Ghana'},
    'GI': {'nl': 'Gibraltar', 'en': 'Gibraltar'},
    'GR': {'nl': 'Griekenland', 'en': 'Greece'},
    'GL': {'nl': 'Groenland', 'en': 'Greenland'},
    'GD': {'nl': 'Grenada', 'en': 'Grenada'},
    'GU': {'nl': 'Guam', 'en': 'Guam'},
    'GT': {'nl': 'Guatemala', 'en': 'Guatemala'},
    'GG': {'nl': 'Guernsey', 'en': 'Guernsey'},
    'GN': {'nl': 'Guinee', 'en': 'Guinea'},
    'GW': {'nl': 'Guinee-Bissau', 'en': 'Guinea-Bissau'},
    'GY': {'nl': 'Guyana', 'en': 'Guyana'},
    'HT': {'nl': 'Haïti', 'en': 'Haiti'},
    'HN': {'nl': 'Honduras', 'en': 'Honduras'},
    'HK': {'nl': 'Hongkong', 'en': 'Hong Kong'},
    'HU': {'nl': 'Hongarije', 'en': 'Hungary'},
    'IS': {'nl': 'IJsland', 'en': 'Iceland'},
    'IN': {'nl': 'India', 'en': 'India'},
    'ID': {'nl': 'Indonesië', 'en': 'Indonesia'},
    'IR': {'nl': 'Iran', 'en': 'Iran'},
    'IQ': {'nl': 'Irak', 'en': 'Iraq'},
    'IE': {'nl': 'Ierland', 'en': 'Ireland'},
    'IM': {'nl': 'Isle of Man', 'en': 'Isle of Man'},
    'IL': {'nl': 'Israël', 'en': 'Israel'},
    'IT': {'nl': 'Italië', 'en': 'Italy'},
    'CI': {'nl': 'Ivoorkust', 'en': 'Ivory Coast'},
    'JM': {'nl': 'Jamaica', 'en': 'Jamaica'},
    'JP': {'nl': 'Japan', 'en': 'Japan'},
    'JE': {'nl': 'Jersey', 'en': 'Jersey'},
    'JO': {'nl': 'Jordanië', 'en': 'Jordan'},
    'KZ': {'nl': 'Kazachstan', 'en': 'Kazakhstan'},
    'KE': {'nl': 'Kenia', 'en': 'Kenya'},
    'KI': {'nl': 'Kiribati', 'en': 'Kiribati'},
    'XK': {'nl': 'Kosovo', 'en': 'Kosovo'},
    'KW': {'nl': 'Koeweit', 'en': 'Kuwait'},
    'KG': {'nl': 'Kirgizië', 'en': 'Kyrgyzstan'},
    'LA': {'nl': 'Laos', 'en': 'Laos'},
    'LV': {'nl': 'Letland', 'en': 'Latvia'},
    'LB': {'nl': 'Libanon', 'en': 'Lebanon'},
    'LS': {'nl': 'Lesotho', 'en': 'Lesotho'},
    'LR': {'nl': 'Liberia', 'en': 'Liberia'},
    'LY': {'nl': 'Libië', 'en': 'Libya'},
    'LI': {'nl': 'Liechtenstein', 'en': 'Liechtenstein'},
    'LT': {'nl': 'Litouwen', 'en': 'Lithuania'},
    'LU': {'nl': 'Luxemburg', 'en': 'Luxembourg'},
    'MO': {'nl': 'Macau', 'en': 'Macau'},
    'MK': {'nl': 'Macedonië', 'en': 'Macedonia'},
    'MG': {'nl': 'Madagaskar', 'en': 'Madagascar'},
    'MW': {'nl': 'Malawi', 'en': 'Malawi'},
    'MY': {'nl': 'Maleisië', 'en': 'Malaysia'},
    'MV': {'nl': 'Maldiven', 'en': 'Maldives'},
    'ML': {'nl': 'Mali', 'en': 'Mali'},
    'MT': {'nl': 'Malta', 'en': 'Malta'},
    'MH': {'nl': 'Marshalleilanden', 'en': 'Marshall Islands'},
    'MR': {'nl': 'Mauritanië', 'en': 'Mauritania'},
    'MU': {'nl': 'Mauritius', 'en': 'Mauritius'},
    'YT': {'nl': 'Mayotte', 'en': 'Mayotte'},
    'MX': {'nl': 'Mexico', 'en': 'Mexico'},
    'FM': {'nl': 'Micronesië', 'en': 'Micronesia'},
    'MD': {'nl': 'Moldavië', 'en': 'Moldova'},
    'MC': {'nl': 'Monaco', 'en': 'Monaco'},
    'MN': {'nl': 'Mongolië', 'en': 'Mongolia'},
    'ME': {'nl': 'Montenegro', 'en': 'Montenegro'},
    'MS': {'nl': 'Montserrat', 'en': 'Montserrat'},
    'MA': {'nl': 'Marokko', 'en': 'Morocco'},
    'MZ': {'nl': 'Mozambique', 'en': 'Mozambique'},
    'MM': {'nl': 'Myanmar', 'en': 'Myanmar'},
    'NA': {'nl': 'Namibië', 'en': 'Namibia'},
    'NR': {'nl': 'Nauru', 'en': 'Nauru'},
    'NP': {'nl': 'Nepal', 'en': 'Nepal'},
    'AN': {'nl': 'Nederlandse Antillen', 'en': 'Netherlands Antilles'},
    'NC': {'nl': 'Nieuw-Caledonië', 'en': 'New Caledonia'},
    'NZ': {'nl': 'Nieuw-Zeeland', 'en': 'New Zealand'},
    'NI': {'nl': 'Nicaragua', 'en': 'Nicaragua'},
    'NE': {'nl': 'Niger', 'en': 'Niger'},
    'NG': {'nl': 'Nigeria', 'en': 'Nigeria'},
    'NU': {'nl': 'Niue', 'en': 'Niue'},
    'KP': {'nl': 'Noord-Korea', 'en': 'North Korea'},
    'MP': {'nl': 'Noordelijke Marianen', 'en': 'Northern Mariana Islands'},
    'NO': {'nl': 'Noorwegen', 'en': 'Norway'},
    'OM': {'nl': 'Oman', 'en': 'Oman'},
    'PK': {'nl': 'Pakistan', 'en': 'Pakistan'},
    'PW': {'nl': 'Palau', 'en': 'Palau'},
    'PS': {'nl': 'Palestijnse gebieden', 'en': 'Palestine'},
    'PA': {'nl': 'Panama', 'en': 'Panama'},
    'PG': {'nl': 'Papoea-Nieuw-Guinea', 'en': 'Papua New Guinea'},
    'PY': {'nl': 'Paraguay', 'en': 'Paraguay'},
    'PE': {'nl': 'Peru', 'en': 'Peru'},
    'PH': {'nl': 'Filippijnen', 'en': 'Philippines'},
    'PN': {'nl': 'Pitcairneilanden', 'en': 'Pitcairn'},
    'PL': {'nl': 'Polen', 'en': 'Poland'},
    'PT': {'nl': 'Portugal', 'en': 'Portugal'},
    'PR': {'nl': 'Puerto Rico', 'en': 'Puerto Rico'},
    'QA': {'nl': 'Qatar', 'en': 'Qatar'},
    'CG': {'nl': 'Congo-Brazzaville', 'en': 'Republic of the Congo'},
    'RE': {'nl': 'Réunion', 'en': 'Reunion'},
    'RO': {'nl': 'Roemenië', 'en': 'Romania'},
    'RU': {'nl': 'Rusland', 'en': 'Russia'},
    'RW': {'nl': 'Rwanda', 'en': 'Rwanda'},
    'BL': {'nl': 'Saint-Barthélemy', 'en': 'Saint Barthelemy'},
    'SH': {'nl': 'Sint-Helena', 'en': 'Saint Helena'},
    'KN': {'nl': 'Saint Kitts en Nevis', 'en': 'Saint Kitts and Nevis'},
    'LC': {'nl': 'Saint Lucia', 'en': 'Saint Lucia'},
    'MF': {'nl': 'Saint-Martin', 'en': 'Saint Martin'},
    'PM': {'nl': 'Saint-Pierre en Miquelon', 'en': 'Saint Pierre and Miquelon'},
    'VC': {'nl': 'Saint Vincent en de Grenadines', 'en': 'Saint Vincent and the Grenadines'},
    'WS': {'nl': 'Samoa', 'en': 'Samoa'},
    'SM': {'nl': 'San Marino', 'en': 'San Marino'},
    'ST': {'nl': 'Sao Tomé en Principe', 'en': 'Sao Tome and Principe'},
    'SA': {'nl': 'Saoedi-Arabië', 'en': 'Saudi Arabia'},
    'SN': {'nl': 'Senegal', 'en': 'Senegal'},
    'RS': {'nl': 'Servië', 'en': 'Serbia'},
    'SC': {'nl': 'Seychellen', 'en': 'Seychelles'},
    'SL': {'nl': 'Sierra Leone', 'en': 'Sierra Leone'},
    'SG': {'nl': 'Singapore', 'en': 'Singapore'},
    'SX': {'nl': 'Sint Maarten', 'en': 'Sint Maarten'},
    'SK': {'nl': 'Slowakije', 'en': 'Slovakia'},
    'SI': {'nl': 'Slovenië', 'en': 'Slovenia'},
    'SB': {'nl': 'Salomonseilanden', 'en': 'Solomon Islands'},
    'SO': {'nl': 'Somalië', 'en': 'Somalia'},
    'ZA': {'nl': 'Zuid-Afrika', 'en': 'South Africa'},
    'KR': {'nl': 'Zuid-Korea', 'en': 'South Korea'},
    'SS': {'nl': 'Zuid-Soedan', 'en': 'South Sudan'},
    'ES': {'nl': 'Spanje', 'en': 'Spain'},
    'LK': {'nl': 'Sri Lanka', 'en': 'Sri Lanka'},
    'SD': {'en': 'Sudan', 'nl': 'Soedan'},
    'SR': {'en': 'Suriname', 'nl': 'Suriname'},
    'SJ': {'en': 'Svalbard and Jan Mayen', 'nl': 'Svalbard en Jan Mayen'},
    'SZ': {'en': 'Swaziland', 'nl': 'Swaziland'},
    'SE': {'en': 'Sweden', 'nl': 'Zweden'},
    'CH': {'en': 'Switzerland', 'nl': 'Zwitserland'},
    'SY': {'en': 'Syria', 'nl': 'Syrië'},
    'TW': {'en': 'Taiwan', 'nl': 'Taiwan'},
    'TJ': {'en': 'Tajikistan', 'nl': 'Tadzjikistan'},
    'TZ': {'en': 'Tanzania', 'nl': 'Tanzania'},
    'TH': {'en': 'Thailand', 'nl': 'Thailand'},
    'TG': {'en': 'Togo', 'nl': 'Togo'},
    'TK': {'en': 'Tokelau', 'nl': 'Tokelau'},
    'TO': {'en': 'Tonga', 'nl': 'Tonga'},
    'TT': {'en': 'Trinidad and Tobago', 'nl': 'Trinidad en Tobago'},
    'TN': {'en': 'Tunisia', 'nl': 'Tunesië'},
    'TR': {'en': 'Turkey', 'nl': 'Turkije'},
    'TM': {'en': 'Turkmenistan', 'nl': 'Turkmenistan'},
    'TC': {'en': 'Turks and Caicos Islands', 'nl': 'Turks- en Caicoseilanden'},
    'TV': {'en': 'Tuvalu', 'nl': 'Tuvalu'},
    'VI': {'en': 'U.S. Virgin Islands', 'nl': 'Maagdeneilanden van de Verenigde Staten'},
    'UG': {'en': 'Uganda', 'nl': 'Oeganda'},
    'UA': {'en': 'Ukraine', 'nl': 'Oekraïne'},
    'AE': {'en': 'United Arab Emirates', 'nl': 'Verenigde Arabische Emiraten'},
    'GB': {'en': 'United Kingdom', 'nl': 'Verenigd Koninkrijk'},
    'US': {'en': 'United States', 'nl': 'Verenigde Staten'},
    'UY': {'en': 'Uruguay', 'nl': 'Uruguay'},
    'UZ': {'en': 'Uzbekistan', 'nl': 'Oezbekistan'},
    'VU': {'en': 'Vanuatu', 'nl': 'Vanuatu'},
    'VA': {'en': 'Vatican City', 'nl': 'Vaticaanstad'},
    'VE': {'en': 'Venezuela', 'nl': 'Venezuela'},
    'VN': {'en': 'Vietnam', 'nl': 'Vietnam'},
    'WF': {'en': 'Wallis and Futuna', 'nl': 'Wallis en Futuna'},
    'EH': {'en': 'Western Sahara', 'nl': 'Westelijke Sahara'},
    'YE': {'en': 'Yemen', 'nl': 'Jemen'},
    'ZM': {'en': 'Zambia', 'nl': 'Zambia'},
    'ZW': {'en': 'Zimbabwe', 'nl': 'Zimbabwe'}
};

export default countries;

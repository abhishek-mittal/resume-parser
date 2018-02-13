// \b(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)\s[0-9{3-6}]+  

// const fs = require('fs')

// var a = "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW".split('|')
// var b = [
// ["GB", "GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4}"],
// ["JE", "JE\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}"],
// ["GG", "GY\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}"],
// ["IM", "IM\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}"],
// ["US", "\\d{5}([ \\-]\\d{4})?"],
// ["CA", "[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ ]?\\d[ABCEGHJ-NPRSTV-Z]\\d"],
// ["DE", "\\d{5}"],
// ["JP", "\\d{3}-\\d{4}"],
// ["FR", "\\d{2}[ ]?\\d{3}"],
// ["AU", "\\d{4}"],
// ["IT", "\\d{5}"],
// ["CH", "\\d{4}"],
// ["AT", "\\d{4}"],
// ["ES", "\\d{5}"],
// ["NL", "\\d{4}[ ]?[A-Z]{2}"],
// ["BE", "\\d{4}"],
// ["DK", "\\d{4}"],
// ["SE", "\\d{3}[ ]?\\d{2}"],
// ["NO", "\\d{4}"],
// ["BR", "\\d{5}[\\-]?\\d{3}"],
// ["PT", "\\d{4}([\\-]\\d{3})?"],
// ["FI", "\\d{5}"],
// ["AX", "22\\d{3}"],
// ["KR", "\\d{3}[\\-]\\d{3}"],
// ["CN", "\\d{6}"],
// ["TW", "\\d{3}(\\d{2})?"],
// ["SG", "\\d{6}"],
// ["DZ", "\\d{5}"],
// ["AD", "AD\\d{3}"],
// ["AR", "([A-HJ-NP-Z])?\\d{4}([A-Z]{3})?"],
// ["AM", "(37)?\\d{4}"],
// ["AZ", "\\d{4}"],
// ["BH", "((1[0-2]|[2-9])\\d{2})?"],
// ["BD", "\\d{4}"],
// ["BB", "(BB\\d{5})?"],
// ["BY", "\\d{6}"],
// ["BM", "[A-Z]{2}[ ]?[A-Z0-9]{2}"],
// ["BA", "\\d{5}"],
// ["IO", "BBND 1ZZ"],
// ["BN", "[A-Z]{2}[ ]?\\d{4}"],
// ["BG", "\\d{4}"],
// ["KH", "\\d{5}"],
// ["CV", "\\d{4}"],
// ["CL", "\\d{7}"],
// ["CR", "\\d{4,5}|\\d{3}-\\d{4}"],
// ["HR", "\\d{5}"],
// ["CY", "\\d{4}"],
// ["CZ", "\\d{3}[ ]?\\d{2}"],
// ["DO", "\\d{5}"],
// ["EC", "([A-Z]\\d{4}[A-Z]|(?:[A-Z]{2})?\\d{6})?"],
// ["EG", "\\d{5}"],
// ["EE", "\\d{5}"],
// ["FO", "\\d{3}"],
// ["GE", "\\d{4}"],
// ["GR", "\\d{3}[ ]?\\d{2}"],
// ["GL", "39\\d{2}"],
// ["GT", "\\d{5}"],
// ["HT", "\\d{4}"],
// ["HN", "(?:\\d{5})?"],
// ["HU", "\\d{4}"],
// ["IS", "\\d{3}"],
// ["IN", "\\d{6}"],
// ["ID", "\\d{5}"],
// ["IL", "\\d{5}"],
// ["JO", "\\d{5}"],
// ["KZ", "\\d{6}"],
// ["KE", "\\d{5}"],
// ["KW", "\\d{5}"],
// ["LA", "\\d{5}"],
// ["LV", "\\d{4}"],
// ["LB", "(\\d{4}([ ]?\\d{4})?)?"],
// ["LI", "(948[5-9])|(949[0-7])"],
// ["LT", "\\d{5}"],
// ["LU", "\\d{4}"],
// ["MK", "\\d{4}"],
// ["MY", "\\d{5}"],
// ["MV", "\\d{5}"],
// ["MT", "[A-Z]{3}[ ]?\\d{2,4}"],
// ["MU", "(\\d{3}[A-Z]{2}\\d{3})?"],
// ["MX", "\\d{5}"],
// ["MD", "\\d{4}"],
// ["MC", "980\\d{2}"],
// ["MA", "\\d{5}"],
// ["NP", "\\d{5}"],
// ["NZ", "\\d{4}"],
// ["NI", "((\\d{4}-)?\\d{3}-\\d{3}(-\\d{1})?)?"],
// ["NG", "(\\d{6})?"],
// ["OM", "(PC )?\\d{3}"],
// ["PK", "\\d{5}"],
// ["PY", "\\d{4}"],
// ["PH", "\\d{4}"],
// ["PL", "\\d{2}-\\d{3}"],
// ["PR", "00[679]\\d{2}([ \\-]\\d{4})?"],
// ["RO", "\\d{6}"],
// ["RU", "\\d{6}"],
// ["SM", "4789\\d"],
// ["SA", "\\d{5}"],
// ["SN", "\\d{5}"],
// ["SK", "\\d{3}[ ]?\\d{2}"],
// ["SI", "\\d{4}"],
// ["ZA", "\\d{4}"],
// ["LK", "\\d{5}"],
// ["TJ", "\\d{6}"],
// ["TH", "\\d{5}"],
// ["TN", "\\d{4}"],
// ["TR", "\\d{5}"],
// ["TM", "\\d{6}"],
// ["UA", "\\d{5}"],
// ["UY", "\\d{5}"],
// ["UZ", "\\d{6}"],
// ["VA", "00120"],
// ["VE", "\\d{4}"],
// ["ZM", "\\d{5}"],
// ["AS", "96799"],
// ["CC", "6799"],
// ["CK", "\\d{4}"],
// ["RS", "\\d{6}"],
// ["ME", "8\\d{4}"],
// ["CS", "\\d{5}"],
// ["YU", "\\d{5}"],
// ["CX", "6798"],
// ["ET", "\\d{4}"],
// ["FK", "FIQQ 1ZZ"],
// ["NF", "2899"],
// ["FM", "(9694[1-4])([ \\-]\\d{4})?"],
// ["GF", "9[78]3\\d{2}"],
// ["GN", "\\d{3}"],
// ["GP", "9[78][01]\\d{2}"],
// ["GS", "SIQQ 1ZZ"],
// ["GU", "969[123]\\d([ \\-]\\d{4})?"],
// ["GW", "\\d{4}"],
// ["HM", "\\d{4}"],
// ["IQ", "\\d{5}"],
// ["KG", "\\d{6}"],
// ["LR", "\\d{4}"],
// ["LS", "\\d{3}"],
// ["MG", "\\d{3}"],
// ["MH", "969[67]\\d([ \\-]\\d{4})?"],
// ["MN", "\\d{6}"],
// ["MP", "9695[012]([ \\-]\\d{4})?"],
// ["MQ", "9[78]2\\d{2}"],
// ["NC", "988\\d{2}"],
// ["NE", "\\d{4}"],
// ["VI", "008(([0-4]\\d)|(5[01]))([ \\-]\\d{4})?"],
// ["PF", "987\\d{2}"],
// ["PG", "\\d{3}"],
// ["PM", "9[78]5\\d{2}"],
// ["PN", "PCRN 1ZZ"],
// ["PW", "96940"],
// ["RE", "9[78]4\\d{2}"],
// ["SH", "(ASCN|STHL) 1ZZ"],
// ["SJ", "\\d{4}"],
// ["SO", "\\d{5}"],
// ["SZ", "[HLMS]\\d{3}"],
// ["TC", "TKCA 1ZZ"],
// ["WF", "986\\d{2}"],
// ["XK", "\\d{5}"],
// ["YT", "976\\d{2}"]
// ]
// // console.log(b)

// let finalCountryCode = []

// a.forEach( (element,i) => {
//     b.forEach( el => {
//         if (el[0] === element) {
//             finalCountryCode.push( `(${element})\\\\W${el[1].replace(/\\/g,'\\\\')}` )
//             // console.log(element)
//         }
//     } )
// } )

// fs.writeFileSync("countrycode.txt",finalCountryCode.toString().replace(/(,)/g,'|'))




























const Reg_Entries = {
    tell: /^((tell|m|phone|contact|phone)(\W*))*?((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/gmi,
    email:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/gm,
    country:  new RegExp(`Algeria|Angola|Benin|Botswana|Burkina Faso|Burundi|Cabo Verde|Cameroon
                |Central African Republic (CAR)|Chad|Comoros|Democratic Republic of the Congo|Republic of the Congo|Cote d'Ivoire|Djibouti|Egypt
                |Equatorial Guinea|Eritrea|Ethiopia|Gabon|Gambia|Ghana|Guinea|Guinea-Bissau|Kenya|Lesotho|Liberia|Libya|Madagascar|Malawi|Mali
                |Mauritania|Mauritius|Morocco|Mozambique|Namibia|Niger|Nigeria|Rwanda|Sao Tome and Principe|Senegal|Seychelles|Sierra Leone|Somalia
                |South Africa|South Sudan|Sudan|Swaziland|Tanzania|Togo|Tunisia|Uganda|Zambia|Zimbabwe|(Afghanistan)|Armenia|Azerbaijan|Bahrain|Bangladesh
                |Bhutan|Brunei|Cambodia|China|Cyprus|Georgia|India|Indonesia|Iran|Iraq|Israel|Japan|Jordan|Kazakhstan|Kuwait|Kyrgyzstan|Laos|Lebanon
                |Malaysia|Maldives|Mongolia|Myanmar (Burma)|Nepal|North Korea|Oman|Pakistan|Palestine|Philippines|Qatar|Russia|Saudi Arabia|Singapore
                |South Korea|Sri Lanka|Syria|Taiwan|Tajikistan|Thailand|Timor-Leste|Turkey|Turkmenistan|United Arab Emirates (UAE)|Uzbekistan|Vietnam|Yemen
                |Albania|Andorra|Armenia|Austria|Azerbaijan|Belarus|Belgium|Bosniaand Herzegovina|Bulgaria|Croatia|Cyprus|Czech Republic|Denmark|Estonia
                |Finland|France|Georgia|Germany|Greece|Hungary|Iceland|Ireland|Italy|Kazakhstan|Kosovo|Latvia|Liechtenstein|Lithuania|Luxembourg
                |Macedonia|Malta|Moldova|Monaco|Montenegro|Netherlands|Norway|Poland|Portugal|Romania|Russia|San Marino|Serbia|Slovakia|Slovenia|Spain|Sweden
                |Switzerland|Turkey|Ukraine|United Kingdom|Vatican City|Antigua and Barbuda|Bahamas|Barbados|Belize|Canada|Costa Rica|Cuba|Dominica
                |Dominican Republic|El Salvador|Grenada|Guatemala|Haiti|Honduras|Jamaica|Mexico|Nicaragua|Panama|Saint Kitts and Nevis|Saint Lucia
                |Saint Vincent and the Grenadines|Trinidad and Tobago|United States of America|Albania|Andorra|Armenia|Austria|Azerbaijan|Belarus|Belgium
                |Bosnia and Herzegovina|Bulgaria|Croatia|Cyprus|Czech Republic|Denmark|Estonia|Finland|France|Georgia|Germany|Greece|Hungary|Iceland
                |Ireland|Italy|Kazakhstan|Kosovo|Latvia|Liechtenstein|Lithuania|Luxembourg|Macedonia|Malta|Moldova|Monaco|Montenegro|Netherlands
                |Norway|Poland|Portugal|Romania|Russia|San Marino|Serbia|Slovakia|Slovenia|Spain|Sweden|Switzerland|Turkey|Ukraine|United Kingdom|Vatican City
                |Argentina|Bolivia|Brazil|Chile|Colombia|Ecuador|Guyana|Paraguay|Peru|Suriname|Uruguay|Venezuela|Australia|Fiji|Kiribati|Marshall Islands
                |Micronesia|Nauru|New Zealand|Palau|Papua New Guinea|Samoa|Solomon Islands|Tonga|Tuvalu|Vanuatu`,'gmi'),
    finalCountryCode: new RegExp(`(AX)\\W22\\d{3}|(DZ)\\W\\d{5}|(AS)\\W96799|(AD)\\WAD\\d{3}|(AR)\\W([A-HJ-NP-Z])?\\d{4}([A-Z]{3})?
                |(AM)\\W(37)?\\d{4}|(AU)\\W\\d{4}|(AT)\\W\\d{4}|(AZ)\\W\\d{4}|(BH)\\W((1[0-2]|[2-9])\\d{2})?|(BD)\\W\\d{4}|(BB)\\W(BB\\d{5})?
                |(BY)\\W\\d{6}|(BE)\\W\\d{4}|(BM)\\W[A-Z]{2}[ ]?[A-Z0-9]{2}|(BA)\\W\\d{5}|(BR)\\W\\d{5}[\\-]?\\d{3}|(IO)\\WBBND 1ZZ
                |(BN)\\W[A-Z]{2}[ ]?\\d{4}|(BG)\\W\\d{4}|(KH)\\W\\d{5}|(CA)\\W[ABCEGHJKLMNPRSTVXY]?\\d[ABCEGHJ-NPRSTV-Z]?[ ]?\\d[ABCEGHJ-NPRSTV-Z]?\\d+|(CV)\\W\\d{4}
                |(CL)\\W\\d{7}|(CN)\\W\\d{6}|(CX)\\W6798|(CC)\\W6799|(CK)\\W\\d{4}|(CR)\\W\\d{4|5}|\\d{3}-\\d{4}|(HR)\\W\\d{5}|(CY)\\W\\d{4}
                |(CZ)\\W\\d{3}[ ]?\\d{2}|(DK)\\W\\d{4}|(DO)\\W\\d{5}|(EC)\\W([A-Z]\\d{4}[A-Z]|(?:[A-Z]{2})?\\d{6})?|(EG)\\W\\d{5}|(EE)\\W\\d{5}|(ET)\\W\\d{4}
                |(FK)\\WFIQQ 1ZZ|(FO)\\W\\d{3}|(FI)\\W\\d{5}|(FR)\\W\\d{2}[ ]?\\d{3}|(GF)\\W9[78]3\\d{2}|(PF)\\W987\\d{2}|(GE)\\W\\d{4}|(DE)\\W\\d{5}
                |(GR)\\W\\d{3}[ ]?\\d{2}|(GL)\\W39\\d{2}|(GP)\\W9[78][01]\\d{2}|(GU)\\W969[123]\\d([ \\-]\\d{4})?|(GT)\\W\\d{5}
                |(GG)\\WGY\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}|(GN)\\W\\d{3}|(GW)\\W\\d{4}|(HT)\\W\\d{4}|(HM)\\W\\d{4}|(VA)\\W00120
                |(HN)\\W(?:\\d{5})?|(HU)\\W\\d{4}|(IS)\\W\\d{3}|(IN)\\W\\d{6}|(ID)\\W\\d{5}|(IQ)\\W\\d{5}|(IM)\\WIM\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}|(IL)\\W\\d{5}
                |(IT)\\W\\d{5}|(JP)\\W\\d{3}-\\d{4}|(JE)\\WJE\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}|(JO)\\W\\d{5}|(KZ)\\W\\d{6}|(KE)\\W\\d{5}
                |(KR)\\W\\d{3}[\\-]\\d{3}|(KW)\\W\\d{5}|(KG)\\W\\d{6}|(LA)\\W\\d{5}|(LV)\\W\\d{4}|(LB)\\W(\\d{4}([ ]?\\d{4})?)?|(LS)\\W\\d{3}|(LR)\\W\\d{4}
                |(LI)\\W(948[5-9])|(949[0-7])|(LT)\\W\\d{5}|(LU)\\W\\d{4}|(MK)\\W\\d{4}|(MG)\\W\\d{3}|(MY)\\W\\d{5}|(MV)\\W\\d{5}|(MT)\\W[A-Z]{3}[ ]?\\d{2|4}
                |(MH)\\W969[67]\\d([ \\-]\\d{4})?|(MQ)\\W9[78]2\\d{2}|(MU)\\W(\\d{3}[A-Z]{2}\\d{3})?|(YT)\\W976\\d{2}|(MX)\\W\\d{5}|(FM)\\W(9694[1-4])([ \\-]\\d{4})?
                |(MD)\\W\\d{4}|(MC)\\W980\\d{2}|(MN)\\W\\d{6}|(ME)\\W8\\d{4}|(MA)\\W\\d{5}|(NP)\\W\\d{5}|(NL)\\W\\d{4}[ ]?[A-Z]{2}|(NC)\\W988\\d{2}
                |(NZ)\\W\\d{4}|(NI)\\W((\\d{4}-)?\\d{3}-\\d{3}(-\\d{1})?)?|(NE)\\W\\d{4}|(NG)\\W(\\d{6})|(NF)\\W2899|(MP)\\W9695[012]([ \\-]\\d{4})?
                |(NO)\\W\\d{4}|(OM)\\W(PC )?\\d{3}|(PK)\\W\\d{5}|(PW)\\W96940|(PG)\\W\\d{3}|(PY)\\W\\d{4}|(PH)\\W\\d{4}|(PN)\\WPCRN 1ZZ|(PL)\\W\\d{2}-\\d{3}
                |(PT)\\W\\d{4}([\\-]\\d{3})?|(PR)\\W00[679]\\d{2}([ \\-]\\d{4})?|(RE)\\W9[78]4\\d{2}|(RO)\\W\\d{6}|(RU)\\W\\d{6}|(SH)\\W(ASCN|STHL) 1ZZ
                |(PM)\\W9[78]5\\d{2}|(SM)\\W4789\\d|(SA)\\W\\d{5}|(SN)\\W\\d{5}|(RS)\\W\\d{6}|(SG)\\W\\d{6}|(SK)\\W\\d{3}[ ]?\\d{2}|(SI)\\W\\d{4}
                |(SO)\\W\\d{5}|(ZA)\\W\\d{4}|(GS)\\WSIQQ 1ZZ|(ES)\\W\\d{5}|(LK)\\W\\d{5}|(SJ)\\W\\d{4}|(SZ)\\W[HLMS]\\d{3}|(SE)\\W\\d{3}[ ]?\\d{2}
                |(CH)\\W\\d{4}|(TW)\\W\\d{3}(\\d{2})?|(TJ)\\W\\d{6}|(TH)\\W\\d{5}|(TN)\\W\\d{4}|(TR)\\W\\d{5}|(TM)\\W\\d{6}|(TC)\\WTKCA 1ZZ|(UA)\\W\\d{5}
                |(GB)\\WGIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(d[dA-Z]?[ ]?d[ABD-HJLN-UW-Z]{2}))
                |BFPO[ ]?d{1|4}|(US)\\W\\d{5}([ \\-]\\d{4})?|(UY)\\W\\d{5}|(UZ)\\W\\d{6}|(VE)\\W\\d{4}|(VI)\\W008(([0-4]\\d)|(5[01]))([ \\-]\\d{4})?|(WF)\\W986\\d{2}
                |(ZM)\\W\\d{5}`,'gim')

}

const str = `LINDA A. RINALDI 916.437.5298 
8624 Sunset Way 916.437.2280 (cell) 
Sacramento, CA 95660 lrinaldi@comcast.net 

IN 263139
 
QUALIFICATIONS 
Highly motivated, customer focused professional with extensive experience in key client development and 
retention. Skilled in creating and growing solid customer relationships, needs analysis, and account activity 
tracking. 
 
EXPERIENCE `

console.log(
    
    str.match(Reg_Entries.finalCountryCode))

// let Africa = ["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon","Central African Republic (CAR)","Chad","Comoros","Democratic Republic of the Congo","Republic of the Congo","Cote d'Ivoire","Djibouti","Egypt","Equatorial Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","Sao Tome and Principe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Swaziland","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"]
// let Asia = ["Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","Cyprus","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Maldives","Mongolia","Myanmar (Burma)","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Russia","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates (UAE)","Uzbekistan","Vietnam","Yemen"]
// let Europe = ["Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kazakhstan","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"]
// let North_America = ["Antigua and Barbuda","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba","Dominica","Dominican Republic","El Salvador","Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States of America"]
// let South_America = ["Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"]
// let Australia = ["Australia","Fiji","Kiribati","Marshall Islands","Micronesia","Nauru","New Zealand","Palau","Papua New Guinea","Samoa","Solomon Islands","Tonga","Tuvalu","Vanuatu"]





// // console.log(Array(...Africa,...Asia,...Europe,...North_America,...Europe,...South_America,...Australia).toLocaleString())

	
// The unicode CLDR contains the postal code regex for each country. (158 regex's in total!)

// Download it here - http://cldr.unicode.org/index/downloads
// unzip core.zip
// Take a look at common/supplemental/postalCodeData.xml
// Google also has a web service with per-country address formatting information, including postal codes, here - http://i18napis.appspot.com/address (I found that link via http://unicode.org/review/pri180/ )

// Edit

// Here a copy of postalCodeData.xml regex :


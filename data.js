const fs = require('fs')
const startT = new Date()
const readline = require('readline')
// const obj = require('./json')
let obj = {
    PERSONAL_DETAILS:{
        name: [" ", " ", ""],
        gender: "",
        dob: "",
        phone: "",
        email: "",
        nationality: "",
        maritial_status: "",
        address: "",
    },
    EDUCATION: [""],
    SUMMARY: " ",
    CAREER_OBJECTIVE: " ",
    SKILLS: [" "],
    PROJECTS: [" "],
    EXPERIENCE: [
        {
            company: " ",
            position: " ",
            from: "",
            to: "",
        }
    ],
    ACTIVITIES: [" "],
    HOBBIES: [" "],
    INTERESTS: [" "],
    LANGUAGES:[" "]

}

function liner(matches, objMatches, callback){
    let i = 0; 
    let base = 'RAW'
    const dataStream = fs.createReadStream('./content.txt')
    const rl = readline.createInterface({
        input: dataStream
    }) 
    rl.on('line', (line) => {
        if (matches.toString().includes(line.toString().trim()) && (i < matches.length ) && line != '' && line != ' ' ) {
            base = matches[i].toString()
            i++;
        }
        // console.log( " 💤 ", line )
        if( line.toString() === ' ' || line.toString() === '' || line.trim() === base.trim() )
        {

        }else{
            // console.log(base.replace(/\s/gm,'-'))
            objMatches[base.trim()].push(line)
        }
    })
        rl.on('close',() => {
            callback.apply(this,[null, objMatches])
    })

    // sudhakar 
    // for(let i=0;i<matches.length-1;i++){
    //     var j=i;
    //     var matches2 = matches[j].trim('\n')
    //     var matches3 = matches[++j]

    //     let regex = `(${ matches2 })\\n(.*\\n)+(${ matches3 })`
    //     keys1 = new RegExp(regex,'g')
    //     // var keys1 = /()\n(.*\n)+(matches3)/g
    //     objMatches.push(s.match(keys1))
    // }
}


function blockCreator(){
    let headingArray =[ 'EDUCATION\n',
    'PERSONAL PROJECTS\n',
    'SKILLS\n',
    'ACHIEVEMENTS\n',
    'POSITIONS OF RESPONSIBILITY\n',
    'LANGUAGES\n',
    'INTERESTS\n' ]
    let headingObject = {
        'RAW': []
    }
    headingArray.forEach(element => {
            headingObject[element.trim()] = []
        });
        // console.log(headingObject);
    // console.log(headingObject)
    liner(headingArray, headingObject, (error, data) => {
        // console.log(" 🎱 ",data, " ⏲ ",  new Date() - startT)

        let skillreg = /\b(Credentials|Qualifications|Areas of Experience|Areas of Expertise|Areas of Knowledge|Career Related Skills|Professional Skills|Specialized Skills|Technical Skills|Computer Skills|Computer Knowledge|Software|Technologies|Technical Experience|Proficiencies|Language Competencies and Skills|Programming Languages|Skills)\b\n/gmi
        let Extr_curricularreg= /\b(Activities and Honors|Affiliations|Professional Affiliations|Professional Associations|Associations|Professional Memberships|Memberships|Athletic Involvement|Community Involvement|Civic Activities|Extra-Curricular Activities|POSITIONS OF RESPONSIBILITY|EXTRA CURRICULAR ACHIEVEMENTS|Extra\-?curricular|Professional Activities|Volunteer Work|Volunteer Experience|Publications|Presentations|Conventions)\b\n/gmi
        let Interestsreg=/\b(Hobbies|Personal Interests|Interests|Miscellaneous)\b\n/gmi
        let languagereg=/\b(language( |s)|Language Proficiency )\b\n?/gmi
        let projectreg=/\b(personal projects|group projects|project(|s))\b\n/gmi
        let Awards_and_Recognitionreg=/\b(Academic Honors|Honors|Accolades|Endorsements|Accomplishments|Achievements|Awards|Distinctions|Fellowships|Scholarships)\b\n/gmi
        let Education_and_Trainingreg=
        /\b(Academic Background|Academic Experience|Programs|Related Courses|Courses|Education and Training|Education|Educational Background|Educational Qualifications|Educational Training|Academic Training|Professional Training|Training|Course Project Experience|Related Course Projects|Internship Experience|Internships|Apprenticeships|College Activities|Certifications|Special Training)\b\n/gmi
        let Work_and_Employmentreg=
        /\b(Employment History|Work History|Work Experience|Professional Experience|Professional Background|Additional Experience|Career Related Experience|Related Experience|Industry Experience|Accounting Experience|Freelance Experience|Freelance|Army Experience|Military Experience|Military Background|Experience)\b\n/gmi
        let Careerreg=
        /\b(Summary of Qualifications|career summary|Professional Summary|Summary|Professional Objective|Employment Objective|Career Objective|Objective|Career Goal|Five Year Plan)\b\n/gmi
        let personal_detailsreg=/\b(personal information|personal details|personal data)\b/gm

        var skill=data[(headingArray.toString().match(skillreg).toString().trim())]
        var extra_curr=data[(headingArray.toString().match(Extr_curricularreg).toString().trim())]
        var language=data[(headingArray.toString().match(languagereg).toString().trim())]
        // var interests=data[(headingArray.toString().match(interestsreg).toString().trim())]
        var project=data[(headingArray.toString().match(projectreg).toString().trim())]
        var education=data[(headingArray.toString().match(Education_and_Trainingreg).toString().trim())]
        var awards=data[(headingArray.toString().match(Awards_and_Recognitionreg).toString().trim())]
        // var work=data[(headingArray.toString().match(Work_and_Employmentreg).toString().trim())]
        // var career=data[(headingArray.toString().match(Careerreg).toString().trim())]
        // var personal=data[(headingArray.toString().match(personal_detailsreg).toString().trim())]
        raw(data.RAW)
        // educ(education)
        // proj(project)
        obj.SKILLS=skill
        obj.ACTIVITIES=extra_curr
        obj.LANGUAGES=language
        obj.PROJECTS=project
        obj.EDUCATION=education
    //    console.log("skill",skill)
    //    console.log("extra",extra_curr)
    //    console.log("language",language)
    //    console.log("project",project)
    //    console.log("education",education)
    //    console.log("awards",awards)
    //    console.log("personal",data.RAW)
    console.log(obj)
    
    })
}


blockCreator()


function raw(data){
   
    var s= data.toString();
     var gmailreg= /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/gmi
    var email=s.match(gmailreg)
    if(email == null){
        obj.PERSONAL_DETAILS.email='null';
    }else{
    obj.PERSONAL_DETAILS.email= email[email.length - 1]
    }
    var phonereg= /((([\+?][\(]?([+]|[+]\d{2}?|\d{2}?)?[\)]?)?\s?[(]?\d{3}[)]?[\-|\s|\.]?\d{3}[\-|\s|\.]?\d{2}[\-|\s|\.]?\d{2}))/gmi
    var phone=s.match(phonereg)
    if(phone == null){
        obj.PERSONAL_DETAILS.phone='null'
    }else{
        obj.PERSONAL_DETAILS.phone=phone[phone.length - 1]
    }
    var genderreg= /(male|female)/i
    var gender=s.match(genderreg)
    if(gender == null){
        obj.PERSONAL_DETAILS.gender='null'
    }else{
        obj.PERSONAL_DETAILS.gender=gender[gender.length - 1]
    }
    var dobreg= /(((dob|DOB)\:?\s*|((D|d)ate\s?of\s?(B|b)irth)\:?\s)(.+)|(\d{4}|\d{2})[\-|\/](\d{2})[\-|\/](\d{4}|\d{2})|(\d{1,2}(th|nd|st)?\s[A-Za-z]+\s\d{4}))/gmi
    var dob=s.match(dobreg)
    if(dob == null){
        obj.PERSONAL_DETAILS.dob='null'
    }else{
        obj.PERSONAL_DETAILS.dob=dob[dob.length - 1]
    }
}

// console.log(dataStream)

// matches.forEach( element => {
    
// })
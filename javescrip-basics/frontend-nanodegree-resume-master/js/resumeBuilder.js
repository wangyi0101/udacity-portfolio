var bio = {
    "name": "Yi Wang",
    "role": "Web Developer",
    "contacts":{
        "mobile": "669-226-9738",
        "email": "wangyi0101@gmail.com",
        "twitter":"@wangyi0101",
        "github":"wangyi0101",
        "location":"Fremont,CA",
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "welcome to my page",
    "skills":[
        "Python", "HTML", "CSS"
    ]
}

var work = {
    "jobs":[
    {
        "employer": "sina",
        "title": "product marketing manager",
        "lacation": "Beijing, China",
        "dates": "2004-2006",
    },
    {
        "employer": "jinku",
        "title": "senior product marketing manager",
        "location": "Beijing, China",
        "dates": "2008-2010",
    }
    ]
}

var projects = {
    "projects" :[
    {
        "title" : "none",
        "dtaes" : "2015",
        "description": "none",

    }]
}



var education = {
    "schooles": [ 
    {
        "name": "University of Nebraska - Lincoln",
        "city": "Lincoln, NE",
        "majors": ["MBA"],
        "graduatioin years": "2015",
    },
    {
        "name": "Beijing Wuzi University",
        "city": "Beijing, China",
        "majors": ["International business and trades"],
        "graduatioin years": "2004",
    }
    ],
    "online course":[{
        "title": "web developer",
        "schoole": "Udacity",
    }]

}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills =HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#footerContacts").append(formattedMobile, formattedEmail,formattedTwitter,formattedGithub, formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedSkills);




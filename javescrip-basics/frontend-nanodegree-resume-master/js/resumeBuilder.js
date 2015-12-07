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
        "location": "Beijing, China",
        "dates": "2004-2006",
        "description": "Twitter makes it easy to connect with experts in your field. Take advantage of your connections by re-tweeting and commenting on their tweets.",
    },
    {
        "employer": "jinku",
        "title": "senior product marketing manager",
        "location": "Beijing, China",
        "dates": "2008-2010",
        "description": "Twitter makes it easy to connect with experts in your field. Take advantage of your connections by re-tweeting and commenting on their tweets.",

    }
    ]
}

var projects = {
    "projects" :[
    {
        "title" : "none",
        "dates" : "2015",
        "description": "none",

    },
    {
        "title" : "none",
        "dates" : "2015",
        "description": "none",
    }
    ]
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



var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").append(formattedHeaderName);
$("#header").append(formattedRole);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcome);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkills =HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills =HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    formattedSkills =HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
}

function displayWork() {
    for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
}

displayWork();

$(document).click(function(loc) { 
    var x = loc.pageX; 
    var y = loc.pageY; 
    logClicks(x,y)
}
);

function inName(name){
    name = bio.name.split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toLocaleUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name[0] + " " + name[1];
    return finalName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

projects.display = function() {
    for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle= HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedProjectDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDes);
}
}




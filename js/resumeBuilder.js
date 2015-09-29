var formattedName = HTMLheaderName.replace("%data%", "Andrew Cockerham");
var formattedRole = HTMLheaderRole.replace("%data%", "Jack of All Trades");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var contactInfo = {
// 	"email" : "cockerham.andrew at gmail.com",
// 	"phone" : "11111"
// }

var bio = {
	"name" : "Andrew Cockerham",
	"role" : "Jack of Some Trades",
	"contacts" : {
		"mobile" : "281-250-9006",
		"email" : "cockerham.andrew at gmail.com",
		"github": "https://github.com/andrewcockerham",
		"twitter": "https://twitter.com/cockerhamAndrew",
		"location": "Austin, TX"
	},
	"welcomeMessage" : "welcome",
	"skills" : [
		"programming", "teaching", "engineering"
	],
	"bioPic" : "images/me.jpg",
	"display" : function() {}
}

var work = {
	"jobs": [
	{
		"employer": "EF English First",
		"title": "English Teacher",
		"dates": "2009-2010",
		"location": "Hangzhou and Tianjin, China",
		"description": "English Teacher"
	},
	{
		"employer": "EF English First",
		"title": "Mobile Project Manager",
		"dates": "2011",
		"location": "Shanghai, China",
		"description": "English Teacher"
	},
	{
		"employer": "TVA Medical",
		"title": "Quality Engineer",
		"dates": "2012-present",
		"location": "Austin, TX",
		"description": "complicated"
	}
	]
}
// var work = {}

// work.position = "Quality Engineer";
// work.years_worked = "3";
// work.city = "Austin";

// var education = {}

// education["city"] = "College Station, TX";
// education["name"] = "Texas A&M University";
// education["years_attended"] = "4.5";

// OBJECT LITERAL NOTATION
var education = {
	"schools": [
	{
		"name": "Texas A&M University",
		"location": "College Station, TX",
		"degree": "BS Engineering",
		"major": ["Biomedical Engineering"],
		"minor": "Mathematics",
		"dates": "2003-2007",
		"url": "a&m.com"
	},
	{
		"name": "Thailand Oxford English",
		"location": "Chiang Mai, Thialand",
		"degree": "certificate",
		"major": ["CELTA"],
		"dates": 2008,
		"url": "??"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"dates": 2013,
		"url": "?"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Chinese 2048",
		"dates": 2014,
		"description": "customized 2048 game to use Chinese character numbers",
		"image": ["https://s3.amazonaws.com/nanodegreeportfolio/Chinese+2048"]
	},
	{
		"title": "Five Minute Chinese",
		"dates": 2014,
		"description": "Learn 5 Chinese words in 5 minutes",
		"image": ["https://s3.amazonaws.com/nanodegreeportfolio/FMC+image"]
	},
	{
		"title": "Inventory App",
		"dates": 2014,
		"description": "Purchasing and Inventory Solution",
		"image": ["https://s3.amazonaws.com/nanodegreeportfolio/Inventory+image"]
	}
	]
}
// $("#main").append(bio.name);
// $("#main").append(bio.role);
// $("#main").append(work);
// $("#main").append(education.name);

// var lightspeedMPS = 299792458

// function convertLight (lightspeedMPS) {
// 	var lightspeedCPNS = lightspeedMPS * 100 / 1000000000
// 	return lightspeedCPNS
// }
// var awesomeThoughts
// awesomeThoughts = "I am Andrew and I am AWESOME"

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// $("#main").append(funThoughts);

// var audacity = "audacity";
// var udacityTemp = audacity.slice(1);
// var udacity = udacityTemp.charAt(0).toUpperCase() + udacityTemp.slice(1);

// console.log(udacity);
var bio ={"name" :"Jaime Andrews","role" : "Ingeniero en Informatica" ,
	"contacts": {
	"mobile":"96427367", 
	"mail" : "jaime.andrews@gmail.com" ,
	"github": " ",
	"twitter": " ",
	"location": " Santiago de Chile"
	},
	"welcomeMessage":"Welcome to my page",
	"pictureUrl" :"images/fry.jpg" , 
	"skills" :["Técnico Electronico", "Ingeniero en Informatica", "Analista de Planificación", "Front-End Developer"]	}
var work ={ 
	"jobs":[
	{
		"employer": "Xerox de Chile",
		"tittle":"Logistic planner", 
		"dates": "December 2009- December 2014", "description": "Planner ", "location":"Santiago"
	},

	{
		"employer": "Xerox de Chile",
		"tittle":"Field Engineer", 
		"dates": "November 1997- December 2009", "description": "RT", "location":"Santiago"
	},

	{
		"employer": "Fuerza Aerea de Chile",
		"tittle":" Electronics Technical", 
		"dates": "January 1994- December 1997", "description": "Milico", "location":"Punta Arenas"
	}
	]}

var education = { 
	"schools" :[
	{
		"name": "Universidad Andrés Bello", 
		"ciudad":"Santiago",
		"titulo":"Ingeniero en Computación e Informática",
		"Año de Egreso": "2006"
	},
	{
		"name": "Escuela de Especialidades Fuerza Aerea de Chile", 
		"ciudad":"Santiago",
		"titulo":"Mecánico Electrónico de Aeronaves",
		"Año de Egreso": "1993"}
	]
}

var projects ={
	"projects":[
		{
			"tittle":"Sistema de Ingreso pacientes podología",
			"dates":"Febrero de 2015",
			"description": "Sistema de ingreso de pacientes de podología",
			"images": [ "url1","url2","url3"]
		},
		{
			"tittle":"Sistema de Ingreso pacientes podología2",
			"dates":"Marzo de 2015",
			"description": "Sistema de ingreso de pacientes de podología",
			"images": [ "url1","url2","url3"]
		}	
	]
};
var formattedname = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedname);
var formattedrole =HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedrole);
var formattedimage = HTMLbioPic.replace("%data%", bio.pictureUrl);
$("#header").append(formattedimage);
var formattedmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedmessage);
if (bio.skills.length >0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTittle = HTMLworkTitle.replace("%data%", work.jobs[job].tittle);
	var formattedEmployerTitle = formattedEmployer + formattedTittle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
 
//projects.display = function() {
	for (each in projects.projects){
		$("#projects").append(HTMLprojectsStart);
		var formattedTittle = HTMLprojectTitle.replace("%data%", projects.projects[each].tittle);
		$(".project-entry:last").append(formattedTittle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[each].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[each].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[each].images.length >0){
			for (images in projects.projets[each].images){
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[each].images);
				$(".project-entry:last").append(formattedImages);
			}
		}

	}
//}


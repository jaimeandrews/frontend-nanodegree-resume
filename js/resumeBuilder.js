
//$("#main").append("Jaime Andrews");
var bio ={"name" :"Jaime Andrews","role" : "Ingeniero en Informatica" ,
	"contacts": {
	"mobile":"96427367", 
	"mail" : "jaime.andrews@gmail.com" ,
	"github": " ",
	"twitter": " ",
	"location": " Santiago de Chile"
	},
	"welcomeMessage":"Welcome to my page",
	"pictureUrl" :"https://gp3.googleusercontent.com/-5dheV2IgTdU/AAAAAAAAAAI/AAAAAAAAAAA/qXGsbZnjgEI/s48-c-k-no/photo.jpg" , 
	"skills" :["Developer", "Python", "JS", "C++"]	}
var work ={ 
	"jobs":[
	{
		"employer": "Xerox de Chile",
		"tittle":"Logistic planner", 
		"dates": "December 2009- December 2014", "Description": "Santiago"
	},

	{
		"employer": "Xerox de Chile",
		"tittle":"Field Engineer", 
		"dates": "November 1997- December 2009", "Description": "RT"
	},

	{
		"employer": "Fuerza Aerea de Chile",
		"tittle":" Electronics Technical", 
		"dates": "January 1994- December 1997", "Description": "Santiago"
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
		}

	]
}
var formattedname = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedname);
var formattedrole =HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedrole);
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

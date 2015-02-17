
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
	"skills" :["Developer", "Python", "JS", "C++"]	};
//var name = "Jaime Andrews Soto";
//var role = "Ingeniero en Informatica";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedmail = HTMLemail.replace("%data%", bio.contacts.mail)
var formattedskills = HTMLskills.replace("%data%", bio.skills);
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacto);
var formattedPictureUrl = HTMLbioPic.replace("%data%", bio.pictureUrl);

$("#header").prepend(formattedName,formattedRole);
$("#main").append(formattedskills,formattedContact,formattedPictureUrl, formattedmail)


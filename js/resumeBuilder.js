$("#main").append("Jaime Andrews");
var name = "Jaime Andrews";
var role = "Ingeniero en Informatica";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%"), role );
$("#header").prepend(formattedName, formattedRole);

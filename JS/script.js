function load_from_site() 
{
	$.get('http://217.71.129.139:4003/students.php', function(data){
		students = JSON.parse(data)['response']
	});
	
$(document).ready(
	function() 
	{
		$("#tabs").tabs();
	});
function create_str(){
	let 
}}
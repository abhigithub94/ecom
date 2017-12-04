app.controller('adminupctrl',function($scope,$http,$cookieStore)
{
	var admin_data=$cookieStore.get('admin_data');
	console.log('admin_data',admin_data);

	if(!admin_data)
	{
		window.location.href="#!admin";
	}
	$scope.logout=function()
	{
		$cookieStore.remove("admin_data");
		window.location.href="#!admin";
	}

	$scope.validation = function()
 	{
 		console.log("HERE WE ARE");
	var reg = 
 		{
 			url:"/upload_link",
 			method:'POST',
 			headers:{'content-Type':'application/json'},
 			data:{}
 		}
 		$http(reg).then(function(data)
 		{
 			
 			console.log("SUCESS TO LOAD THE DATA")
 		},function()
 		{
 			console.log("UNSUCESS TO LOAD THE DATA");
 		});
 	}	
});
app.controller('adminctrl',function($scope,$http,$cookieStore)
{
	

	
	if($cookieStore.get("admin_data"))
	{
		window.location.href="#!adminup";
	}
	$scope.login=function()
	{
	
		if($scope.username)
		{
			$scope.user_err="";
		}
		else
		{
			$scope.user_err="Please fill this field";
		}
		if($scope.password)
		{
			$scope.pass_err="";
		}
		else
		{
			$scope.pass_err="Please fill this field";
			$scope.msg="";
		}
		if($scope.username && $scope.password)
		{



			var req=
			{
				url:'/adminlogin_link',
				method:'POST',
				headers:
				{
					'content-Type':"application/json"
				},
				data:
				{
					username:$scope.username,
					password:$scope.password
				}
			}
			$http(req).then(function(data)
			{
				$scope.msg=data.data.message;
				console.log("login",data.data.status);
				if(data.data.status)
				{
					$cookieStore.put("admin_data",data.data.status);
					window.location.href='#!adminup';
				}
				
			},function()
			{
				console.log("data is not send");
			});
		}	
	}
});
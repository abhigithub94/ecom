app.controller('homectrl',function($scope,$http,$rootScope)
{


	// $scope.showAdvanced = function(ev) 
	// {
 //    	$mdDialog.show(
 //    	{
	//       	controller: DialogController,
	//       	templateUrl: 'maindialog.html',
	//       	parent: angular.element(document.body),
	//       	targetEvent: ev,
	//       	clickOutsideToClose:true
	//     })
 //    	.then(function(answer) 
 //    	{
 //      		$scope.status = 'You said the information was "' + answer + '".';
 //    	}, function() 
 //    	{
 //      		$scope.status = 'You cancelled the dialog.';
 //    	});
 //  	}

 //  	function DialogController($scope, $mdDialog,$interval) 
 //  	{
 //    	$scope.hide = function() 
 //    	{
 //      		$mdDialog.hide();
 //    	};

 //    	$scope.cancel = function() 
 //    	{
 //      		$mdDialog.cancel();
 //    	};

 //    	$scope.answer = function(answer) 
 //    	{
 //      		$mdDialog.hide(answer);
 //    	};
 // 	}








	console.log("home page");
	$rootScope.recall = function()
	{
	 	$http.get('/fetchall_link').then(function(response)
	 	{
	 		console.log("response",response);
	 		$scope.alldata = response.data.results;
	 		console.log("alldata",$scope.alldata);
	 		$scope.fourrecord=[];
	 		for (var i = 0; i <=3; i++) 
	 		{
	 			$scope.fourrecord.push($scope.alldata[i]);	
	 		}
	 		console.log("fourrecord",$scope.fourrecord);
	 	});
	}
	// console.log("outter alldata",$scope.alldata);
	$rootScope.recall();	
});
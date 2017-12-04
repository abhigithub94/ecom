app.controller('productctrl',function($scope,$http,$rootScope,productService)
{
	console.log("product page");
	$rootScope.recall = function()
	{
	 	$http.get('/fetchall_link').then(function(response)
	 	{
	 		console.log("response",response);
	 		$scope.alldata = response.data.results;
	 		console.log("alldata",$scope.alldata);
	 		console.log("pd",$scope.alldata[0].productlist);
	 		$scope.productlist=$scope.alldata[0].productlist;

	 		console.log("length",$scope.alldata.length);
	 		$scope.rag1=[];
	 		$scope.rag2=[];
	 		$scope.rag3=[];
	 		$scope.rag4=[];
	 		$scope.rag5=[];
	 	
				for (var i = 0; i <$scope.alldata.length; i++)
				{
					if($scope.alldata[i].price>=150 && $scope.alldata[i].price<=349)
					{
						$scope.rag1.push($scope.alldata[i]);
						console.log("for data",$scope.alldata[i]);
						
					}
				}

				for (var i = 0; i <$scope.alldata.length; i++)
				{
					if($scope.alldata[i].price>=350 && $scope.alldata[i].price<=549)
					{
						$scope.rag2.push($scope.alldata[i]);
						console.log("for data",$scope.alldata[i]);
						
					}
				}
				for (var i = 0; i <$scope.alldata.length; i++)
				{
					if($scope.alldata[i].price>=550 && $scope.alldata[i].price<=749)
					{
						$scope.rag3.push($scope.alldata[i]);
						console.log("for data",$scope.alldata[i]);
						
					}
				}
				for (var i = 0; i <$scope.alldata.length; i++)
				{
					if($scope.alldata[i].price>=750 && $scope.alldata[i].price<=949)
					{
						$scope.rag4.push($scope.alldata[i]);
						console.log("for data",$scope.alldata[i]);
						
					}
				}
				for (var i = 0; i <$scope.alldata.length; i++)
				{
					if($scope.alldata[i].price>=950 && $scope.alldata[i].price<=2000)
					{
						$scope.rag5.push($scope.alldata[i]);
						console.log("for data",$scope.alldata[i]);
						
					}
				}

			$scope.all=false;
			$scope.check1=false;
			$scope.check2=false;
			$scope.check3=false;
			$scope.check4=false;																																																																																											
			$scope.check5=false;
			$scope.check11=true;
			$scope.check22=true;
			$scope.check33=true;
			$scope.check44=true;
			$scope.check55=true;
			$scope.r0=function()
			{
				$scope.all=false;
			}
			$scope.r1=function()
			{
				$scope.all=true;
				$scope.check1=$scope.range1;
				

			}
			$scope.r2=function()
			{
				$scope.all=true;
				$scope.check2=$scope.range2;
				

			
			}
			$scope.r3=function()
			{
				$scope.all=true;
				$scope.check3=$scope.range3;
				
			}
			$scope.r4=function()
			{
				$scope.all=true;
				$scope.check4=$scope.range4;
				
			}	
			$scope.r5=function()
			{
				$scope.all=true;
				$scope.check5=$scope.range5;
				
			
			}
				
		
			console.log("range1",$scope.rag1);
	 	});
	}
	$rootScope.recall();


	$scope.imagedetail=function(data)

	{
		console.log("data",data);
	
        window.location.href='#!productdetail';
        productService.addProduct(data);
				
	}


});
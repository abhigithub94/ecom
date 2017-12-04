app.controller('productdetailctrl',function($scope,$http,productService)
{
	
 
    $scope.products = productService.getProducts();
        	
	console.log("products",$scope.products);
	$scope.id=$scope.products[0]._id;
	var getid=$scope.id;
	$scope.des=$scope.products[0].description;
	$scope.gender=$scope.products[0].gender;
	$scope.image1=$scope.products[0].image1;
	$scope.image2=$scope.products[0].image2;
	$scope.image3=$scope.products[0].image3;
	$scope.image4=$scope.products[0].image4;
	$scope.image5=$scope.products[0].image5;
	$scope.keyword=$scope.products[0].keyword;
	$scope.price=$scope.products[0].price;
	$scope.productlist=$scope.products[0].productlist;
	$scope.size28=$scope.products[0].size28;
	$scope.size32=$scope.products[0].size32;
	$scope.size34=$scope.products[0].size34;
	$scope.size36=$scope.products[0].size36;
	console.log("getid",getid);

	var req=
	{
		url:'/fetchidData_link',
		method:'POST',
		headers:
		{
			'content-Type':"application/json"
		},
		data:
		{
			keyword:$scope.keyword
		}
	}
	$http(req).then(function(response)
	{
		console.log("data catch",response);
		$scope.keywordData=response.data.results1
		console.log("id is send");
	},function()
	{
		console.log("id is not send");
	});

});
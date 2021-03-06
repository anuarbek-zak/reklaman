angular.module('lk_reklamodatel').controller('myBannersCtrl',function(bannerService,$localStorage,myService) {
	
	var vm = this,
	bannerToCopy;

	vm.limit = 5;
	vm.beginIndex =0;
	vm.amount=0;
	vm.banners=[];
	vm.allSelected = false;
	vm.isButtonsActive=0;
	vm.searchText = "";
	vm.company  = $localStorage.company;

	getBannersOfCompany();

	function getBannersOfCompany(){
		bannerService.getBannersOfCompany({id:vm.company.id,from:vm.beginIndex,limit:vm.limit,search:vm.searchText},function(data){
			if(vm.beginIndex==0) vm.banners = [];
			vm.banners = vm.banners.concat(data.banners);
			vm.amount = data.amount;
		});	
	}

	vm.check = function(banner) {
		banner.checked = !banner.checked;
		if(banner.checked) vm.isButtonsActive+=1;
		else vm.isButtonsActive-=1;
		if(vm.isButtonsActive==0) vm.allSelected = false;
		else if(vm.isButtonsActive==vm.banners.length) vm.allSelected = true;
	}

	vm.selectAll = function(bool){
		vm.allSelected=bool;
		if(vm.allSelected) vm.isButtonsActive = vm.banners.length;
		else vm.isButtonsActive = 0;
		for(var i=0;i<vm.banners.length;i++){
			vm.banners[i].checked = bool;
		}

	}

	vm.delete = function(){
		if(vm.isButtonsActive==0) return;
		var bannersToRemove = [];
		vm.isButtonsActive=0;
		for(var i=0;i<vm.banners.length;i++){
			if(vm.banners[i].checked){
				bannersToRemove.push(vm.banners[i].id);
				vm.banners.splice(i,1);
				i--;
			}
		}
		bannerService.delete(bannersToRemove);
	}


	vm.copy  = function(banner){
		if(vm.isButtonsActive==0) return;

		var bannersToCopy = [];
		for(var i=0;i<vm.banners.length;i++){
			if(vm.banners[i].checked){
				bannerToCopy = angular.copy(vm.banners[i]);
				bannerToCopy.name = bannerToCopy.name + "- Копия";
				bannerToCopy.checked = false;
				bannersToCopy.push(bannerToCopy);
			}
		}
		bannerService.copy(bannersToCopy,function(newBanners) {
			for(var i=0;i<newBanners.length;i++){
				vm.banners.unshift(newBanners[i]);
			}

		});
	}

	vm.stop = function(){
		if(vm.isButtonsActive==0) return;

		var bannersToUpdate = [];
		for(var i=0;i<vm.banners.length;i++){
			if(vm.banners[i].checked){
				vm.banners[i].status = {id:3,name:"Не активный"};
				bannersToUpdate.push(vm.banners[i]);
			}
		}
		bannerService.update(bannersToUpdate);
	}

	vm.search = function () {
		myService.search(function() {
			vm.beginIndex = 0;
			getBannersOfCompany();
		});
	}

	vm.getNewData = function(){
		if(vm.banners.length>=vm.amount) return;
		vm.beginIndex=vm.banners.length+1;				
		getBannersOfCompany();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
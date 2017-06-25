angular.module('lk_reklamodatel').controller('myBannersCtrl',function(reklamodatelService,$localStorage,$state,$stateParams) {
	
	var vm = this;

	vm.limit = 5;
	vm.beginIndex =0;
	vm.amount=0;
	vm.banners=[];
	vm.allSelected = false;
	vm.isButtonsActive=0;
	vm.company  = $localStorage.company;

	getBannersOfCompany();

	function getBannersOfCompany(){
		reklamodatelService.getBannersOfCompany(vm.company.id,vm.beginIndex,vm.limit,function(data){
			vm.banners =vm.banners.length==0?data.banners:vm.banners.concat(data.banners);
			vm.amount = data.amount;
		});	
	}

	vm.selectAll = function(bool){
		vm.allSelected=bool;
		for(var i=0;i<vm.banners.length;i++){
			vm.banners[i].checked = bool;
		}
		if(bool) vm.isButtonsActive+=1;
		else vm.isButtonsActive-=1;	
	}

	vm.delete = function(){
		if(vm.isButtonsActive==0) return;
		var bannersToRemove = [];
		vm.isButtonsActive=0;
		for(var i=0;i<vm.banners.length;i++){
			if(vm.banners[i].checked){
				bannersToRemove.push(vm.banners[i]);
				vm.banners.splice(i,1);
				i--;
			}
		}
		reklamodatelService.delete(bannersToRemove);
	}

	vm.check = function(banner) {
		banner.checked = !banner.checked;
		if(banner.checked) vm.isButtonsActive+=1;
		else vm.isButtonsActive-=1;
	}


	vm.copy  = function(banner){
		if(vm.isButtonsActive==0) return;

		var bannersToCopy = [];
		for(var i=0;i<vm.banners.length;i++){
			if(vm.banners[i].checked){
				 bannersToCopy.push(vm.banners[i]);
			}
		}
		reklamodatelService.copy($stateParams.id,bannersToCopy);
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
		reklamodatelService.update(bannersToUpdate);
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
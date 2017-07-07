angular.module('admin_panel').controller('settingsCtrl',function(countriesService,settingsService) {
	
	var vm = this,
	timeout;
	
	vm.modal_limit = 5;
	vm.modal_beginIndex =0;
	vm.limit = 25;
	vm.beginIndex=0;
	vm.amount=0;
	vm.countries=[];
	vm.settings=[];
	vm.currentRoute = {};
	vm.activeButton  = "";
	vm.searchModal = "";
	vm.searchText = "";

	settingsService.getRoutes(function(data){
		vm.routes = data;
		vm.currentRoute = data[0];
	})

	getCountries();
	getSettings();

	countriesService.getManagingCountries(function(data){
		vm.managing_countries = data;		
	});

	function getCountries(){
		countriesService.getCountries({from:vm.modal_beginIndex,limit:vm.modal_limit,search:vm.searchModal},function(data){
			if(vm.modal_beginIndex==0) vm.countries = [];
			vm.countries = vm.countries.concat(data);		
		});
	}
	

	function getSettings(){
		settingsService.getSettings({from:vm.beginIndex,limit:vm.limit,search:vm.searchText},function(data){
         if(vm.beginIndex==0) vm.settings = [];
			vm.settings = vm.settings.concat(data.settings);					
			vm.amount = data.amount;
		});
	}

	vm.searchCountry = function() {
		if (timeout) {  
		    clearTimeout(timeout);
		  }
		  timeout = setTimeout(function() {
		    vm.modal_beginIndex=0;
			getCountries();
		  }, 200);
	}

	vm.search = function() {
		if (timeout) {  
		    clearTimeout(timeout);
		  }
		  timeout = setTimeout(function() {
		    vm.beginIndex=0;
			getSettings();
		  }, 200);
	}

	vm.showUpdatingModal = function(setting){
		vm.showSettingsModal = true;
		vm.currentSetting = setting;
	}

	vm.updateSetting = function(){
		settingsService.updateSetting(vm.currentSetting);
		vm.showSettingsModal=false;
	}


	vm.changeCountryStatus = function(which){
		vm.activeButton = which;
		vm.managing_countries.forEach(function(country){
			country.status = (which=='block') ? {id:1,name:"Заблокирована"} : {id:2,name:"Разблокирована"};
		});
		countriesService.changeStatus(which);
	}

	vm.addToManaging = function(country){
		country.isManaging=true;
		vm.managing_countries.push(country);
		countriesService.addToManaging(country.id);
	}

	vm.removeFromManaging = function(country,index){
		country.isManaging=false;
		vm.managing_countries.splice(vm.managing_countries.indexOf(country),1);
		countriesService.removeFromManaging(country.id);
	}
	
	
	vm.sendRequest = function(){
		settingsService.sendCustomRequest(vm.currentRoute,function(data){
			vm.data = data;	
		});
	}

	vm.getNewDataModal = function(){
		vm.modal_beginIndex = vm.countries.length+1;
		getCountries();
	}

	vm.getNewData = function(){
		if(vm.settings.length>=vm.amount) return;
		vm.beginIndex=vm.settings.length+1;
		getSettings();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
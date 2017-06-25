angular.module('admin_panel').controller('settingsCtrl',function($state,$stateParams,countriesService,settingsService) {
	
	var vm = this;
	
	vm.modal_limit = 5;
	vm.modal_beginIndex =0;
	vm.limit = 25;
	vm.beginIndex=0;
	vm.amount=0;
	vm.countries=[];
	vm.settings=[];
	vm.currentRoute = {};
	vm.activeButton  = "";

	settingsService.getRoutes(function(data){
		vm.routes = data;
		vm.currentRoute = data[0];
	})

	getCountries();
	getSettings();

	function getCountries(){
		countriesService.getCountries(function(data){
			vm.countries = vm.countries.length==0?data:vm.countries.concat(data);		
		},vm.modal_beginIndex,vm.modal_limit);
	}
	

	function getSettings(){
		console.log('set');
		settingsService.getSettings(vm.beginIndex,vm.limit,function(data){
			vm.settings = vm.settings.length==0?data.settings:vm.settings.concat(data.settings);		
			vm.amount = data.amount
		});
	}
	

	countriesService.getManagingCountries(function(data){
		vm.managing_countries = data;		
	});

	vm.showUpdatingModal = function(setting){
		vm.showSettingsModal = true;
		vm.currentSetting = setting;
	}

	vm.updateSetting = function(){
		console.log(vm.currentSetting);
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
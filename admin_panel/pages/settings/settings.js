angular.module('admin_panel').controller('settingsCtrl',function(myService,countriesService,settingsService) {
	
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
	vm.searchModal = "";
	vm.searchText = "";

	settingsService.getRoutes(function(data){
		vm.routes = data;
		vm.currentRoute = data[0];
	})

	getCountries();
	getSettings();

	countriesService.getManagingZones(function(data){
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
		myService.search(function() {
			vm.modal_beginIndex=0;
			getCountries();
		});
	}

	vm.search = function() {
		myService.search(function() {
			vm.beginIndex=0;
			getSettings();
		});
	}

	vm.showUpdatingModal = function(setting){
		vm.showSettingsModal = true;
		vm.currentSetting = setting;
	}

	vm.updateSetting = function(){
		settingsService.updateSetting(vm.currentSetting);
		vm.showSettingsModal=false;
	}


	vm.changeZoneStatus = function(which){
		vm.activeButton = which;
		vm.managing_countries.forEach(function(zone){
			zone.status = (which=='block') ? {id:1,name:"Заблокирована"} : {id:2,name:"Разблокирована"};
		});
		countriesService.changeStatus(which);
	}

	vm.addToManaging = function(zone,which,country_id){

		switch(which){
			case 'country':
			console.log('countr!');
			    var copy = angular.copy(vm.zone);
			    copy.regions = 0;
				vm.managing_countries.push(zone);
				break;
			case 'region':
			console.log('region!');
				vm.managing_countries.forEach(function(country) {
					if(country.id==country_id){
						console.log('country',country);
						country.region++;
					} 
				})
				break;						
		}
		zone.isManaging=true;
		// countriesService.addToManaging(zone.id,which);
	}

	vm.removeFromManaging = function(zone,index){
		zone.isManaging=false;
		vm.managing_countries.splice(vm.managing_countries.indexOf(zone),1);
		countriesService.removeFromManaging(zone.id,which);
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
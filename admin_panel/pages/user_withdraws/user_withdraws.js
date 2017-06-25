angular.module('admin_panel').controller('userWithdrawsCtrl',function(userService,$state,$stateParams,$filter) {
	
	var vm = this;

	vm.limit = 25;
	vm.beginIndex =0;
	vm.amount=0;
	vm.withdrawsStatuses=[];
	vm.withdraws=[];
	vm.filters = {};
	vm.allSelected = false;

	getWithdraws();

	userService.getWithdrawsStatuses(function(data){
		vm.withdrawsStatuses = data;
	})
	
	function getWithdraws(){
		userService.getWithdraws(vm.filters,vm.beginIndex,vm.limit,function(data){
			vm.withdraws =vm.withdraws.length==0?data.withdraws:vm.withdraws.concat(data.withdraws);
			vm.amount = data.amount;
		});	
	}

	vm.selectAll = function(){
		if(vm.allSelected){
			vm.allSelected=false;
			for(var i=0;i<vm.withdraws.length;i++){
				vm.withdraws[i].checked = false;
			}
		}else{
			vm.allSelected=true;
			for(var i=0;i<vm.withdraws.length;i++){
				vm.withdraws[i].checked = true;
			}
		} 
	}

	vm.changeStatus  = function(withdraw,which){
		if(which=='accept') withdraw.status = {id:2,name:"Завершено"};
		else withdraw.status ={id:3,name:"Отклонено"};
		userService.changeWithdraw(withdraw);
	}

	vm.changeStatuses = function(which){
		vm.withdraws.forEach(function(i){
			if(i.checked) vm.changeStatus(i,which);			
		});
	}

	vm.addToFilter = function(key,val){
		if(key) vm.filters[key] = val;
		vm.beginIndex=0;
		getWithdraws();		
	}	

	vm.getNewData = function(){
		if(vm.withdraws.length>=vm.amount) return;
		vm.beginIndex=vm.withdraws.length+1;
		vm.withdraws=[];				
		getWithdraws();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
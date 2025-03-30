function selectPlan(planNumber) {
   
    const plans = document.querySelectorAll('.plan');
    plans.forEach(plan => {
      plan.classList.remove('plan--selected');
    });
  
    
    const selectedPlan = document.getElementById('plan' + planNumber);
    selectedPlan.classList.add('plan--selected');
  }
  
  
  selectPlan(1); 
  
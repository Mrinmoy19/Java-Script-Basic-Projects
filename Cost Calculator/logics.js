
// This function is called when the calculate button is pressed or Enter is pressed.

function calc(){
    let total = Number(document.querySelector('#js-order-value').value);

    if(total < 500){
        document.querySelector('shipping_cost').innerHTML = 50;
        total += 50;  
    }
    else{
        document.querySelector('shipping_cost').innerHTML = 0;
    }

    document.querySelector('total_cost').innerHTML = total; 
}

// This function is called to calculate the live price.

function calc_live(){
    let total = Number(document.querySelector('#js-order-value_live').value);

    if(total < 500){
        document.querySelector('shipping_cost_live').innerHTML = 50;
        total += 50;  
    }
    else{
        document.querySelector('shipping_cost_live').innerHTML = 0;
    }

    document.querySelector('total_cost_live').innerHTML = total; 
}

function handle_cost_input(event){
    if(event.key == 'Enter')
    {
        calc();
    }
}

function handle_cost_input2(event){
    calc_live();
}
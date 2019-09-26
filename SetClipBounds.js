var lastValue=100;


function msg_float(currentValue)
{
	//post("received float " + currentValue + "\n");
	//post("myval " + lastValue + "\n");
	if (currentValue >= lastValue) {
	    outlet(0, 0)
	    //post('old loop')
	} else { 
		post('new loop\n')
		outlet(0, 1)
	} 
	lastValue = currentValue;
	//post('done')
}


 var i,j;
		  for(i=1;i<=1000;i++){
		  	var isPrime=false;

		  	for(j=2;j<i;j++){
		  		if(i%j==0){
		  		break;
		  			}
		  			else{
		  				isPrime=true;
		  			}
		  		}
		  		if(isPrime){
		  			document.write(i+', ')
		  		
		  	}
		  }
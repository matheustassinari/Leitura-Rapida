class WordProcessing {

    constructor(){

        this.textOut;

        this.textSeparator();


    }


     textSeparator(input){

        let text = input;

        console.log(input);
        
        if (input != null){
            this.textOut = text.split(" ");
        } else {

            console.log("Sem Texto");
        }
        
        
     
      
    }

    





}
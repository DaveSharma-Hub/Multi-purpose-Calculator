
const value = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText ='';
                
                break;
            case '=':
               console.log(display.innerText);
                try{
                    if(display.innerText.includes("Math.pow")){
                        display.innerText=eval(display.innerText);
                    }
                    if(display.innerText.includes("∧") ||display.innerText.includes("∨")){
                        var str =display.innerText;
                        while(str.includes('∧')){
                            str= str.replace('∧','&');
                        }
                        while(str.includes('∨')){
                            str= str.replace('∨','||');
                        }
                        console.log(str);
                        console.log(eval(str));
                        display.innerText="";
                        display.innerText = eval(str);
                        break;
                    }

                    if(display.innerText.includes("∫")){
                        try{
                            let array=display.innerText.split(',');
                            var str=array[0].substring(1);
                            var beg=array[1];
                            var end=array[2];
                            console.log(end);
                            display.innerText=integrate(str,beg,end);
                        }catch{
                            display.innerText = "Error Value"
                        }
                        break;
                    }
                    else{
                        display.innerText = eval(display.innerText);
                    }

                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case 'Integral Help':                        
                    display.innerText="For using ∫, type ∫(function),beg,end bounds";
                    break;
            default:
                    display.innerText += e.target.innerText;
                
        }
    });
    document.addEventListener('keydown', function(event) {
        switch(event.keyCode){
            case 'C':
                display.innerText ='';
                
                break;
            case '=':
               console.log(display.innerText);
                try{
                    if(display.innerText.includes("∧") ||display.innerText.includes("∨")){
                        var str =display.innerText;
                        if(display.innerText.includes("∧")){
                            str= str.replace("∧","&&");
                        }
                        if(display.innerText.includes("∨")){
                            str= str.replace("∨","||");
                        }
                        
                        display.innerText = eval(str);
                    }
                   
                    if(display.innerText.includes("∫")){
                        try{
                            let array=display.innerText.split(',');
                            var str=array[0].substring(1);
                            var beg=array[1];
                            var end=array[2];
                            console.log(end);
                            display.innerText=integrate(str,beg,end);
                        }catch{
                            display.innerText = "Error Value"
                        }
                    }
                    else{
                        display.innerText += eval(display.innerText);
                    }

                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                    display.innerText += e.target.innerText;
                
        }
    });

});

function integrate(fun,beg,end){
    var area=0;
    for(i=parseInt(beg);i<parseInt(end);i+=0.001){
        var holder=0.001*valueAt(fun,i);
        area+=holder;
    }
    return area;
}

function valueAt(fun,val){
    try{
        while(fun.includes('x')==true){
            fun=fun.replace("x",val);
        }
        return eval(fun);
    }
    catch{
        display.innerText="ERROR CHECK";
        return -1;
    }    
}
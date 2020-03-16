function printHora(){
    
        let d = new Date()
        let h = d.getHours()
        let m = d.getMinutes()
        let s = d.getSeconds()
        
        let inicioH = "", inicioM = "", inicioS = ""
        
        
           
        if (h<10){
            inicioH = "0"
            //document.body.innerHTML = "0"+h+ ":"+ m+ ":"+s
        }
        
        if (m<10){
            //document.body.innerHTML = h+ ":0"+ m+ ":"+s
            inicioM = "0"
        } 
        
        if (s<10){
            inicioS = "0"
            //document.body.innerHTML = h+ ":"+ m+ ":0"+s
            
        }
        
        document.body.innerHTML = inicioH + h + ":" + inicioM + m + ":"+ inicioS + s
        
        }
        
        
        
        
    setInterval(printHora, 1000)

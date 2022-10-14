const form = document.getElementById('get');

form.addEventListener('submit',(e) =>{
   e.preventDefault();
    
      var sensor_type = document.getElementById('sensor_type').value;
      var i = document.getElementById('sensor_id').value;

      if(sensor_type && i){
      switch(sensor_type){
         case 'flow-transducer':
                                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                                .then(response => response.json())
                                .then(data => appendData(data))
                                .catch(err => {console.log('err: ', err)});
                                break;

        case 'level-transducer' :
                                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                                .then(response => response.json())
                                .then(data => appendData(data))
                                .catch(err => {console.log('err: ', err)});
                                break;

        case 'pressure-transducer':
                                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                                .then(response => response.json())
                                .then(data => appendData(data))
                                .catch(err => {console.log('err: ', err)});
                             break;

        case 'temperature-transducer' :
                                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                                .then(response => response.json())
                                .then(data => appendData(data))
                                .catch(err => {console.log('err: ', err)});
                                break; 

            default : document.querySelector('#show').innerHTML = "Not found data";
        }
        
        function appendData(data){
                var UL = document.getElementById("show");{
                var myLi = document.createElement("li");
                myLi.innerText = ` Name: ${data[i].name}, Type: ${data[i].type},  Unit: ${data[i].unit},  Range: ${data[i].range},  Plant-site: ${data[i]["plant-site"]},  Value: ${data[i].value} `;
                UL.appendChild(myLi);  
                }  
                
            }
        }
        else{
            switch(sensor_type){
                case 'flow-transducer':
                                       fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                                       .then(response => response.json())
                                       .then(data => appendData(data))
                                       .catch(err => {console.log('err: ', err)});
                                       break;
       
               case 'level-transducer' :
                                       fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                                       .then(response => response.json())
                                       .then(data => appendData(data))
                                       .catch(err => {console.log('err: ', err)});
                                       break;
       
               case 'pressure-transducer':
                                       fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                                       .then(response => response.json())
                                       .then(data => appendData(data))
                                       .catch(err => {console.log('err: ', err)});
                                    break;
       
               case 'temperature-transducer' :
                                       fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                                       .then(response => response.json())
                                       .then(data => appendData(data))
                                       .catch(err => {console.log('err: ', err)});
                                       break; 
       
                   default : document.querySelector('#show').innerHTML = "Not found data";
               }
               
               function appendData(data){
                       var UL = document.getElementById("show");{
                       var myLi = document.createElement("li");
                       myLi.innerText = `"1" Name:${data[0].name}, Type:${data[0].type},  Unit:${data[0].unit},  Range:${data[0].range},  Plant-site:${data[0]["plant-site"]},  Value:${data[0].value}

                                         "2" Name:${data[1].name}, Type:${data[1].type},  Unit:${data[1].unit},  Range:${data[1].range},  Plant-site:${data[1]["plant-site"]},  Value:${data[1].value} 
                                         
                                         "3" Name:${data[2].name}, Type:${data[2].type},  Unit:${data[2].unit},  Range:${data[2].range},  Plant-site:${data[2]["plant-site"]},  Value:${data[2].value} ` ;
                       UL.appendChild(myLi);  
                       }  
                       
                   }
        }
});
   

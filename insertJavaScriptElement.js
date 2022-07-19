console.log('this challenge is based on how we can push any element into the array by pushing each element further ')


function addValue() {
    let arr=[20,23,56,45,48,44]
    let arr2=[20,23,56,45,48,44]
    let element=document.getElementById("element").value;
     element=parseInt(element)
    
    let position=document.getElementById('position').value;
    position=parseInt(position)
    for (let i = arr.length-1; i >=0; i--) {

        if (i>=position) {
          arr[i+1]=arr[i]
            if (i==position) {
               arr[i]=element
            }
        }
     
         
     }
     console.log(arr)
}


//we can also do this without building logic we can do this withs plice method



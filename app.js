let btngroup=document.querySelectorAll(".btnlink");
 
 
 for(let i=0; i<btngroup.length;i++){

btngroup[i].addEventListener('click',function(){


    let tabname=this.dataset.tab;
    let tabcontent=document.getElementById(tabname);

    let tabcontentmain=document.querySelectorAll(".tabcontent");

    for(let k=0; k <tabcontentmain.length; k++){


        tabcontentmain[k].style.display="none";
    }


    tabcontent.style.display="block";

    

})

 }

 
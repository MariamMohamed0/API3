(async function showData(){
    var x=await fetch('https://jsonplaceholder.typicode.com/photos');
    var z=await x.json();
    var myText="";
            for(var i=0; i<z.length; i++){
                var cartoona=`<div class="col-md-4 text-center mb-5">
                                <img src="${z[i].url}" alt="" class="img-fluid"  style="height:300px "></img>
                                <h4>${z[i].title}</h4>
                                <h6>${z[i].id}</h6>
                            </div>`;
                myText=myText+cartoona;
            }
            document.querySelector(".test").innerHTML=myText;
})();
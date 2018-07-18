function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
     }
   };
   xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
  var data1 = JSON.parse(text);
  console.log(data.basics);
  details(data.basics);
  career(data1.CareerObjective);
})
var child = document.querySelector(".child1");
function details(det){
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);
  var phno = document.createElement("h3");
  phno.textContent = det.phno;
  child.appendChild(phno);
  var email = document.createElement("a");
  email.href = "mailto:manishachundru7999@gmail.com";
  email.textContent = det.email;
  child.appendChild(email);
  var Address1 = document.createElement("h3");
  Address1.textContent = "Address";
  child.appendChild(Address1);
  var hr = document.createElement("hr");
  child.appendChild(hr);
  var Address = document.createElement("h3");
  Address.textContent = det.Address;
  child.appendChild(Address);
  }
  var child2 = document.querySelector(".child2");
  function career(careerinfo){
    var head = document.createElement("h3");
    head.textContent = "Career Objective";
    child2.appendChild(head);
    var hr = document.createElement("hr");
    child2.appendChild(hr);
    var info1 = document.createElement("a");
    info1.textContent = careerinfo.info;
    child2.appendChild(info1);


  }

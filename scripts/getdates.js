function printYear(){    
  const currentYear = new Date();
  return currentYear.getFullYear();
}

document.getElementById("currentYear").innerHTML = printYear();

function printLastModefied(){
  const lastModefied = new Date();
  let month = lastModefied.getMonth();
  let day = lastModefied.getDate(); 
  let year = lastModefied.getFullYear();
  let timeFormated = lastModefied.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12:true});
  const dateFormated = month + "/" + day + "/" + year + " " + timeFormated;
  
  return dateFormated;
}

document.getElementById("lastModified").innerHTML = printLastModefied();
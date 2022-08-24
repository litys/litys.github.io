let contentTarget = document.getElementById("imageUpload");

contentTarget.onpaste = (e) => {
   let cbPayload = [...(e.clipboardData || e.originalEvent.clipboardData).items];
       cbPayload = cbPayload.filter(i => /image/.test(i.type));
   
   if(!cbPayload.length || cbPayload.length === 0) return false;
   
   let reader = new FileReader();
   reader.onload = (e) => {
     contentTarget.innerHTML = `<img src="${e.target.result}">`;
     document.getElementById('result').value = e.target.result;
   }
   reader.readAsDataURL(cbPayload[0].getAsFile());
};
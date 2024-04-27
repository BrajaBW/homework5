let register = []
function simpan(){
    const namein =  document.getElementById("inputnama").value
    const umurin =  document.getElementById("inputumur").value
    const uang =document.getElementById("inputuang").value
   register.push({inputnama: namein,inputumur :umurin, inputuang: uang})

if (namein.length < 10 ){
    alert("Nama Minimal 10 Huruf ");
    return namein  
}else if (umurin <= 25){
    alert("Umur Belum Cukup harus di atas 25");  
    return umurin  
}else if (uang <= 100000){
    alert("uang saku minimal 100000");
    return uang
}else if (uang > 1000000){
    alert("uang saku maksimal 1000000");
    return uang  
}else {
    alert("data tersimpan")
}

   let tablebody = document.querySelector("#registrasi tbody")
   let tabel = tablebody.insertRow()
   let tabel1 = tabel.insertCell(0)
   let tabel2 = tabel.insertCell(1)
   let tabel3 = tabel.insertCell(2)
   tabel1.textContent = namein
   tabel2.textContent = umurin
   tabel3.textContent = uang 
   
  resume()
  document.getElementById("inputnama").value= ""
   document.getElementById("inputumur").value= ""
   document.getElementById("inputuang").value= ""
}

function resume (){
    let totalUang = 0
    let totalUmur = 0
    let hasilarray = register
 
    for (let i = 0; i < hasilarray.length; i++) {
        totalUang += parseInt(hasilarray[i].inputuang) 
        totalUmur += parseInt(hasilarray[i].inputumur)
    }
    let rataUang = totalUang / hasilarray.length;
    let rataUmur = totalUmur / hasilarray.length;
    document.getElementById("resume").innerHTML = `Jumlah uang rata-rata: ${rataUang} dengan rata-rata umur: ${rataUmur}`;
}







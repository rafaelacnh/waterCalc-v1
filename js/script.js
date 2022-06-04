let waterMl = 35

function calculate() {
    let weightKg = document.getElementById("weightKg").value;
    totalWater = Number(parseFloat(weightKg * waterMl))
    document.getElementById("res").innerHTML = 
    `Você precisa ingerir ${totalWater}ml de água por dia!`
  }


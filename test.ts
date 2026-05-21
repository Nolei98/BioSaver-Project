const test = async () => {
  const r = await fetch("http://localhost:3000/api/simulate", { 
    method: "POST", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({species:"Onça", biome:"Amazônia", currentPop:"50", targetPop:"200", carryingCapacity:"500", growthRate:"0.15"}) 
  });
  console.log(await r.text());
};
test();

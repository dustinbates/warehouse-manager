// function testClick(){
//     console.log("Click works!")
// }

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]



function drawPackages(array){
    let packageElement = document.getElementById("packages")
    let packageTemplate = ""
    array.forEach(package => {
        
        packageTemplate += `
            <div class="card">
                <p>Priority Level: ${package.priorityLevel} </p>
                <p>Fragility: ${package.isFragile} </p>
                <p>Weight: ${package.weight} </p>
                <p>Recipient: ${package.to} </p>
                <p>Tracking Number: ${package.trackingNumber} </p>
            </div>
        `
    })

    packageElement.innerHTML = packageTemplate
}

function filterLightPackages(){
    const lightPackages = packages.filter(p => p.weight <= 2);
    console.log(lightPackages);
    
    drawPackages(lightPackages)
}

function filterHeavyPackages(){
    const heavyPackages = packages.filter(p => p.weight > 2);
    drawPackages(heavyPackages);
}

function filterFragilePackages(){
    const fragilePackages = packages.filter(p => p.isFragile == true);
    drawPackages(fragilePackages);
}

// drawPackages(packages)
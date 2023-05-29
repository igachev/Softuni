const platforms = [
   {label:'-------',value:'' ,selected:false },
    {label:'PC', value:'PC',selected:false},
    {label:'Nintendo',value:'Nintendo',selected:false},
    {label:'PS4',value:'PS4',selected:false},
    {label:'PS5',value:'PS5',selected:false},
    {label:'XBOX',value:'XBOX',selected:false}                    
]

function displayPlatform(platform) {
    const updatedPlatforms = platforms.map((pl) =>
     pl.value == platform 
     ? {...pl,selected:true} 
     : pl);

     return updatedPlatforms
}

module.exports = displayPlatform
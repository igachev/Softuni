const categories = [
    {value:'estate',label:'Real Estate' ,selected:false },
    {value:'vehicles', label:'Vehicles',selected:false},
    {value:'furniture',label:'Furniture',selected:false},
    {value:'electronics',label:'Electronics',selected:false},
    {value:'other',label:'Other',selected:false}
     
]

function displayCategory(category) {
    
const updatedCategories = categories.map((c) => 
    c.value == category
    ? {...c , selected: true}
    : c);

return updatedCategories
}

module.exports = displayCategory
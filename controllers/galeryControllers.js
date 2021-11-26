let galery = [

    { ruta: 'japang.jpg', title: 'Tokyo',country: "Japan" },
    { ruta: 'canada.jpg', title: 'Vancouver',country: "Canada" },
    { ruta: 'norway.jpg', title: 'Oslo',country: "Norway" },
    { ruta: 'Stockholm.jpg', title: 'Stockholm',country:"Sweden" },
    { ruta: 'copenhagen.jpg', title: 'Copenhagen',country: "Denmark" },
    { ruta: 'helsinki.jpg', title: 'Helsinki', country:"Finland" },
    { ruta: 'hamburg.jpg', title: 'Hamburg',country: "Germany" },
    { ruta: 'zurich.jpg', title: 'Zurich',country: "Switzerland" },
    { ruta: 'seul.jpg', title: 'Seoul', country:"South Korea" },
    { ruta: 'paris.jpg', title: 'Paris',country: "France" },
    { ruta: 'newyork.jpg', title: 'New York', country: "EE.UU" },
    { ruta: 'venecia.jpg', title: 'Venice',country: "Italy" },
    { ruta: 'boston.jpg', title: 'Boston',country: "EE.UU" },
    { ruta: 'amsterdam.jpg', title: 'Amsterdam',country: "Holanda" },
    { ruta: 'dublin.jpg', title: 'Dublin',country: "Ireland" }

]

const galeryControllers = {
    getGalery:(req,res)=>{
        res.json({response:{galery}})   
    }
}

module.exports = galeryControllers
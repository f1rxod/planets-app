var internal_struc = document.querySelector('.structure')
var overview = document.querySelector('.overview')
var image_earth = document.querySelector('.planet_img')
var surface = document.querySelector('.surface')
var desc = document.querySelector('.desv')
internal_struc.addEventListener('click', function(){
    overview.classList.remove('active')
    internal_struc.classList.add('active')
    surface.classList.remove('active')
    desc.innerHTML="It's made of iron, nickel, and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium, and potassium."
})
overview.addEventListener('click', function(){
    overview.classList.add('active')
    internal_struc.classList.remove('active')
    surface.classList.remove('active')
    desc.innerHTML='Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, only being larger than Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere (less than 1% that of Earth`s), and has a crust primarily composed of elements similar to Earth`s crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes and polar ice caps. It has two small and irregularly shaped moons, Phobos and Deimos.'
})
surface.addEventListener('click', function(){
    overview.classList.remove('active')
    internal_struc.classList.remove('active')
    surface.classList.add('active')
    desc.innerHTML="NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars. Perseverance rover – the largest, most advanced rover NASA has sent to another world – touched down on Mars on Feb. 18, 2021, after a 203-day journey traversing 293 million miles (472 million kilometers). The Ingenuity helicopter rode to Mars attached to the belly of Perseverance."
})
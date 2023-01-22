var internal_struc = document.querySelector('.structure')
var overview = document.querySelector('.overview')
var image_earth = document.querySelector('.planet_img')
var surface = document.querySelector('.surface')
var desc = document.querySelector('.desv')
internal_struc.addEventListener('click', function(){
    image_earth.setAttribute('src','internal_structure.png')
    overview.classList.remove('active')
    internal_struc.classList.add('active')
    surface.classList.remove('active')
    desc.innerHTML="Above the core and below the crust lies Venus’s mantle, making up the bulk of the planet’s volume. Despite the high surface temperatures, temperatures within the mantle are likely similar to those in Earth’s mantle. Even though a planetary mantle is composed of solid rock, the material there can slowly creep or flow, just as glacial ice does, allowing sweeping convective motions to take place. Convection is a great equalizer of the temperatures of planetary interiors. Similar to heat production within Earth, heat within Venus is thought to be generated by the decay of natural radioactive materials. This heat is transported to the surface by convection. If temperatures deep within Venus were substantially higher than those within Earth, the viscosity of the rocks in the mantle would drop sharply, speeding convection and removing the heat more rapidly. Therefore, the deep interiors of Venus and Earth are not expected to differ dramatically in temperature."
})
overview.addEventListener('click', function(){
    image_earth.setAttribute('src','venus.png')
    overview.classList.add('active')
    internal_struc.classList.remove('active')
    surface.classList.remove('active')
    desc.innerHTML='Venus is the second largest terrestrial object of the Solar System. It has a surface gravity slightly lower than on Earth and has a very weak induced magnetosphere. The atmosphere of Venus, mainly consists of carbon dioxide, and is the densest and hottest of the four terrestrial planets at the surface. With an atmospheric pressure at the planets surface of about 92 times the sea level pressure of Earth and a mean temperature of 737 K (464 °C; 867 °F), the carbon dioxide gas at Venuss surface is in the supercritical phase of matter. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, making it the planet with the highest albedo in the Solar System. It may have had water oceans in the past, but after these evaporated the temperature rose under a runaway greenhouse effect. The possibility of life on Venus has long been a topic of speculation but convincing evidence has yet to be found.'
})
surface.addEventListener('click', function(){
    image_earth.setAttribute('src','interior.png')
    overview.classList.remove('active')
    internal_struc.classList.remove('active')
    surface.classList.add('active')
    desc.innerHTML="Planet Venus' internal structure is made of Its average density (5.25g/cm3) indicates that Venus, like the Earth, must be made up of silicate rocks, and be a differentiated planet. Despite the lack of seismological data, a model of the internal structure based on gravimetric data has been proposed. This suggests that Venus has a core of 2900km radius that has two parts: an external core made of liquid iron and nickel an internal core made of solid iron and nickel Up to now we have not measured a magnetic dipole field on Venus. This could be due to its slow rotation or major changes in its past, but it may tell us things about its internal structure. Perhaps Venus does not have a liquid core."
})
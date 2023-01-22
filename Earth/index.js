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
    desc.innerHTML="The internal structure of Earth is the solid portion of the Earth, excluding its atmosphere and hydrosphere. The structure consists of an outer silicate solid crust, a highly viscous asthenosphere and solid mantle, a liquid outer core whose flow generates the Earth's magnetic field, and a solid inner core."
})
overview.addEventListener('click', function(){
    image_earth.setAttribute('src','earth.png')
    overview.classList.add('active')
    internal_struc.classList.remove('active')
    surface.classList.remove('active')
    desc.innerHTML='Third planet from the sun and the only known planet to harbor life. About 29.2% of Earth`s surface is land with remaining 70.8% is covered with water. Earth`s distance from the Sun physical properties and geological history have allowed life to evolve and thrive'
})
surface.addEventListener('click', function(){
    image_earth.setAttribute('src','interior.png')
    overview.classList.remove('active')
    internal_struc.classList.remove('active')
    surface.classList.add('active')
    desc.innerHTML="The Earth's surface is a dynamic boundary at the interface of the atmosphere and lithosphere, where global topography develops by the interaction of tectonic and climate processes. At the surface, rock is transformed to sediment, then transported and deposited, primarily from the continents to the oceans."
})
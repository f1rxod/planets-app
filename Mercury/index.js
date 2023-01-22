var internal_struc = document.querySelector('.structure')
var overview = document.querySelector('.overview')
var image_earth = document.querySelector('.planet_img')
var surface = document.querySelector('.surface')
var desc = document.querySelector('.desv')
internal_struc.addEventListener('click', function(){
    image_earth.setAttribute('src','internal_structure.svg.png')
    image_earth.setAttribute('style', '')
    overview.classList.remove('active')
    internal_struc.classList.add('active')
    surface.classList.remove('active')
    desc.innerHTML="It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85 percent of the planet's radius. There is evidence that it is partly molten or liquid. Mercury's outer shell, comparable to Earth's outer shell (called the mantle and crust), is only about 400 kilometers (250 miles) thick."
})
overview.addEventListener('click', function(){
    image_earth.setAttribute('style', '')
    image_earth.setAttribute('src','mercury.png')
    overview.classList.add('active')
    internal_struc.classList.remove('active')
    surface.classList.remove('active')
    desc.innerHTML='Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς).'
})
surface.addEventListener('click', function(){
    image_earth.setAttribute('src','interior.png')
    image_earth.setAttribute('style', 'width:100%')
    overview.classList.remove('active')
    internal_struc.classList.remove('active')
    surface.classList.add('active')
    desc.innerHTML="Because Mercury has a striking cluster of unique characteristics (Chapter 1), the planet is in a position to contribute important inputs for models of Solar System formation, evolution, and structure. Two of the most fundamental problems in planetary science, the formation of the solar system and the dynamo generation of magnetic fields in planetary interiors, can be addressed by studying Mercury’s deep interior. Yet, Mercury is the terrestrial planet for which we have the most limited knowledge of geology, geophysics, and geochemistry, and thus the least direct knowledge of the interior. We do know that the planet is the smallest in mass, closest to the sun, and greatest in mean uncompressed density (5.3 g/cm3 at 10 kbar) among the terrestrial planets. In all these ways, Mercury thus has a unique end-member status, allowing it to provide previously unavailable, yet essential, inputs for understanding the solar system. "
})
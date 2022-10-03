function newImage(link, left, bottom ) {
    let character = document.createElement('img')
    character.src = link 
    character.style.position = 'fixed'
    character.style.left = left + 'px'
    character.style.bottom = bottom + 'px'
    document.body.append(character)
    return character 
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(link, left, bottom) {
    let character = newImage(link, left, bottom)

    character.addEventListener('click', function() {
        character.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/staff.png', 600, 100)
newItem('assets/sheild.png', 165, 185)
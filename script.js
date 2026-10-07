const canvas = document.querySelector("#canvas-1")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight
console.log(canvas.width,canvas.height)

class Particle {
  constructor(x,y,directionX,directionY,size,color){
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.color = color
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x,this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color 
    ctx.fill()
  }
  update(){
    if(this.x >= canvas.width || this.x <= 0) {
      this.directionX = -this.directionX
    } else if(this.y >= canvas.height || this.y <= 0) {
      this.directionY = -this.directionY
    }
    this.x += this.directionX
    this.y += this.directionY
    this.draw()
  }
}
// console.log(new Particle(40,10,1,1,54,'#000'))

let particlesArray;

function fillParticlesArray(){
  particlesArray = []

  const particlesNumber = (canvas.height * canvas.width) / 9000

  for(let i = 0; i < particlesNumber; i++) {

    const size = Math.random() * 2 + 1 // 1 à 3[

    // canvas.innerWidth - 20
    // 1000 - 20 = 980
    // [0,980[ => [10, 990[
    const x = Math.random() * (canvas.width - 20) + 10
    const y = Math.random() * (canvas.height - 20) + 10

    const directionX = randomVelocity()
    const directionY = randomVelocity()

    particlesArray.push(new Particle(x,y,directionX,directionY, size, "#f1f1f1"))
  }
  // console.log(particlesArray)
}
fillParticlesArray()


function randomVelocity(){
  const speed = Math.random() * 1 + 0.5 // [0.5,1.5[
  return Math.random() < 0.5 ? speed : -speed
}

window.addEventListener("resize", handleResize)

function handleResize(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  fillParticlesArray()
}


function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height)

  for(let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
  }

  // JS (event loop + RAF callbacks) → style/layout → paint → composite → 🖼️ affichage
  connect()
  requestAnimationFrame(animate)
}
animate()

function connect() {
  const maxDistance = 135

  for(let i = 0; i < particlesArray.length; i++) {
    const p1 = particlesArray[i]

    for(let j = i + 1; j < particlesArray.length; j++){
      const p2 = particlesArray[j]

      if(Math.abs(p1.x - p2.x) > maxDistance || Math.abs(p1.y - p2.y) > maxDistance) {
        continue
      }


      const deltaX = p1.x - p2.x 
      const deltaY = p1.y - p2.y 
      const hypothenuseSq = deltaX * deltaX + deltaY * deltaY

      const maxDistanceSq = maxDistance * maxDistance

      if(hypothenuseSq < maxDistanceSq) {
        const opacity = 1 - hypothenuseSq / maxDistanceSq
        ctx.strokeStyle = `rgba(240,240,240, ${opacity})`
        ctx.lineWidth = 0.4
        ctx.beginPath()
        ctx.moveTo(p1.x,p1.y)
        ctx.lineTo(p2.x,p2.y)
        ctx.stroke()
      }

    }
  }
}


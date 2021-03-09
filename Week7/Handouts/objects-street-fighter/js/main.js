//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods
class StreetFighter {
  constructor(name, health, power, speed, stamina, ultimate){
    this.name = name
    this.health = health
    this.speed = speed
    this.stamina = stamina
    this.ultimate = ultimate
  }

  description(){
    return `${this.name} is a StreetFighter`
  }

  ultimateMove(){
    return `${this.name}'s ultimate move is ${this.ultimate}`
  }

  stats(){
    return `${this.names}'s stats are ${this.power} power, ${this.speed} speed, ${this.health} health, and ${this.stamina} stamina!`
  }
}

//Add new characters
const ryu = new StreetFighter('Ryu', 200, 55, 70, 30, 'HADOKEN')
const chunLi = new StreetFighter('ChunLi', 180, 60, 65, 45, 'Hyakuresukyaku')
const akuma = new StreetFighter('Ryu', 200, 65, 40, 40, 'GoHadoken')

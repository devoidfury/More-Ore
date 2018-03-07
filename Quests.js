let Quest = function(obj) {
  this.name = obj.name
  this.pic = obj.pic
  this.functionName = obj.name.replace(/ /g,'')
  this.timesCompleted = 0
  this.desc = obj.desc
  this.locked = obj.locked
  this.img = obj.img
  this.completionTime = obj.completionTime
  this.completionTimeTxt = obj.completionTimeTxt
  this.xpGain = obj.xpGain
  this.firstClearGemGain = obj.firstClearGemGain

  Game.quests.push(this)
}

let quests  = [
  {
    name: 'Abandoned Mineshaft',
    pic: 'nothing',
    locked: 0,
    desc: 'Traverse into an abandoned mineshaft for hopes of greater rewards',
    img: 'wip.png',
    completionTime: 5 * 60 * 1000,
    completionTimeTxt: '5 minutes',
    xpGain: 40,
    firstClearGemGain: 1
  },
  {
    name: 'test1',
    locked: 1
  },
  {
    name: 'test2',
    locked: 1
  },
  {
    name: 'test3',
    locked: 1
  },
  {
    name: 'test4',
    locked: 1
  },
  {
    name: 'test5',
    locked: 1
  },
]

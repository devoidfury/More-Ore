'use strict';var Achievement=function(a){this.name=a.name,this.desc=a.desc,this.won=a.won||0,a.reward&&(this.reward=a.reward),Game.achievements.push(this)},achievements=[{name:'Elementary',desc:'Have a total of 10 schools'},{name:'Graduation',desc:'Have a total of 20 schools'},{name:'GED',desc:'Have a total of 50 schools'},{name:'Ivy League',desc:'Have a total of 100 schools'},{name:'Newbie Miner',desc:'Break your first rock'},{name:'Novice Miner',desc:'Break 10 rocks'},{name:'Intermediate Miner',desc:'Break 25 rocks'},{name:'Advanced Miner',desc:'Break 50 rocks'},{name:'Combo Pleb',desc:'Reach 5 hit combo',reward:{txt:'weak-hit multiplier +1',increaseWeakHitMulti:1}},{name:'Combo Squire',desc:'Reach 15 hit combo',reward:{txt:'weak-hit multiplier +1',increaseWeakHitMulti:1}},{name:'Combo Knight',desc:'Reach 40 hit combo',reward:{txt:'weak-hit multiplier +1',increaseWeakHitMulti:1}},{name:'Combo King',desc:'Reach 100 hit combo',reward:{txt:'weak-hit multiplier +2',increaseWeakHitMulti:2}},{name:'Combo Master',desc:'Reach 300 hit combo',reward:{txt:'weak-hit multiplier +2',increaseWeakHitMulti:2}},{name:'Combo Devil',desc:'Reach 666 hit combo',reward:{txt:'weak-hit multiplier +3',increaseWeakHitMulti:3}},{name:'Combo God',desc:'Reach 777 hit combo',reward:{txt:'weak-hit multiplier +4',increaseWeakHitMulti:4}},{name:'Combo Saiyan',desc:'Reach 1000 hit combo',reward:{txt:'weak-hit multiplier +5',increaseWeakHitMulti:5}},{name:'Combo Saitama',desc:'Reach 10000 hit combo',reward:{txt:'weak-hit multiplier +5 (LAST ONE FOR NOW LOL)',increaseWeakHitMulti:5}},{name:'Still a Baby',desc:'Deal more than 1,000,000 in one hit'},{name:'Getting There',desc:'Deal more than 1,000,000,000 in one hit'},{name:'Big Boy',desc:'Deal more than 1,000,000,000,000 in one hit'},{name:'401k',desc:'Earn 401,000 ores per second'},{name:'Retirement Plan',desc:'Earn 5,000,000 OpS'},{name:'Hedge Fund',desc:'Earn 1,000,000,000 OpS'},{name:'Blacksmiths Apprentice',desc:'Refine for your first time'},{name:'Hulk Smash',desc:'Use the skill Heavy Smash for the first time'},{name:'Roided Out',desc:'Use the skill Roid Rage for the first time'},{name:'Beep Boop',desc:'Use the skill Auto-Miner 5000 for the first time'},{name:'Roided Smash',desc:'Use the skill Heavy Smash while Roid Rage is active'}];
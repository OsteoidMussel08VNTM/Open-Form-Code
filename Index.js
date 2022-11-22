import {world} from 'mojang-minecraft';/*(1.19.30↓)*/
/*Open with Tag*/

const tagmenu = `abc:cba`
world.events.tick.subscribe(() => {
     for (let player of world.getPlayers()) {
          if (player.hasTag(tagmenu)) {
               menuname(player);
               player.runCommand(`tag @s remove ${tagmenu}`)
               }
          }
     }
)
/*Open with Item Use*/

const itemid = 'minecraft:stick'
world.events.beforeItemUse.subscribe((eventData) => {
    let item = eventData.item;
    let player = eventData.source;
  
    if (item.id == itemid) {
    	Menuname(player);
    }});


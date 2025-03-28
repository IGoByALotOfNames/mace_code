/*
	tick onClose onplayerJoin onplayerLeave onplayerJump onRespawnRequest
	playerCommand onplayerChat onplayerChangeblock onplayerDropI\u{74}em
	onplayerpickedUpI\u{74}em onplayerSelectInventorySlot onblockStand onplayerCraft
	onplayerAttemptOpenChest onplayerOpenedChest onplayerMoveI\u{74}emOutOfInventory
	onplayerMoveInvenI\u{74}em onplayerMoveI\u{74}emIntoIdxs onplayerSwapInvenSlots
	onplayerMoveInvenI\u{74}emWi\u{74}hAmt onplayerAttemptAltAction onplayerAltAction
	onplayerClick onClientOptionUpdated onInventoryUpdated onChestUpdated
	onWorldChangeblock onCreatebloxdMeshEnt\u{69}ty onEnt\u{69}tyCollision
	onplayerAttemptSpawnMob onWorldAttemptSpawnMob onplayerSpawnMob
	onWorldSpawnMob onMobDespawned onplayerAttack onplayerDamagingOtherplayer
	onplayerDamagingMob onplayerKilledOtherplayer onMobKilledplayer
	onplayerKilledMob onplayerpotionEffect onplayerDamagingMeshEnt\u{69}ty
	onplayerbreakMeshEnt\u{69}ty onplayerUsedThrowable onplayerThrowableHi\u{74}Terrain
	onTouchscreenActionbutton onTa\u{73}kClaimed onChunkLoaded onplayerRequestChunk
	onI\u{74}emDropCreated onplayerStartChargingI\u{74}em onplayerFinishChargingI\u{74}em
	doperiod\u{69}cSave

	To use a callback, just a\u{73}sign a function to i\u{74} in the world code!b
	tick = () => {}			 or			 function tick() {}
*/

cnt = 0
cooldown=[]
cooldownL=[]
cooldownF=[]
cooldownU=[]
heights=[]
function tick1(){
cnt+=1
players=api.getPlayerIds()
for (i=0;i<players.length;i++){
	new_pos = api.getPosi\u{74}ion(players[i])[1]
	if ( new_pos > heights[players[i]]){
		/*api.broadca\u{73}tMessage(new_pos.toString())*/
		heights[players[i]] = new_pos
	}
	if (cnt % 10 === 0){
	if ((cooldown[players[i]] > 0)){
		cooldown[players[i]]-=1
		/* api.sendMessage(players[i],cooldown[players[i]].toString()) */
	}
	if ((cooldownL[players[i]] > 0)){
		cooldownL[players[i]]-=1
		 /* api.sendMessage(players[i],cooldownL[players[i]].toString()) */
	}
	
	

	}
	if (cooldownU[players[i]] > 0){
		cooldownU[players[i]]-=1
		/*api.applyEffect(players[i], "Slowness", null, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:1})*/
		if (api.getBlockTypesPlayerStandingOn(players[i]).length > 0){
            /*api.broadcastMessage(api.getBlockTypesPlayerStandingOn(players[i]).length.toString())*/
			
			api.applyImpulse(players[i], 0,-20,0)
			
	
		}
	}/*else{
        api.applyEffect(players[i], "Slowness", null, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:2})
    }*/
	/*if (cnt % 1===0){
		if ((cooldownF[players[i]] > 0)){
		cooldownF[players[i]]-=1
		cam_info = api.getplayerFacingInfo(players[i])
		api.setVeloci\u{74}y(players[i], cam_info.dir[0]*C*(cooldownF[players[i]]+1),cam_info.dir[1]*C*(cooldownF[players[i]]+1),cam_info.dir[2]*C*(cooldownF[players[i]]+1))
		/*api.applyImpulse(players[i], cam_info.dir[0]*C,cam_info.dir[1]*C,cam_info.dir[2]*C)*/
		 /* api.sendMessage(players[i],cooldownL[players[i]].toString()) */
		/*}
	}*/
	
	
}

}

function soun(id){
api.playSound(id, "submachine_tail_only_shot_01",1, 1)
}
function onPlayerKilledOtherPlayer1(id,id1){
	slotidx= api.getSelectedInventorySlotI(id)
	i\u{74}m = api.get\u{49}temSlot(id, slotidx)
	pos_1 = api.getposi\u{74}ion(id1)
	if (i\u{74}m.name==="Gold Spade"){

		api.forceRespawn(id1, pos1[0], pos1[1], pos1[2])
		api.playSound(id, "ca\u{73}hRegister",1, 1)
		api.playSound(id1, "ca\u{73}hRegister",1, 1)
		p3(pos1[0], pos1[1], pos1[2])
		

	}else{
		for (i=0;i<tools.length;i++){
			if (tools[i][0]==="Moonstone Axe"){
			api.set\u{49}temSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Mace", "customDescription": "The higher you fall, the more the damage. Enchantment: Wind burst"})
			}else if (tools[i][0]==="Stone Hoe"){
				api.set\u{49}temSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Lifesteal Scynth", "customDescription": "Steal Hearts from others by attacking them!"})
			}else if (tools[i][0]==="Gold Spade"){
				api.set\u{49}temSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "Extra Life", "customDescription": "Wi\u{74}h a Twist!"})
			}else{
				api.set\u{49}temSlot(id, i, tools[i][0],tools[i][1])
			}
		}
	api.set\u{49}temSlot(id, 46, "Diamond Helmet", null);
	api.set\u{49}temSlot(id, 47, "Diamond Chestplate", null);
	api.set\u{49}temSlot(id, 48, "Diamond Gauntlets", null);
	api.set\u{49}temSlot(id, 49, "Diamond Leggings", null);
	api.set\u{49}temSlot(id, 50, "Diamond boots", null);
	
}

	
	return "keepInventory"
}
function onPlayerDamagingOtherPlayer1(id, id1, dmg, i\u{74}em){
	tth = pa\u{72}seInt(heights[id]-api.getPosi\u{74}ion(id)[1])
	poser = api.getPosi\u{74}ion(id1)
	if (i\u{74}em==="Moonstone Axe" && cooldown[id] === 0 && tth>1.5){
		api.setVeloci\u{74}y(id, 0,10,0)
		api.setVeloci\u{74}y(id, 0,18,0)
		api.setVeloci\u{74}y(id1, 0,10,0)
		
		soun(id1)
		soun(id)
		/*api.applyEffect(id1, "Frozen", 1000, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:2})*/
		if (tth < 4){


			
			chaneH = -(8*tth)

			
		}else if (tth < 7){
			chaneH = -(4*tth)

		}else{
			chaneH = -(1*tth)

		}
		slotidx= api.getSelectedInventorySlotI(id1)
		i\u{74}m = api.get\u{49}temSlot(id, slotidx)
		
		if (api.getHealth(id1) >0){
			api.applyHealthChange(id1, chaneH,id)
			p1(poser[0],poser[1],poser[2])
		}else if(api.getHealth(id1) < 0 && (i\u{74}m.name==="Gold Spade")){
			
			api.removeI\u{74}emName(id1, "Gold Spade", 1)
			api.setHealth(id1, 10)
			api.applyEffect(id1, "Health Regen", 40000, {inbuiltLevel:2})
			api.setShieldAmount(id1, 20)
			api.playSound(id1, "ca\u{73}hRegister",1, 1)
			p3(poser[0],poser[1],poser[2])	
		}
		cooldownU[id1]=2*20
		api.applyEffect(id1,"Unflyable",2000,{icon:"Cobweb"})
		
	}else if (cooldown[id] > 0){
		api.setHealth(id1, api.getHealth(id1)+dmg)
	}
	
    if (i\u{74}em==="Stone Hoe" && cooldownL[id] === 0){
		api.playSound(id, "sweep6",1, 1)
		api.playSound(id1, "sweep6",1, 1)
		api.applyHealthChange(id1, -dmg ,id)
		api.applyHealthChange(id, dmg*2, id1)
		p2(poser[0],poser[1],poser[2])
	}
	heights[id] = api.getPosi\u{74}ion(id)
    cooldown[id]=2
	cooldownL[id]=8
	cooldownF[id]=0

}
function onPlayerDamagingMob1(id, id1, dmg, i\u{74}em){
	tth = pa\u{72}seInt(heights[id]-api.getPosi\u{74}ion(id)[1])
	poser = api.getPosi\u{74}ion(id1)
	if (i\u{74}em==="Moonstone Axe" && cooldown[id] === 0 && tth>1.5){
		api.setVeloci\u{74}y(id, 0,10,0)
		api.setVeloci\u{74}y(id, 0,18,0)
		api.setVeloci\u{74}y(id1, 0,10,0)
		
		soun(id1)
		soun(id)
		/*api.applyEffect(id1, "Frozen", 1000, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:2})*/
		if (tth < 4){


			
			chaneH = -(8*tth)

			
		}else if (tth < 7){
			chaneH = -(4*tth)

		}else{
			chaneH = -(1*tth)

		}
		slotidx= api.getSelectedInventorySlotI(id1)
		i\u{74}m = api.get\u{49}temSlot(id, slotidx)
		
		if (api.getHealth(id1) >0){
			api.applyHealthChange(id1, chaneH,id)
			p1(poser[0],poser[1],poser[2])
		}else if(api.getHealth(id1) < 0 && (i\u{74}m.name==="Gold Spade")){
			
			api.removeI\u{74}emName(id1, "Gold Spade", 1)
			api.setHealth(id1, 10)
			api.applyEffect(id1, "Health Regen", 40000, {inbuiltLevel:2})
			api.setShieldAmount(id1, 20)
			api.playSound(id1, "ca\u{73}hRegister",1, 1)
			p3(poser[0],poser[1],poser[2])	
		}
		cooldownU[id1]=2*20
		api.applyEffect(id1,"Unflyable",2000,{icon:"Cobweb"})
		
	}else if (cooldown[id] > 0){
		api.setHealth(id1, api.getHealth(id1)+dmg)
	}
	
    if (i\u{74}em==="Stone Hoe" && cooldownL[id] === 0){
		api.playSound(id, "sweep6",1, 1)
		api.playSound(id1, "sweep6",1, 1)
		api.applyHealthChange(id1, -dmg ,id)
		api.applyHealthChange(id, dmg*2, id1)
		p2(poser[0],poser[1],poser[2])
	}
	heights[id] = api.getPosi\u{74}ion(id)
    cooldown[id]=2
	cooldownL[id]=8
	cooldownF[id]=0

}
function onblockStand1(id){
	heights[id] = api.getposi\u{74}ion(id)[1]
	api.setPlayerPose(id, "standing")
}
function onPlayerClick1(id){
	
	slotidx= api.getSelectedInventorySlotI(id)
	i\u{74}m = api.get\u{49}temSlot(id, slotidx)
	/*api.broadcastMessage(itm)*/
	if (i\u{74}m.name==="Moonstone Fragment"){
		api.setVelocity(id, 0,-20,0)
	}
}
/*tools = [["Moonstone Axe",1],["Stone Hoe",1],["Wood Hang Glider",1], ["Arrow of Knockback",1],["Spla\u{73}h Instant Healing potion II",1], ["Spla\u{73}h Instant Healing potion II",1], ["Spla\u{73}h Instant Healing potion II",1], ["Spla\u{73}h Instant Healing potion II",1], ["Spla\u{73}h Instant Healing potion II",1]]*/
tools = [["Moonstone Axe",1],["Moonstone Fragment",1],["Iron Hang Glider",1], ["Obby RpG",1],["Stone Hoe",1],["Steak",20],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1]]

function onPlayerJoin1(id){
	cooldown[id]=0
	heights[id] = 0

	api.applyEffect(id, "Slowness", null, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:1})
	for (i=0;i<tools.length;i++){
		if (tools[i][0]==="Moonstone Axe"){
		api.set\u{49}temSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Mace", "customDescription": "The higher you fall, the more the damage. Enchantment: Wind burst"})
		}else if (tools[i][0]==="Stone Hoe"){
			api.set\u{49}temSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Lifesteal Scynth", "customDescription": "Steal Hearts from others by attacking them!"})
		}else if (tools[i][0]==="Gold Shovel"){
			api.set\u{49}temSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "Extra Life", "customDescription": "Wi\u{74}h a Twist!"})
		}else{
			api.set\u{49}temSlot(id, i, tools[i][0],tools[i][1])
		}
	}
	api.set\u{49}temSlot(id, 46, "Diamond Helmet", null);
	api.set\u{49}temSlot(id, 47, "Diamond Chestplate", null);
	api.set\u{49}temSlot(id, 48, "Diamond Gauntlets", null);
	api.set\u{49}temSlot(id, 49, "Diamond Leggings", null);
	api.set\u{49}temSlot(id, 50, "Diamond boots", null);
	
}
function onPlayerAltAction1(id){
	slotidx= api.getSelectedInventorySlotI(id)
	i\u{74}m = api.get\u{49}temSlot(id, slotidx)
	if (i\u{74}m.attributes.customDisplayName==="Fireworks"){
		

		api.setPlayerPose(id, "gliding")
		C=30
		cam_info = api.getPlayerFacingInfo(id)
		cooldownF[id]=5
		/*for (i=1000;i>0;i--){
			api.setVeloci\u{74}y(id, cam_info.dir[0]*C,cam_info.dir[1]*C,cam_info.dir[2]*C)
		}*/
		api.setVeloci\u{74}y(id, cam_info.dir[0]*C,cam_info.dir[1]*C,cam_info.dir[2]*C)
		api.removeI\u{74}emName(id, i\u{74}m.name, 1)
		/*api.broadca\u{73}tMessage(api.getplayerFacingInfo(id))*/
		
	}
	
}

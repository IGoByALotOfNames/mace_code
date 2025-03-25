/*
	tick onClose onplayerJoin onplayerLeave onplayerJump onRespawnRequest
	playerCommand onplayerChat onplayerChangeblock onplayerDropItem
	onplayerpickedUpItem onplayerSelectInventorySlot onblockStand onplayerCraft
	onplayerAttemptOpenChest onplayerOpenedChest onplayerMoveItemOutOfInventory
	onplayerMoveInvenItem onplayerMoveItemIntoIdxs onplayerSwapInvenSlots
	onplayerMoveInvenItemWithAmt onplayerAttemptAltAction onplayerAltAction
	onplayerClick onClientOptionUpdated onInventoryUpdated onChestUpdated
	onWorldChangeblock onCreatebloxdMeshEntity onEntityCollision
	onplayerAttemptSpawnMob onWorldAttemptSpawnMob onplayerSpawnMob
	onWorldSpawnMob onMobDespawned onplayerAttack onplayerDamagingOtherplayer
	onplayerDamagingMob onplayerKilledOtherplayer onMobKilledplayer
	onplayerKilledMob onplayerpotionEffect onplayerDamagingMeshEntity
	onplayerbreakMeshEntity onplayerUsedThrowable onplayerThrowableHitTerrain
	onTouchscreenActionbutton onTaskClaimed onChunkLoaded onplayerRequestChunk
	onItemDropCreated onplayerStartChargingItem onplayerFinishChargingItem
	doperiodicSave

	To use a callback, just assign a function to it in the world code!b
	tick = () => {}			 or			 function tick() {}
*/

cnt = 0
cooldown=[]
cooldownL=[]
cooldownF=[]
heights=[]
function tick1(){
cnt+=1
players=api.getPlayerIds()
for (i=0;i<players.length;i++){
	new_pos = api.getPosition(players[i])[1]
	if ( new_pos > heights[players[i]]){
		/*api.broadcastMessage(new_pos.toString())*/
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
	/*if (cnt % 1===0){
		if ((cooldownF[players[i]] > 0)){
		cooldownF[players[i]]-=1
		cam_info = api.getplayerFacingInfo(players[i])
		api.setVelocity(players[i], cam_info.dir[0]*C*(cooldownF[players[i]]+1),cam_info.dir[1]*C*(cooldownF[players[i]]+1),cam_info.dir[2]*C*(cooldownF[players[i]]+1))
		/*api.applyImpulse(players[i], cam_info.dir[0]*C,cam_info.dir[1]*C,cam_info.dir[2]*C)*/
		 /* api.sendMessage(players[i],cooldownL[players[i]].toString()) */
		/*}
	}*/
	
	
}

}

function sound1(id){
api.playSound(id, "submachine_tail_only_shot_01",1, 1)
}
function onPlayerKilledOtherPlayer1(id,id1){
	slotidx= api.getSelectedInventorySlotI(id)
	itm = api.getItemSlot(id, slotidx)
	pos_1 = api.getPosition(id1)
	if (itm.name==="Gold Spade"){

		api.forceRespawn(id1, pos1[0], pos1[1], pos1[2])
		api.playSound(id, "cashRegister",1, 1)
		api.playSound(id1, "cashRegister",1, 1)
		p3(pos1[0], pos1[1], pos1[2])
		

	}else{
		for (i=0;i<tools.length;i++){
			if (tools[i][0]==="Moonstone Axe"){
			api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Mace", "customDescription": "The higher you fall, the more the damage. Enchantment: Wind burst"})
			}else if (tools[i][0]==="Stone Hoe"){
				api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Lifesteal Scynth", "customDescription": "Steal Hearts from others by attacking them!"})
			}else if (tools[i][0]==="Gold Spade"){
				api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "Extra Life", "customDescription": "With a Twist!"})
			}else{
				api.setItemSlot(id, i, tools[i][0],tools[i][1])
			}
		}
	api.setItemSlot(id, 46, "Diamond Helmet", null);
	api.setItemSlot(id, 47, "Diamond Chestplate", null);
	api.setItemSlot(id, 48, "Diamond Gauntlets", null);
	api.setItemSlot(id, 49, "Diamond Leggings", null);
	api.setItemSlot(id, 50, "Diamond boots", null);
	
}

	
	return "keepInventory"
}
function onPlayerDamagingOtherPlayer1(id, id1, dmg, item){
	tth = parseInt(heights[id]-api.getPosition(id)[1])
	poser = api.getPosition(id1)
	if (item==="Moonstone Axe" && cooldown[id] === 0 && tth>1.5){
		api.setVelocity(id, 0,0,0)
		api.applyImpulse(id,0,20,0)
		sound1(id1)
		sound1(id)
		api.applyEffect(id1, "Frozen", 1000, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:2})
		if (tth < 5){


			
			chaneH = -(10*tth)

			
		}else if (tth < 7){
			chaneH = -(5*tth)

		}else{
			chaneH = -(3*tth)

		}
		slotidx= api.getSelectedInventorySlotI(id1)
		itm = api.getItemSlot(id, slotidx)
		
		if (api.getHealth(id1)+chaneH >0){
			api.applyHealthChange(id1, chaneH,id)
			p1(poser[0],poser[1],poser[2])
		}else if(api.getHealth(id1)+chaneH < 0 && (itm.name==="Gold Spade")){
			
			api.removeItemName(id1, "Gold Spade", 1)
			api.setHealth(id1, 10)
			api.applyEffect(id1, "Health Regen", 40000, {inbuiltLevel:2})
			api.setShieldAmount(id1, 20)
			api.playSound(id1, "cashRegister",1, 1)
			p3(poser[0],poser[1],poser[2])	
		}
	}else if (cooldown[id] > 0){
		api.setHealth(id1, api.getHealth(id1)+dmg)
	}
	
    if (item==="Stone Hoe" && cooldownL[id] === 0){
		api.playSound(id, "sweep6",1, 1)
		api.playSound(id1, "sweep6",1, 1)
		api.applyHealthChange(id1, -dmg ,id)
		api.applyHealthChange(id, dmg*2, id1)
		p2(poser[0],poser[1],poser[2])
	}
	heights[id] = api.getPosition(id)[1]
	cooldown[id]=2
	cooldownL[id]=8
	cooldownF[id]=0

}
function onBlockStand1(id){
	heights[id] = api.getPosition(id)[1]
	api.setPlayerPose(id, "standing")
}
/*tools = [["Moonstone Axe",1],["Stone Hoe",1],["Wood Hang Glider",1], ["Arrow of Knockback",1],["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1]]*/
tools = [["Moonstone Axe",1],["Stone Hoe",1],["Iron Hang Glider",1], ["Obby RPG",1],["Steak",20],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1]]

function onPlayerJoin1(id){
	cooldown[id]=0
	heights[id] = 0

	api.applyEffect(id, "Slowness", null, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:1})
	for (i=0;i<tools.length;i++){
		if (tools[i][0]==="Moonstone Axe"){
		api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Mace", "customDescription": "The higher you fall, the more the damage. Enchantment: Wind burst"})
		}else if (tools[i][0]==="Stone Hoe"){
			api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Lifesteal Scynth", "customDescription": "Steal Hearts from others by attacking them!"})
		}else if (tools[i][0]==="Gold Shovel"){
			api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "Extra Life", "customDescription": "With a Twist!"})
		}else{
			api.setItemSlot(id, i, tools[i][0],tools[i][1])
		}
	}
	api.setItemSlot(id, 46, "Diamond Helmet", null);
	api.setItemSlot(id, 47, "Diamond Chestplate", null);
	api.setItemSlot(id, 48, "Diamond Gauntlets", null);
	api.setItemSlot(id, 49, "Diamond Leggings", null);
	api.setItemSlot(id, 50, "Diamond boots", null);
	
}
function onPlayerAltAction1(id){
	slotidx= api.getSelectedInventorySlotI(id)
	itm = api.getItemSlot(id, slotidx)
	if (itm.attributes.customDisplayName==="Fireworks"){
		

		api.setplayerpose(id, "gliding")
		C=30
		cam_info = api.getplayerFacingInfo(id)
		cooldownF[id]=5
		/*for (i=1000;i>0;i--){
			api.setVelocity(id, cam_info.dir[0]*C,cam_info.dir[1]*C,cam_info.dir[2]*C)
		}*/
		api.setVelocity(id, cam_info.dir[0]*C,cam_info.dir[1]*C,cam_info.dir[2]*C)
		api.removeItemName(id, itm.name, 1)
		/*api.broadcastMessage(api.getplayerFacingInfo(id))*/
		
	}
	
}

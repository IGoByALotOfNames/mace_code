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
function p1(x,y,z){
api.playParticleEffect({
    dir1: [0, -8, 0],
    dir2: [0, 3, 0],
    pos1: [x-4, y, z-4],
    pos2: [x + 4, y, z + 4],
    texture: "square_particle",
    minLifeTime: 0.2,
    maxLifeTime: 0.6,
    minEmitPower: 2,
    maxEmitPower: 2,
    minSize: 0.1,
    maxSize: 0.2,
    manualEmitCount: 400,
    gravity: [0, -10, 0],
    colorGradients: [
        {
            timeFraction: 0,
            minColor: [100,100, 100, 1],
            maxColor: [150, 150, 150, 1],
        },
    ],
    velocityGradients: [
        {
            timeFraction: 0,
            factor: 2,
            factor2: 2,
        },
    ],
    blendMode: 1,
})
}
function p2(x,y,z){
api.playParticleEffect({
    dir1: [-1, -1, -1],
    dir2: [1, 1, 1],
    pos1: [x-1, y-1, z-1],
    pos2: [x + 1, y+1, z + 1],
    texture: "soul_0",
    minLifeTime: 0.2,
    maxLifeTime: 0.6,
    minEmitPower: 2,
    maxEmitPower: 2,
    minSize: 0.25,
    maxSize: 0.5,
    manualEmitCount: 400,
    gravity: [0, 0, 0],
    colorGradients: [
        {
            timeFraction: 0,
            minColor: [255,0, 0, 1],
            maxColor: [150, 0, 0, 1],
        },
    ],
    velocityGradients: [
        {
            timeFraction: 0,
            factor: 1,
            factor2: 1,
        },
    ],
    blendMode: 1,
})
}
function p3(x,y,z){
	api.playParticleEffect({
		dir1: [-1, -1, -1],
		dir2: [1, 1, 1],
		pos1: [x-1, y, z-1],
		pos2: [x + 1, y+1, z + 1],
		texture: "glint",
		minLifeTime: 0.5,
		maxLifeTime: 1,
		minEmitPower: 2,
		maxEmitPower: 2,
		minSize: 0.25,
		maxSize: 0.5,
		manualEmitCount: 100,
		gravity: [0, 0, 0],
		colorGradients: [
			{
				timeFraction: 0,
				minColor: [0,255, 0, 1],
				maxColor: [0, 150, 0, 1],
			},
		],
		velocityGradients: [
			{
				timeFraction: 0,
				factor: 1,
				factor2: 1,
			},
		],
		blendMode: 1,
	})
	api.playParticleEffect({
		dir1: [-1, -1, -1],
		dir2: [1, 1, 1],
		pos1: [x-1, y, z-1],
		pos2: [x + 1, y+1, z + 1],
		texture: "glint",
		minLifeTime: 0.5,
		maxLifeTime: 1,
		minEmitPower: 2,
		maxEmitPower: 2,
		minSize: 0.25,
		maxSize: 0.5,
		manualEmitCount: 100,
		gravity: [0, 0, 0],
		colorGradients: [
			{
				timeFraction: 0,
				minColor: [255,255, 0, 1],
				maxColor: [255, 255, 0, 1],
			},
		],
		velocityGradients: [
			{
				timeFraction: 0,
				factor: 1,
				factor2: 1,
			},
		],
		blendMode: 1,
	})
	
}

function tick(){
tick1()
}
function onPlayerClick(id,alt){
	onPlayerClick1(id,alt)
}
function sound1(id){
api.playSound(id, "submachine_tail_only_shot_01",1, 1)
}
function onPlayerKilledOtherPlayer(id,id1){
	
	onPlayerKilledOtherPlayer1(id,id1)
	return "keepInventory"
}

function onPlayerDamagingOtherPlayer(id, id1, dmg, item){
	onPlayerDamagingOtherPlayer1(id, id1, dmg, item)
}
function onBlockStand(id){
	heights[id] = api.getPosition(id)[1]
	api.setPlayerPose(id, "standing")
}
/*tools = [["Moonstone Axe",1],["Stone Hoe",1],["Wood Hang Glider",1], ["Arrow of Knockback",1],["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1], ["Splash Instant Healing potion II",1]]*/
tools = [["Moonstone Axe",1],["Moonstone Fragment",1],["Iron Hang Glider",1], ["Obby RPG",1],["Stone Hoe",1],["Steak",20],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1],["Gold Spade",1]]

function onPlayerJoin(id){
	cooldown[id]=0
	heights[id] = 0

	api.applyEffect(id, "Slowness", null, {icon:"Slowness",displayName:"Stunned",inbuiltLevel:2})
	for (i=0;i<tools.length;i++){
		if (tools[i][0]==="Moonstone Axe"){
		api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Mace", "customDescription": "The higher you fall, the more the damage. Enchantment: Wind burst"})
		}else if (tools[i][0]==="Stone Hoe"){
			api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "The Lifesteal Scynth", "customDescription": "Steal Hearts from others by attacking them!"})
		}else if (tools[i][0]==="Gold Spade"){
			api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "Extra Life", "customDescription": "With a Twist!"})
		}else if (tools[i][0]==="Moonstone Fragment"){
			api.setItemSlot(id, i, tools[i][0], tools[i][1], {"customDisplayName": "Downdraft", "customDescription": "Get Down FAST!"})
		}else{
			api.setItemSlot(id, i, tools[i][0],tools[i][1])
		}
	}
	api.setItemSlot(id, 46, "Diamond Helmet", null);
	api.setItemSlot(id, 47, "Diamond Chestplate", null);
	api.setItemSlot(id, 48, "Diamond Gauntlets", null);
	api.setItemSlot(id, 49, "Diamond Leggings", null);
	api.setItemSlot(id, 50, "Diamond Boots", null);
	
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

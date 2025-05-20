gdjs.monsterCode = {};
gdjs.monsterCode.localVariables = [];
gdjs.monsterCode.GDNewTiledSpriteObjects1= [];
gdjs.monsterCode.GDNewTiledSpriteObjects2= [];
gdjs.monsterCode.GDNewTiledSprite2Objects1= [];
gdjs.monsterCode.GDNewTiledSprite2Objects2= [];
gdjs.monsterCode.GDinvisibleObjects1= [];
gdjs.monsterCode.GDinvisibleObjects2= [];
gdjs.monsterCode.GDNewTexObjects1= [];
gdjs.monsterCode.GDNewTexObjects2= [];
gdjs.monsterCode.GDNewTiledSprite3Objects1= [];
gdjs.monsterCode.GDNewTiledSprite3Objects2= [];
gdjs.monsterCode.GDNewSpriteObjects1= [];
gdjs.monsterCode.GDNewSpriteObjects2= [];
gdjs.monsterCode.GDNewSprite2Objects1= [];
gdjs.monsterCode.GDNewSprite2Objects2= [];
gdjs.monsterCode.GDpObjects1= [];
gdjs.monsterCode.GDpObjects2= [];
gdjs.monsterCode.GDenemy_95951Objects1= [];
gdjs.monsterCode.GDenemy_95951Objects2= [];
gdjs.monsterCode.GDcObjects1= [];
gdjs.monsterCode.GDcObjects2= [];


gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.monsterCode.GDpObjects1});
gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDNewTiledSprite3Objects1Objects = Hashtable.newFrom({"NewTiledSprite3": gdjs.monsterCode.GDNewTiledSprite3Objects1});
gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.monsterCode.GDpObjects1});
gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.monsterCode.GDNewSpriteObjects1});
gdjs.monsterCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.monsterCode.GDNewTiledSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.monsterCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDpObjects1Objects, gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDNewTiledSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTex"), gdjs.monsterCode.GDNewTexObjects1);
/* Reuse gdjs.monsterCode.GDNewTiledSprite3Objects1 */
{for(var i = 0, len = gdjs.monsterCode.GDNewTexObjects1.length ;i < len;++i) {
    gdjs.monsterCode.GDNewTexObjects1[i].getBehavior("Text").setText("put it near the tree");
}
}{for(var i = 0, len = gdjs.monsterCode.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.monsterCode.GDNewTiledSprite3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.monsterCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.monsterCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDpObjects1Objects, gdjs.monsterCode.mapOfGDgdjs_9546monsterCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
}

}


};

gdjs.monsterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.monsterCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.monsterCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.monsterCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.monsterCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.monsterCode.GDinvisibleObjects1.length = 0;
gdjs.monsterCode.GDinvisibleObjects2.length = 0;
gdjs.monsterCode.GDNewTexObjects1.length = 0;
gdjs.monsterCode.GDNewTexObjects2.length = 0;
gdjs.monsterCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.monsterCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.monsterCode.GDNewSpriteObjects1.length = 0;
gdjs.monsterCode.GDNewSpriteObjects2.length = 0;
gdjs.monsterCode.GDNewSprite2Objects1.length = 0;
gdjs.monsterCode.GDNewSprite2Objects2.length = 0;
gdjs.monsterCode.GDpObjects1.length = 0;
gdjs.monsterCode.GDpObjects2.length = 0;
gdjs.monsterCode.GDenemy_95951Objects1.length = 0;
gdjs.monsterCode.GDenemy_95951Objects2.length = 0;
gdjs.monsterCode.GDcObjects1.length = 0;
gdjs.monsterCode.GDcObjects2.length = 0;

gdjs.monsterCode.eventsList0(runtimeScene);
gdjs.monsterCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.monsterCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.monsterCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.monsterCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.monsterCode.GDinvisibleObjects1.length = 0;
gdjs.monsterCode.GDinvisibleObjects2.length = 0;
gdjs.monsterCode.GDNewTexObjects1.length = 0;
gdjs.monsterCode.GDNewTexObjects2.length = 0;
gdjs.monsterCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.monsterCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.monsterCode.GDNewSpriteObjects1.length = 0;
gdjs.monsterCode.GDNewSpriteObjects2.length = 0;
gdjs.monsterCode.GDNewSprite2Objects1.length = 0;
gdjs.monsterCode.GDNewSprite2Objects2.length = 0;
gdjs.monsterCode.GDpObjects1.length = 0;
gdjs.monsterCode.GDpObjects2.length = 0;
gdjs.monsterCode.GDenemy_95951Objects1.length = 0;
gdjs.monsterCode.GDenemy_95951Objects2.length = 0;
gdjs.monsterCode.GDcObjects1.length = 0;
gdjs.monsterCode.GDcObjects2.length = 0;


return;

}

gdjs['monsterCode'] = gdjs.monsterCode;

gdjs.peekabooCode = {};
gdjs.peekabooCode.localVariables = [];
gdjs.peekabooCode.GDNewTiledSpriteObjects1= [];
gdjs.peekabooCode.GDNewTiledSpriteObjects2= [];
gdjs.peekabooCode.GDNewTiledSprite2Objects1= [];
gdjs.peekabooCode.GDNewTiledSprite2Objects2= [];
gdjs.peekabooCode.GDNewTextObjects1= [];
gdjs.peekabooCode.GDNewTextObjects2= [];
gdjs.peekabooCode.GDNewTiledSprite3Objects1= [];
gdjs.peekabooCode.GDNewTiledSprite3Objects2= [];
gdjs.peekabooCode.GDpObjects1= [];
gdjs.peekabooCode.GDpObjects2= [];
gdjs.peekabooCode.GDenemy_95951Objects1= [];
gdjs.peekabooCode.GDenemy_95951Objects2= [];
gdjs.peekabooCode.GDcObjects1= [];
gdjs.peekabooCode.GDcObjects2= [];


gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.peekabooCode.GDpObjects1});
gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDcObjects1Objects = Hashtable.newFrom({"c": gdjs.peekabooCode.GDcObjects1});
gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.peekabooCode.GDpObjects1});
gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDNewTiledSprite3Objects1Objects = Hashtable.newFrom({"NewTiledSprite3": gdjs.peekabooCode.GDNewTiledSprite3Objects1});
gdjs.peekabooCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("c"), gdjs.peekabooCode.GDcObjects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.peekabooCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDpObjects1Objects, gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.peekabooCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.peekabooCode.GDNewTiledSprite3Objects1);
/* Reuse gdjs.peekabooCode.GDcObjects1 */
{for(var i = 0, len = gdjs.peekabooCode.GDcObjects1.length ;i < len;++i) {
    gdjs.peekabooCode.GDcObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.peekabooCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.peekabooCode.GDNewTextObjects1[i].getBehavior("Text").setText("Coins: 3");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Coins 10.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.peekabooCode.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.peekabooCode.GDNewTiledSprite3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.peekabooCode.GDNewTiledSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.peekabooCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDpObjects1Objects, gdjs.peekabooCode.mapOfGDgdjs_9546peekabooCode_9546GDNewTiledSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "monster", false);
}}

}


};

gdjs.peekabooCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.peekabooCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.peekabooCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.peekabooCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.peekabooCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.peekabooCode.GDNewTextObjects1.length = 0;
gdjs.peekabooCode.GDNewTextObjects2.length = 0;
gdjs.peekabooCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.peekabooCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.peekabooCode.GDpObjects1.length = 0;
gdjs.peekabooCode.GDpObjects2.length = 0;
gdjs.peekabooCode.GDenemy_95951Objects1.length = 0;
gdjs.peekabooCode.GDenemy_95951Objects2.length = 0;
gdjs.peekabooCode.GDcObjects1.length = 0;
gdjs.peekabooCode.GDcObjects2.length = 0;

gdjs.peekabooCode.eventsList0(runtimeScene);
gdjs.peekabooCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.peekabooCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.peekabooCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.peekabooCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.peekabooCode.GDNewTextObjects1.length = 0;
gdjs.peekabooCode.GDNewTextObjects2.length = 0;
gdjs.peekabooCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.peekabooCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.peekabooCode.GDpObjects1.length = 0;
gdjs.peekabooCode.GDpObjects2.length = 0;
gdjs.peekabooCode.GDenemy_95951Objects1.length = 0;
gdjs.peekabooCode.GDenemy_95951Objects2.length = 0;
gdjs.peekabooCode.GDcObjects1.length = 0;
gdjs.peekabooCode.GDcObjects2.length = 0;


return;

}

gdjs['peekabooCode'] = gdjs.peekabooCode;

gdjs.home_32screenCode = {};
gdjs.home_32screenCode.localVariables = [];
gdjs.home_32screenCode.GDNewTiledSpriteObjects1= [];
gdjs.home_32screenCode.GDNewTiledSpriteObjects2= [];
gdjs.home_32screenCode.GDNewSpriteObjects1= [];
gdjs.home_32screenCode.GDNewSpriteObjects2= [];
gdjs.home_32screenCode.GDNewTiledSprite2Objects1= [];
gdjs.home_32screenCode.GDNewTiledSprite2Objects2= [];
gdjs.home_32screenCode.GDNewBBTextObjects1= [];
gdjs.home_32screenCode.GDNewBBTextObjects2= [];
gdjs.home_32screenCode.GDNewTextObjects1= [];
gdjs.home_32screenCode.GDNewTextObjects2= [];
gdjs.home_32screenCode.GDNewTiledSprite3Objects1= [];
gdjs.home_32screenCode.GDNewTiledSprite3Objects2= [];
gdjs.home_32screenCode.GDNewTiledSprite4Objects1= [];
gdjs.home_32screenCode.GDNewTiledSprite4Objects2= [];
gdjs.home_32screenCode.GDNewTiledSprite5Objects1= [];
gdjs.home_32screenCode.GDNewTiledSprite5Objects2= [];
gdjs.home_32screenCode.GDNewTiledSprite6Objects1= [];
gdjs.home_32screenCode.GDNewTiledSprite6Objects2= [];
gdjs.home_32screenCode.GDpObjects1= [];
gdjs.home_32screenCode.GDpObjects2= [];
gdjs.home_32screenCode.GDenemy_95951Objects1= [];
gdjs.home_32screenCode.GDenemy_95951Objects2= [];
gdjs.home_32screenCode.GDcObjects1= [];
gdjs.home_32screenCode.GDcObjects2= [];


gdjs.home_32screenCode.mapOfGDgdjs_9546home_959532screenCode_9546GDNewTiledSprite5Objects1Objects = Hashtable.newFrom({"NewTiledSprite5": gdjs.home_32screenCode.GDNewTiledSprite5Objects1});
gdjs.home_32screenCode.mapOfGDgdjs_9546home_959532screenCode_9546GDNewTiledSprite6Objects1Objects = Hashtable.newFrom({"NewTiledSprite6": gdjs.home_32screenCode.GDNewTiledSprite6Objects1});
gdjs.home_32screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.home_32screenCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.home_32screenCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.home_32screenCode.GDNewTextObjects1[i].isOutlineEnabled() ) {
        isConditionTrue_0 = true;
        gdjs.home_32screenCode.GDNewTextObjects1[k] = gdjs.home_32screenCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.home_32screenCode.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.home_32screenCode.GDNewTextObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.home_32screenCode.GDNewTextObjects1.length !== 0 ? gdjs.home_32screenCode.GDNewTextObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite5"), gdjs.home_32screenCode.GDNewTiledSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite6"), gdjs.home_32screenCode.GDNewTiledSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.home_32screenCode.mapOfGDgdjs_9546home_959532screenCode_9546GDNewTiledSprite5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.home_32screenCode.mapOfGDgdjs_9546home_959532screenCode_9546GDNewTiledSprite6Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mad city", false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mad city", false);
}}

}


};

gdjs.home_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.home_32screenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.home_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.home_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.home_32screenCode.GDNewBBTextObjects1.length = 0;
gdjs.home_32screenCode.GDNewBBTextObjects2.length = 0;
gdjs.home_32screenCode.GDNewTextObjects1.length = 0;
gdjs.home_32screenCode.GDNewTextObjects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite5Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite5Objects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite6Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite6Objects2.length = 0;
gdjs.home_32screenCode.GDpObjects1.length = 0;
gdjs.home_32screenCode.GDpObjects2.length = 0;
gdjs.home_32screenCode.GDenemy_95951Objects1.length = 0;
gdjs.home_32screenCode.GDenemy_95951Objects2.length = 0;
gdjs.home_32screenCode.GDcObjects1.length = 0;
gdjs.home_32screenCode.GDcObjects2.length = 0;

gdjs.home_32screenCode.eventsList0(runtimeScene);
gdjs.home_32screenCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.home_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.home_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.home_32screenCode.GDNewBBTextObjects1.length = 0;
gdjs.home_32screenCode.GDNewBBTextObjects2.length = 0;
gdjs.home_32screenCode.GDNewTextObjects1.length = 0;
gdjs.home_32screenCode.GDNewTextObjects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite4Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite4Objects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite5Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite5Objects2.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite6Objects1.length = 0;
gdjs.home_32screenCode.GDNewTiledSprite6Objects2.length = 0;
gdjs.home_32screenCode.GDpObjects1.length = 0;
gdjs.home_32screenCode.GDpObjects2.length = 0;
gdjs.home_32screenCode.GDenemy_95951Objects1.length = 0;
gdjs.home_32screenCode.GDenemy_95951Objects2.length = 0;
gdjs.home_32screenCode.GDcObjects1.length = 0;
gdjs.home_32screenCode.GDcObjects2.length = 0;


return;

}

gdjs['home_32screenCode'] = gdjs.home_32screenCode;

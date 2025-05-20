gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.localVariables = [];
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32scene2Code.GDpObjects1= [];
gdjs.Untitled_32scene2Code.GDpObjects2= [];
gdjs.Untitled_32scene2Code.GDenemy_95951Objects1= [];
gdjs.Untitled_32scene2Code.GDenemy_95951Objects2= [];
gdjs.Untitled_32scene2Code.GDcObjects1= [];
gdjs.Untitled_32scene2Code.GDcObjects2= [];


gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.Untitled_32scene2Code.GDpObjects1});
gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1});
gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.Untitled_32scene2Code.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDpObjects1Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_9546Untitled_959532scene2Code_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "peekaboo", false);
}}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDpObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDpObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDenemy_95951Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDenemy_95951Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDcObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDcObjects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDpObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDpObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDenemy_95951Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDenemy_95951Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDcObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDcObjects2.length = 0;


return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;

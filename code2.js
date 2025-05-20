gdjs.Untitled_32scene3Code = {};
gdjs.Untitled_32scene3Code.localVariables = [];
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene3Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene3Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32scene3Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewText2Objects2= [];
gdjs.Untitled_32scene3Code.GDpObjects1= [];
gdjs.Untitled_32scene3Code.GDpObjects2= [];
gdjs.Untitled_32scene3Code.GDenemy_95951Objects1= [];
gdjs.Untitled_32scene3Code.GDenemy_95951Objects2= [];
gdjs.Untitled_32scene3Code.GDcObjects1= [];
gdjs.Untitled_32scene3Code.GDcObjects2= [];


gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.Untitled_32scene3Code.GDpObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDNewTiledSprite2Objects1Objects = Hashtable.newFrom({"NewTiledSprite2": gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.Untitled_32scene3Code.GDpObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDcObjects1Objects = Hashtable.newFrom({"c": gdjs.Untitled_32scene3Code.GDcObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.Untitled_32scene3Code.GDpObjects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDenemy_959595951Objects1Objects = Hashtable.newFrom({"enemy_1": gdjs.Untitled_32scene3Code.GDenemy_95951Objects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDenemy_959595951Objects1Objects = Hashtable.newFrom({"enemy_1": gdjs.Untitled_32scene3Code.GDenemy_95951Objects1});
gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.Untitled_32scene3Code.GDpObjects1});
gdjs.Untitled_32scene3Code.asyncCallback14530492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("p"), gdjs.Untitled_32scene3Code.GDpObjects2);

{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDpObjects2.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDpObjects2[i].getBehavior("PlatformerObject").setAcceleration(1);
}
}gdjs.Untitled_32scene3Code.localVariables.length = 0;
}
gdjs.Untitled_32scene3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32scene3Code.localVariables);
for (const obj of gdjs.Untitled_32scene3Code.GDpObjects1) asyncObjectsList.addObject("p", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(20), (runtimeScene) => (gdjs.Untitled_32scene3Code.asyncCallback14530492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32scene3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.Untitled_32scene3Code.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects, gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDNewTiledSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c"), gdjs.Untitled_32scene3Code.GDcObjects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.Untitled_32scene3Code.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects, gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.Untitled_32scene3Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1);
/* Reuse gdjs.Untitled_32scene3Code.GDcObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDcObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDcObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewText2Objects1[i].getBehavior("Text").setText("coins: 2");
}
}{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_1"), gdjs.Untitled_32scene3Code.GDenemy_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.Untitled_32scene3Code.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects, gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDenemy_959595951Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDenemy_95951Objects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDenemy_95951Objects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDenemy_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_1"), gdjs.Untitled_32scene3Code.GDenemy_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.Untitled_32scene3Code.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDenemy_959595951Objects1Objects, gdjs.Untitled_32scene3Code.mapOfGDgdjs_9546Untitled_959532scene3Code_9546GDpObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32scene3Code.GDpObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene3Code.GDpObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene3Code.GDpObjects1[i].getBehavior("PlatformerObject").setAcceleration(20);
}
}
{ //Subevents
gdjs.Untitled_32scene3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDpObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDpObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDenemy_95951Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDenemy_95951Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDcObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDcObjects2.length = 0;

gdjs.Untitled_32scene3Code.eventsList1(runtimeScene);
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDpObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDpObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDenemy_95951Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDenemy_95951Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDcObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDcObjects2.length = 0;


return;

}

gdjs['Untitled_32scene3Code'] = gdjs.Untitled_32scene3Code;

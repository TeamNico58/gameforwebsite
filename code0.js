gdjs.mad_32cityCode = {};
gdjs.mad_32cityCode.localVariables = [];
gdjs.mad_32cityCode.GDNewPanelSpriteObjects1= [];
gdjs.mad_32cityCode.GDNewPanelSpriteObjects2= [];
gdjs.mad_32cityCode.GDNewTiledSpriteObjects1= [];
gdjs.mad_32cityCode.GDNewTiledSpriteObjects2= [];
gdjs.mad_32cityCode.GDNewTiledSprite2Objects1= [];
gdjs.mad_32cityCode.GDNewTiledSprite2Objects2= [];
gdjs.mad_32cityCode.GDNewSpriteObjects1= [];
gdjs.mad_32cityCode.GDNewSpriteObjects2= [];
gdjs.mad_32cityCode.GDNewTiledSprite3Objects1= [];
gdjs.mad_32cityCode.GDNewTiledSprite3Objects2= [];
gdjs.mad_32cityCode.GDNewTextObjects1= [];
gdjs.mad_32cityCode.GDNewTextObjects2= [];
gdjs.mad_32cityCode.GDpObjects1= [];
gdjs.mad_32cityCode.GDpObjects2= [];
gdjs.mad_32cityCode.GDenemy_95951Objects1= [];
gdjs.mad_32cityCode.GDenemy_95951Objects2= [];
gdjs.mad_32cityCode.GDcObjects1= [];
gdjs.mad_32cityCode.GDcObjects2= [];


gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.mad_32cityCode.GDpObjects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDenemy_959595951Objects1Objects = Hashtable.newFrom({"enemy_1": gdjs.mad_32cityCode.GDenemy_95951Objects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.mad_32cityCode.GDpObjects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDcObjects1Objects = Hashtable.newFrom({"c": gdjs.mad_32cityCode.GDcObjects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.mad_32cityCode.GDpObjects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDNewTiledSprite3Objects1Objects = Hashtable.newFrom({"NewTiledSprite3": gdjs.mad_32cityCode.GDNewTiledSprite3Objects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDenemy_959595951Objects1Objects = Hashtable.newFrom({"enemy_1": gdjs.mad_32cityCode.GDenemy_95951Objects1});
gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects = Hashtable.newFrom({"p": gdjs.mad_32cityCode.GDpObjects1});
gdjs.mad_32cityCode.asyncCallback14412948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mad_32cityCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("p"), gdjs.mad_32cityCode.GDpObjects2);

{for(var i = 0, len = gdjs.mad_32cityCode.GDpObjects2.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDpObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}gdjs.mad_32cityCode.localVariables.length = 0;
}
gdjs.mad_32cityCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mad_32cityCode.localVariables);
for (const obj of gdjs.mad_32cityCode.GDpObjects1) asyncObjectsList.addObject("p", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(20), (runtimeScene) => (gdjs.mad_32cityCode.asyncCallback14412948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mad_32cityCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.mad_32cityCode.GDNewTiledSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.mad_32cityCode.GDpObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.mad_32cityCode.GDpObjects1.length !== 0 ? gdjs.mad_32cityCode.GDpObjects1[0] : null), false, "layer", 1);
}{for(var i = 0, len = gdjs.mad_32cityCode.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDNewTiledSprite3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy_1"), gdjs.mad_32cityCode.GDenemy_95951Objects1);
{for(var i = 0, len = gdjs.mad_32cityCode.GDenemy_95951Objects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDenemy_95951Objects1[i].getBehavior("Health").Hit(25, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_1"), gdjs.mad_32cityCode.GDenemy_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mad_32cityCode.GDenemy_95951Objects1.length;i<l;++i) {
    if ( gdjs.mad_32cityCode.GDenemy_95951Objects1[i].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.mad_32cityCode.GDenemy_95951Objects1[k] = gdjs.mad_32cityCode.GDenemy_95951Objects1[i];
        ++k;
    }
}
gdjs.mad_32cityCode.GDenemy_95951Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mad_32cityCode.GDenemy_95951Objects1.length;i<l;++i) {
    if ( gdjs.mad_32cityCode.GDenemy_95951Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.mad_32cityCode.GDenemy_95951Objects1[k] = gdjs.mad_32cityCode.GDenemy_95951Objects1[i];
        ++k;
    }
}
gdjs.mad_32cityCode.GDenemy_95951Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mad_32cityCode.GDenemy_95951Objects1 */
{for(var i = 0, len = gdjs.mad_32cityCode.GDenemy_95951Objects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDenemy_95951Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mad_32cityCode.GDenemy_95951Objects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDenemy_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_1"), gdjs.mad_32cityCode.GDenemy_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.mad_32cityCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects, gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDenemy_959595951Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mad_32cityCode.GDenemy_95951Objects1 */
{for(var i = 0, len = gdjs.mad_32cityCode.GDenemy_95951Objects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDenemy_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.mad_32cityCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mad_32cityCode.GDpObjects1.length;i<l;++i) {
    if ( gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.mad_32cityCode.GDpObjects1[k] = gdjs.mad_32cityCode.GDpObjects1[i];
        ++k;
    }
}
gdjs.mad_32cityCode.GDpObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mad_32cityCode.GDpObjects1.length;i<l;++i) {
    if ( gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.mad_32cityCode.GDpObjects1[k] = gdjs.mad_32cityCode.GDpObjects1[i];
        ++k;
    }
}
gdjs.mad_32cityCode.GDpObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mad_32cityCode.GDpObjects1.length;i<l;++i) {
    if ( gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").isUsingControl("Jump") ) {
        isConditionTrue_0 = true;
        gdjs.mad_32cityCode.GDpObjects1[k] = gdjs.mad_32cityCode.GDpObjects1[i];
        ++k;
    }
}
gdjs.mad_32cityCode.GDpObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mad_32cityCode.GDpObjects1 */
{for(var i = 0, len = gdjs.mad_32cityCode.GDpObjects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.mad_32cityCode.GDpObjects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.mad_32cityCode.GDpObjects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Aright", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c"), gdjs.mad_32cityCode.GDcObjects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.mad_32cityCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects, gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDcObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.mad_32cityCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.mad_32cityCode.GDNewTiledSprite3Objects1);
/* Reuse gdjs.mad_32cityCode.GDcObjects1 */
{for(var i = 0, len = gdjs.mad_32cityCode.GDcObjects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDcObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Coins 10.aac", false, 100, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.mad_32cityCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDNewTextObjects1[i].getBehavior("Text").setText("coins 1");
}
}{for(var i = 0, len = gdjs.mad_32cityCode.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDNewTiledSprite3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.mad_32cityCode.GDNewTiledSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.mad_32cityCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects, gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDNewTiledSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene3", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(1), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_1"), gdjs.mad_32cityCode.GDenemy_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("p"), gdjs.mad_32cityCode.GDpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDenemy_959595951Objects1Objects, gdjs.mad_32cityCode.mapOfGDgdjs_9546mad_959532cityCode_9546GDpObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mad_32cityCode.GDpObjects1 */
{for(var i = 0, len = gdjs.mad_32cityCode.GDpObjects1.length ;i < len;++i) {
    gdjs.mad_32cityCode.GDpObjects1[i].getBehavior("PlatformerObject").setGravity(255);
}
}
{ //Subevents
gdjs.mad_32cityCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.mad_32cityCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mad_32cityCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mad_32cityCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mad_32cityCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mad_32cityCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.mad_32cityCode.GDNewSpriteObjects1.length = 0;
gdjs.mad_32cityCode.GDNewSpriteObjects2.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.mad_32cityCode.GDNewTextObjects1.length = 0;
gdjs.mad_32cityCode.GDNewTextObjects2.length = 0;
gdjs.mad_32cityCode.GDpObjects1.length = 0;
gdjs.mad_32cityCode.GDpObjects2.length = 0;
gdjs.mad_32cityCode.GDenemy_95951Objects1.length = 0;
gdjs.mad_32cityCode.GDenemy_95951Objects2.length = 0;
gdjs.mad_32cityCode.GDcObjects1.length = 0;
gdjs.mad_32cityCode.GDcObjects2.length = 0;

gdjs.mad_32cityCode.eventsList1(runtimeScene);
gdjs.mad_32cityCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.mad_32cityCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.mad_32cityCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.mad_32cityCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.mad_32cityCode.GDNewSpriteObjects1.length = 0;
gdjs.mad_32cityCode.GDNewSpriteObjects2.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.mad_32cityCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.mad_32cityCode.GDNewTextObjects1.length = 0;
gdjs.mad_32cityCode.GDNewTextObjects2.length = 0;
gdjs.mad_32cityCode.GDpObjects1.length = 0;
gdjs.mad_32cityCode.GDpObjects2.length = 0;
gdjs.mad_32cityCode.GDenemy_95951Objects1.length = 0;
gdjs.mad_32cityCode.GDenemy_95951Objects2.length = 0;
gdjs.mad_32cityCode.GDcObjects1.length = 0;
gdjs.mad_32cityCode.GDcObjects2.length = 0;


return;

}

gdjs['mad_32cityCode'] = gdjs.mad_32cityCode;

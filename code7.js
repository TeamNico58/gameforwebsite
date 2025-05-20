gdjs.spaceCode = {};
gdjs.spaceCode.localVariables = [];
gdjs.spaceCode.GDNewTiledSpriteObjects1= [];
gdjs.spaceCode.GDNewTiledSpriteObjects2= [];
gdjs.spaceCode.GDNewShapePainterObjects1= [];
gdjs.spaceCode.GDNewShapePainterObjects2= [];
gdjs.spaceCode.GDpObjects1= [];
gdjs.spaceCode.GDpObjects2= [];
gdjs.spaceCode.GDenemy_95951Objects1= [];
gdjs.spaceCode.GDenemy_95951Objects2= [];
gdjs.spaceCode.GDcObjects1= [];
gdjs.spaceCode.GDcObjects2= [];


gdjs.spaceCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.spaceCode.GDNewShapePainterObjects1);
{for(var i = 0, len = gdjs.spaceCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.spaceCode.GDNewShapePainterObjects1[i].drawCircle(1, 1, 20000);
}
}}

}


};

gdjs.spaceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.spaceCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.spaceCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.spaceCode.GDNewShapePainterObjects1.length = 0;
gdjs.spaceCode.GDNewShapePainterObjects2.length = 0;
gdjs.spaceCode.GDpObjects1.length = 0;
gdjs.spaceCode.GDpObjects2.length = 0;
gdjs.spaceCode.GDenemy_95951Objects1.length = 0;
gdjs.spaceCode.GDenemy_95951Objects2.length = 0;
gdjs.spaceCode.GDcObjects1.length = 0;
gdjs.spaceCode.GDcObjects2.length = 0;

gdjs.spaceCode.eventsList0(runtimeScene);
gdjs.spaceCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.spaceCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.spaceCode.GDNewShapePainterObjects1.length = 0;
gdjs.spaceCode.GDNewShapePainterObjects2.length = 0;
gdjs.spaceCode.GDpObjects1.length = 0;
gdjs.spaceCode.GDpObjects2.length = 0;
gdjs.spaceCode.GDenemy_95951Objects1.length = 0;
gdjs.spaceCode.GDenemy_95951Objects2.length = 0;
gdjs.spaceCode.GDcObjects1.length = 0;
gdjs.spaceCode.GDcObjects2.length = 0;


return;

}

gdjs['spaceCode'] = gdjs.spaceCode;

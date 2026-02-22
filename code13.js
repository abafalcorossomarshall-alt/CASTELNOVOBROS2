gdjs.WIN2Code = {};
gdjs.WIN2Code.localVariables = [];
gdjs.WIN2Code.idToCallbackMap = new Map();
gdjs.WIN2Code.GDNewSpriteObjects1= [];
gdjs.WIN2Code.GDNewSpriteObjects2= [];
gdjs.WIN2Code.GDNewTextObjects1= [];
gdjs.WIN2Code.GDNewTextObjects2= [];
gdjs.WIN2Code.GDRedButtonObjects1= [];
gdjs.WIN2Code.GDRedButtonObjects2= [];
gdjs.WIN2Code.GDNewText2Objects1= [];
gdjs.WIN2Code.GDNewText2Objects2= [];
gdjs.WIN2Code.GDTitoloObjects1= [];
gdjs.WIN2Code.GDTitoloObjects2= [];
gdjs.WIN2Code.GDNewText3Objects1= [];
gdjs.WIN2Code.GDNewText3Objects2= [];
gdjs.WIN2Code.GDNewText4Objects1= [];
gdjs.WIN2Code.GDNewText4Objects2= [];
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.WIN2Code.GDPlayer2Objects1= [];
gdjs.WIN2Code.GDPlayer2Objects2= [];
gdjs.WIN2Code.GDPlayer3Objects1= [];
gdjs.WIN2Code.GDPlayer3Objects2= [];
gdjs.WIN2Code.GDPlayer4Objects1= [];
gdjs.WIN2Code.GDPlayer4Objects2= [];
gdjs.WIN2Code.GDNewSprite27eObjects1= [];
gdjs.WIN2Code.GDNewSprite27eObjects2= [];
gdjs.WIN2Code.GDnnObjects1= [];
gdjs.WIN2Code.GDnnObjects2= [];
gdjs.WIN2Code.GDBlackDecoratedButtonObjects1= [];
gdjs.WIN2Code.GDBlackDecoratedButtonObjects2= [];
gdjs.WIN2Code.GDCoinsObjects1= [];
gdjs.WIN2Code.GDCoinsObjects2= [];
gdjs.WIN2Code.GDCoins2Objects1= [];
gdjs.WIN2Code.GDCoins2Objects2= [];
gdjs.WIN2Code.GDCoins3Objects1= [];
gdjs.WIN2Code.GDCoins3Objects2= [];
gdjs.WIN2Code.GDEmote_9595StarObjects1= [];
gdjs.WIN2Code.GDEmote_9595StarObjects2= [];
gdjs.WIN2Code.GDEmote_9595Star4Objects1= [];
gdjs.WIN2Code.GDEmote_9595Star4Objects2= [];
gdjs.WIN2Code.GDEmote_9595Star2Objects1= [];
gdjs.WIN2Code.GDEmote_9595Star2Objects2= [];
gdjs.WIN2Code.GDEmote_9595Star3Objects1= [];
gdjs.WIN2Code.GDEmote_9595Star3Objects2= [];
gdjs.WIN2Code.GDNewText5Objects1= [];
gdjs.WIN2Code.GDNewText5Objects2= [];
gdjs.WIN2Code.GDTIMEObjects1= [];
gdjs.WIN2Code.GDTIMEObjects2= [];
gdjs.WIN2Code.GDTrObjects1= [];
gdjs.WIN2Code.GDTrObjects2= [];
gdjs.WIN2Code.GDTranObjects1= [];
gdjs.WIN2Code.GDTranObjects2= [];
gdjs.WIN2Code.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.WIN2Code.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.WIN2Code.GDRight_9595arrow_9595round_9595buttonObjects1= [];
gdjs.WIN2Code.GDRight_9595arrow_9595round_9595buttonObjects2= [];
gdjs.WIN2Code.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.WIN2Code.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.WIN2Code.GDTIME2Objects1= [];
gdjs.WIN2Code.GDTIME2Objects2= [];
gdjs.WIN2Code.GDNewText6Objects1= [];
gdjs.WIN2Code.GDNewText6Objects2= [];
gdjs.WIN2Code.GDfwObjects1= [];
gdjs.WIN2Code.GDfwObjects2= [];


gdjs.WIN2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.WIN2Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs.WIN2Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDNewTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), null));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.WIN2Code.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN2Code.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.WIN2Code.GDRedButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WIN2Code.GDRedButtonObjects1[k] = gdjs.WIN2Code.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.WIN2Code.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INIZIO", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "44753b4d3c538ac8b8af26578feab2d0ad562856703bbe64f0b7fc64d8003778_Click_04.aac", false, 10, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN2Code.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WIN2Code.GDEmote_9595Star2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star3"), gdjs.WIN2Code.GDEmote_9595Star3Objects1);
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595Star3Objects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595Star3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN2Code.GDEmote_9595StarObjects1);
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN2Code.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WIN2Code.GDEmote_9595Star2Objects1);
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Emote_Star"), gdjs.WIN2Code.GDEmote_9595StarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star2"), gdjs.WIN2Code.GDEmote_9595Star2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Emote_Star3"), gdjs.WIN2Code.GDEmote_9595Star3Objects1);
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595Star3Objects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595Star3Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595Star2Objects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595Star2Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.WIN2Code.GDEmote_9595StarObjects1.length ;i < len;++i) {
    gdjs.WIN2Code.GDEmote_9595StarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26342428);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "just-relax-11157.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Music")), 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INIZIO", false);
}
}

}


};

gdjs.WIN2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WIN2Code.GDNewSpriteObjects1.length = 0;
gdjs.WIN2Code.GDNewSpriteObjects2.length = 0;
gdjs.WIN2Code.GDNewTextObjects1.length = 0;
gdjs.WIN2Code.GDNewTextObjects2.length = 0;
gdjs.WIN2Code.GDRedButtonObjects1.length = 0;
gdjs.WIN2Code.GDRedButtonObjects2.length = 0;
gdjs.WIN2Code.GDNewText2Objects1.length = 0;
gdjs.WIN2Code.GDNewText2Objects2.length = 0;
gdjs.WIN2Code.GDTitoloObjects1.length = 0;
gdjs.WIN2Code.GDTitoloObjects2.length = 0;
gdjs.WIN2Code.GDNewText3Objects1.length = 0;
gdjs.WIN2Code.GDNewText3Objects2.length = 0;
gdjs.WIN2Code.GDNewText4Objects1.length = 0;
gdjs.WIN2Code.GDNewText4Objects2.length = 0;
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.WIN2Code.GDPlayer2Objects1.length = 0;
gdjs.WIN2Code.GDPlayer2Objects2.length = 0;
gdjs.WIN2Code.GDPlayer3Objects1.length = 0;
gdjs.WIN2Code.GDPlayer3Objects2.length = 0;
gdjs.WIN2Code.GDPlayer4Objects1.length = 0;
gdjs.WIN2Code.GDPlayer4Objects2.length = 0;
gdjs.WIN2Code.GDNewSprite27eObjects1.length = 0;
gdjs.WIN2Code.GDNewSprite27eObjects2.length = 0;
gdjs.WIN2Code.GDnnObjects1.length = 0;
gdjs.WIN2Code.GDnnObjects2.length = 0;
gdjs.WIN2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.WIN2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.WIN2Code.GDCoinsObjects1.length = 0;
gdjs.WIN2Code.GDCoinsObjects2.length = 0;
gdjs.WIN2Code.GDCoins2Objects1.length = 0;
gdjs.WIN2Code.GDCoins2Objects2.length = 0;
gdjs.WIN2Code.GDCoins3Objects1.length = 0;
gdjs.WIN2Code.GDCoins3Objects2.length = 0;
gdjs.WIN2Code.GDEmote_9595StarObjects1.length = 0;
gdjs.WIN2Code.GDEmote_9595StarObjects2.length = 0;
gdjs.WIN2Code.GDEmote_9595Star4Objects1.length = 0;
gdjs.WIN2Code.GDEmote_9595Star4Objects2.length = 0;
gdjs.WIN2Code.GDEmote_9595Star2Objects1.length = 0;
gdjs.WIN2Code.GDEmote_9595Star2Objects2.length = 0;
gdjs.WIN2Code.GDEmote_9595Star3Objects1.length = 0;
gdjs.WIN2Code.GDEmote_9595Star3Objects2.length = 0;
gdjs.WIN2Code.GDNewText5Objects1.length = 0;
gdjs.WIN2Code.GDNewText5Objects2.length = 0;
gdjs.WIN2Code.GDTIMEObjects1.length = 0;
gdjs.WIN2Code.GDTIMEObjects2.length = 0;
gdjs.WIN2Code.GDTrObjects1.length = 0;
gdjs.WIN2Code.GDTrObjects2.length = 0;
gdjs.WIN2Code.GDTranObjects1.length = 0;
gdjs.WIN2Code.GDTranObjects2.length = 0;
gdjs.WIN2Code.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN2Code.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN2Code.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.WIN2Code.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.WIN2Code.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN2Code.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN2Code.GDTIME2Objects1.length = 0;
gdjs.WIN2Code.GDTIME2Objects2.length = 0;
gdjs.WIN2Code.GDNewText6Objects1.length = 0;
gdjs.WIN2Code.GDNewText6Objects2.length = 0;
gdjs.WIN2Code.GDfwObjects1.length = 0;
gdjs.WIN2Code.GDfwObjects2.length = 0;

gdjs.WIN2Code.eventsList0(runtimeScene);
gdjs.WIN2Code.GDNewSpriteObjects1.length = 0;
gdjs.WIN2Code.GDNewSpriteObjects2.length = 0;
gdjs.WIN2Code.GDNewTextObjects1.length = 0;
gdjs.WIN2Code.GDNewTextObjects2.length = 0;
gdjs.WIN2Code.GDRedButtonObjects1.length = 0;
gdjs.WIN2Code.GDRedButtonObjects2.length = 0;
gdjs.WIN2Code.GDNewText2Objects1.length = 0;
gdjs.WIN2Code.GDNewText2Objects2.length = 0;
gdjs.WIN2Code.GDTitoloObjects1.length = 0;
gdjs.WIN2Code.GDTitoloObjects2.length = 0;
gdjs.WIN2Code.GDNewText3Objects1.length = 0;
gdjs.WIN2Code.GDNewText3Objects2.length = 0;
gdjs.WIN2Code.GDNewText4Objects1.length = 0;
gdjs.WIN2Code.GDNewText4Objects2.length = 0;
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.WIN2Code.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.WIN2Code.GDPlayer2Objects1.length = 0;
gdjs.WIN2Code.GDPlayer2Objects2.length = 0;
gdjs.WIN2Code.GDPlayer3Objects1.length = 0;
gdjs.WIN2Code.GDPlayer3Objects2.length = 0;
gdjs.WIN2Code.GDPlayer4Objects1.length = 0;
gdjs.WIN2Code.GDPlayer4Objects2.length = 0;
gdjs.WIN2Code.GDNewSprite27eObjects1.length = 0;
gdjs.WIN2Code.GDNewSprite27eObjects2.length = 0;
gdjs.WIN2Code.GDnnObjects1.length = 0;
gdjs.WIN2Code.GDnnObjects2.length = 0;
gdjs.WIN2Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.WIN2Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.WIN2Code.GDCoinsObjects1.length = 0;
gdjs.WIN2Code.GDCoinsObjects2.length = 0;
gdjs.WIN2Code.GDCoins2Objects1.length = 0;
gdjs.WIN2Code.GDCoins2Objects2.length = 0;
gdjs.WIN2Code.GDCoins3Objects1.length = 0;
gdjs.WIN2Code.GDCoins3Objects2.length = 0;
gdjs.WIN2Code.GDEmote_9595StarObjects1.length = 0;
gdjs.WIN2Code.GDEmote_9595StarObjects2.length = 0;
gdjs.WIN2Code.GDEmote_9595Star4Objects1.length = 0;
gdjs.WIN2Code.GDEmote_9595Star4Objects2.length = 0;
gdjs.WIN2Code.GDEmote_9595Star2Objects1.length = 0;
gdjs.WIN2Code.GDEmote_9595Star2Objects2.length = 0;
gdjs.WIN2Code.GDEmote_9595Star3Objects1.length = 0;
gdjs.WIN2Code.GDEmote_9595Star3Objects2.length = 0;
gdjs.WIN2Code.GDNewText5Objects1.length = 0;
gdjs.WIN2Code.GDNewText5Objects2.length = 0;
gdjs.WIN2Code.GDTIMEObjects1.length = 0;
gdjs.WIN2Code.GDTIMEObjects2.length = 0;
gdjs.WIN2Code.GDTrObjects1.length = 0;
gdjs.WIN2Code.GDTrObjects2.length = 0;
gdjs.WIN2Code.GDTranObjects1.length = 0;
gdjs.WIN2Code.GDTranObjects2.length = 0;
gdjs.WIN2Code.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN2Code.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN2Code.GDRight_9595arrow_9595round_9595buttonObjects1.length = 0;
gdjs.WIN2Code.GDRight_9595arrow_9595round_9595buttonObjects2.length = 0;
gdjs.WIN2Code.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.WIN2Code.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.WIN2Code.GDTIME2Objects1.length = 0;
gdjs.WIN2Code.GDTIME2Objects2.length = 0;
gdjs.WIN2Code.GDNewText6Objects1.length = 0;
gdjs.WIN2Code.GDNewText6Objects2.length = 0;
gdjs.WIN2Code.GDfwObjects1.length = 0;
gdjs.WIN2Code.GDfwObjects2.length = 0;


return;

}

gdjs['WIN2Code'] = gdjs.WIN2Code;

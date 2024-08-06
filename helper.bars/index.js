// Your CTJS script

class Bar {
  constructor(barID, minValue, currentValue, maxValue, xPosition, yPosition, backgroundTemplate, foregroundTemplate, orientation) {
    this.barID = barID;
    this.minValue = minValue;
    this.currentValue = currentValue;
    this.maxValue = maxValue;
    this.currentValue = minValue;
    this.x = xPosition;
    this.y = yPosition;
    this.backgroundTemplate = backgroundTemplate;
    this.foregroundTemplate = foregroundTemplate;
    this.orientation = orientation;
    this._backgroundTemplateWidth;
    this._backgroundTemplateHeight;
    this._foregroundTemplateWidth;
    this._foregroundTemplateHeight;

  }
}

function createBar(barID, minValue, currentValue, maxValue, xPosition, yPosition, backgroundTemplate, foregroundTemplate, orientation) {

  var bar = new Bar();
  var bg = templates.copy(backgroundTemplate, xPosition, yPosition);
  var fg = templates.copy(foregroundTemplate, xPosition, yPosition);
  bar.barID = barID;
  bar.minValue = minValue;
  bar.currentValue = currentValue;
  bar.maxValue = maxValue;
  bar.x = xPosition;
  bar.y = yPosition;
  bg.depth = 0;
  bar.backgroundTemplate = bg;
  fg.depth = 1;
  bar.foregroundTemplate = fg;

  bar.orientation = orientation;
  bar._backgroundTemplateWidth = bar.backgroundTemplate.width;
  bar._backgroundTemplateHeight = bar.backgroundTemplate.height;
  bar._foregroundTemplateWidth = bar.foregroundTemplate.width;
  bar._foregroundTemplateHeight= bar.foregroundTemplate.height;
  
  return bar;
}

function increase(bar, amount){
  if(bar && amount){
    bar.currentValue += amount;
    if(bar.currentValue >= bar.maxValue){
      bar.currentValue = bar.maxValue;
    }   
  }
}

function decrease(bar, amount) {
  if(bar && amount){

    bar.currentValue -= amount;
    if(bar.currentValue <= bar.minValue){
     bar.currentValue = bar.minValue;
    }
  }
}

function currentBarStatus(bar){

  if( templates.valid(bar.foregroundTemplate)){
    if(!bar.orientation){
      bar.orientation = 'horizontal';
    }
    if (bar.orientation === 'horizontal') {
      var foregroundWidth = calculateBarSize(bar.currentValue, bar.maxValue, bar._backgroundTemplateWidth);
      bar.foregroundTemplate.width = foregroundWidth;
    } else {
      var foregroundHeight = calculateBarSize(bar.currentValue, bar.maxValue, bar._backgroundTemplateHeight);
      bar.foregroundTemplate.height = foregroundHeight;
    }
    
  }
}

function calculateBarSize(current, max, barMaxSize) {
  return (current / max) * barMaxSize;
}
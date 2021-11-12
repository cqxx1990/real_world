export default class ActionLocker{
  constructor(element){
    this.element=element;
    this.lock();
  }
  lock(){
    this.element.disabled=true;
  }
  unlock(){
    this.element.disabled=false;
  }
}
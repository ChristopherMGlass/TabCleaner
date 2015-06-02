// TO DO: Forgotton tabs, Ie hey remember these check them out
// TO DO: add viewed listener. [threshold?] lRU

var Times= new Object;
var StaleList=new Object;
var LRU = new Object;

function ActivateListener(int ID, int window)
{
  int index= LRU.indexof(ID);
  LRU.push(ID)
  if(index!=-1)
  {
    LRU.splice(index,1);
  }
}
  
function UpdateListener(int ID,  object changeInfo, Tab tab)
{
if(changeInfo.url!=NULL){
  {
  var timer = new Date();
  Times[ID]=timer;
  }
}
function getOldTabs()
{
  for(x in Times)
  {
    var now = new Date;
    diff=(now.getTime()-Times[x].getTime())/1000
    if( diff > 1200)
    {
      StaleList[x]=Math.floor(diff/1200);
      
    }
  }
}

function DescendingOrder(int insert,array list, int index)
{
  if(insert>list[index]){
    DescendingOrder(list[index],list,index+1)
    list[index]=insert;
  }elseif(index==sizeof(list)){
    return;
  }else{
    DescendingOrder(insert,list,index+1);
  }
}

function RemoveTabs(int num)
{
    var remove[num]={0};
  for(x in StaleList)
  {
     for(y in LRU)
     {
       if(LRU[y]==StateList[x])
       {
        StateList[x]*=y;
       }
     }
     DescendingOrder(StaleList[x],remove,0);
  }
  //TODO
  ////////////
  // Highlight Tabs 
  // Query User w/ list
  // remove tabs
}


chrome.tabs.onUpdate.addListener(UpdateListener);
chrome.tabs.onActivated.addListenr(ActiveListener);

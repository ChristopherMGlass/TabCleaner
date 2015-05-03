var Times= new Object;
var StaleList=new Object;


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
     DescendingOrder(StaleList[x],remove,0);
  }
}


chrome.tabs.onUpdate.addListener(UpdateListener);

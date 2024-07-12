//****將這段內容放在tool.js檔案中**** 
// 重寫setItem事件，當使用setItem的時候，觸發，window.dispatchEvent派發事件
function  dispatchEventStroage () {
    const  signSetItem =  localStorage . setItem 
    localStorage . setItem  =  function ( key, val ) {
        let  setEvent =  new  Event ( 'setItemEvent' )
        setEvent. key  = key
        setEvent. newValue  = val
        window . dispatchEvent (setEvent)
        signSetItem. apply ( this ,  arguments )
    }
}

export  default  dispatchEventStroage;
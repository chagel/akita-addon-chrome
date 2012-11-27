window.onload = function(){
  setTimeout(function(){
    var frame = document.getElementById('container');
    // chrome.tabs.query({active:true}, function(tab) {
    chrome.tabs.getSelected(null, function(tab) {
      var u = tab.url;
      var t = tab.title; 
      var s = window.getSelection();
      frame.src = 'http://weed30.com/links/new?link[url]='+ encodeURIComponent(u) + '&link[title]='+ encodeURIComponent(t) + '&link[description]='+ encodeURIComponent(s); 
    });
    
  }, 500); 
}
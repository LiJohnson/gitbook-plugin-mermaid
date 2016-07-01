require(['gitbook','jQuery'],function(gitbook,$){
    
    $(document).on('dblclick','.mermaid-container svg',function(){
        window.open(URL.createObjectURL(new Blob([this.outerHTML],{type:'image/svg+xml'})))
    });

	gitbook.events.on('page.change',function (params) {
        mermaid.initialize({startOnLoad:true});
    });
	//gitbook.events.on('load',init);

});
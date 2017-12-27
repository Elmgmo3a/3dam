new Vue({
	el: '#queuelist',
	methods:{
		select: function(event) {
			alert(":S");
        targetId = event.currentTarget.id;
        console.log(targetId); // returns 'foo'
    }
});
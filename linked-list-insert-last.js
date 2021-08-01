insertLast(data){

	//kreiramo node koji ce ici na kraju
	let node= new Node(data);
	let current;

	//if empty, make head
	//current.next != null

	if(!this.head){
		this.head=node;
		
	}else{
		current=this.head;

		//lupujemo do kraja

		while(current.next){
			current= current.next;
		}
		current.next=node;
	}

}

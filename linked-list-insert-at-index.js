

function insertAt(data, index){

	const node=new Node(data);

	let current, previous;
	let count=0;
	curent=this.head;

	if(index ===0 ){
	    this.head = new Node(data);
	    return;
	}

	while(count < index){
		previous = current;
		count++;
		current= current.next;
	}

	node.next = current;
	previous.next = node;
	this.size++;
}

<script src="base-datastructure.js"></script>
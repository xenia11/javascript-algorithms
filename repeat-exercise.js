const Node {
	constructor(data, next = null){
		this.data=data;
        this.next=next;
	}
}

const LinkedList{
	constructor(){
		this.head=null;
		this.size=0;
	}
}

insertFirst(data){
   this.head = new Node(data, this.head);
   this.size++;
}

insertLast(data){

let node= new Node(data);
let current;

if(!this.head){
     this.head=node;
}else{
	current = this.head;

	while(current.next){
		current=current.next;
	}
	current.next = node;
}

this.size++;

}

insertAt(data, index){
 let current - this.head;
 let next;
 let previous;
 let count=0;
 let node= new Node(data);

 if(index === count){
 	this.head= new Node(data, this.head);
 	return;
 }

 if(index>0 && index>this.size){
 	return;
 }

 while(this.head && count<index){
 	previous=current;
 	current = previous.next;
 	count++;
 	
 }

node.next = current;
previous.next = node;

this.size++;

}

const n = new LinkedList();

n.insertFirst(500);
n.insertLast(600);
n.insertAt(200,2);

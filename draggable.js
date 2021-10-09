class draggble{
    dragSrecEl;

    constructor(options){
        this.setupList(options);

        //It brings the children of ID back to us el=#list
        //  console.log(options.el.children)  
        for(let listItem of options.el.children){
            this.addDnDHandlers(listItem)
        }
    }

    setupList(options){
        //Checks the items to make sure the following conditions are met
        let{list,el:element,template}=options;

        if(!element)throw Error('the list is not exist');
        if(!list)throw Error('the data is not exist');
        if(!Array.isArray(list)) throw Error('this list is not an array, please insert an array');
        if(! template)throw Error('please add a template function');
        if(typeof template !== "function") throw Error('please add a function as template');

        list.forEach(item => element.innerHTML += template(item))
    }
    addDnDHandlers(element) {
        //Activates the drag action
        element.setAttribute('draggable' , true);

        element.addEventListener('dragstart' , this.handlerDragStart.bind(this))
        element.addEventListener('drageneter' , this.handlerDragEnter.bind(this))
        element.addEventListener('dragover' , this.handlerDragOver.bind(this))
        element.addEventListener('dragleave' , this.handlerDragLeave.bind(this))
        element.addEventListener('drop' , this.handlerDragDop.bind(this))
        element.addEventListener('dragend' , this.handlerDragEnd.bind(this))
    }

    handlerDragStart(e){
        //Something happens at the start of the drag
        // console.log('data start',e.target)

        this.dragSrecEl = e.target;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.outerHTML)

        e.target.classList.add('dragElem');
    }
    handlerDragEnter(e){
        //Something happens at the enter mouse of the drag
        // console.log('data enter',e.target)
    }
    handlerDragOver(e){
        //Something happens at the over of the drag
        // console.log('data over',e.target)

        if(e.preventDefault)e.preventDefault();

        e.target.classList.add('over');
    }
    handlerDragLeave(e){
        //Something happens at the leave of the drag
        // console.log('data leave',e.target)

        e.target.classList.remove('over');
    }
    handlerDragDop(e){
        //Something happens at the drop of the drag
        // console.log('data drop',e.target)

        
        let target = e.target.closest('.list-show');

        if(this.dragSrecEl != target){
            target.parentNode.removeChild(this.dragSrecEl)
            let dropHTML = e.dataTransfer.getData('text/html')
            target.insertAdjacentHTML('beforebegin',dropHTML)
            this.addDnDHandlers(target.previousSibling)
        }
        e.target.classList.remove('over');
        
    }
    handlerDragEnd(e){
        //Something happens at the end of the drag
        // console.log('data end',e.target)

        e.target.classList.remove('dragElem');
    }
}
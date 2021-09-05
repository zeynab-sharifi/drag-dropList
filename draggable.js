class draggble{
    constructor(options){
        this.setupList(options);
    }

    setupList(options){
        let{list,el:element,template}=options;

        if(!element)throw Error('the list is not exist');
        if(!list)throw Error('the data is not exist');
        if(!Array.isArray(list)) throw Error('this list is not an array, please insert an array');
        if(! template)throw Error('please add a template function');
        if(typeof template !== "function") throw Error('please add a function as template');

        list.forEach(item => element.innerHTML +=template(item))
    }
}
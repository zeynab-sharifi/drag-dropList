let data=[
    {id:1,title:'آییتم شماره 1',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id:2,title:'آییتم شماره 2',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id:3,title:'آییتم شماره 3',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id:4,title:'آییتم شماره 4',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id:5,title:'آییتم شماره 5',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id:6,title:'آییتم شماره 6',text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
]


new draggble({
    el: document.querySelector('#list'),
    list :data,
    template : (item) => {
        return `<div class="list-show">
                 <div class="header-list" id="${item.id}">
                        <div class="id-list">
                            ${item.id}
                        </div>
                    </div>
                    <div class="body-list">
                        <span class="title-body"></span>
                        <p>${item.text}</p>
                    </div>
                    <div class="footer-list">
                        <h5 id="foo">${item.title}</h5>
                    </div> 
                </div>`
    },
    update : (list) => {
        console.log(list)
    }
})
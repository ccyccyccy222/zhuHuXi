let initState = {
    blogDetail:{
        id:'',
        title:'',
        content:''
    },
    blogDetails:[]
}

let reducer=(state=initState,action)=> { //管理员,负责如何更改状态的

    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) { //更改状态 要有一个新的状态覆盖掉
        case "add":
            let blogDetail2={
                id:action.id,
                title:action.title,
                content:action.content
            }
            newState.blogDetails=[...newState.blogDetails,blogDetail2]
    }
    return newState;
};

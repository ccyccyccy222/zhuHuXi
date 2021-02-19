
let createStore=(reducer)=> { //将状态放到一个盒子里 别人改不了
    let state ;  //声明状态
    function dispatch(action) { //派发 参数是action动作,action是一个对象
        state= reducer(state,action); //调用写好的方法,这个方法会返回一个新的状态
    }
    dispatch({}); //内部需要先定义次
    let getState = ()=> JSON.parse(JSON.stringify(state)); //获取状态的方法 深拷贝
    return {
        getState,
        dispatch
    };
}

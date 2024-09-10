const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

  function findUserByUsername(arr, item){
    return arr.find(function(val){
        return val.username === item;
    });
  }

  function removeUser(arr, item){
    let check = arr.findIndex(function(val){
        return val.username === item;
    });
    if(check === -1) return;

    arr.splice(arr.indexOf(check), 1)[0];
    return arr;
  }
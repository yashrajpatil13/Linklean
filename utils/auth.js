const sessionIdToUserMap = new Map();

function setUser(uid, user){
    sessionIdToUserMap.set(uid, user);
}

function getUser(uid){
    return sessionIdToUserMap.get(uid);
}

function deleteUser(uid){
    sessionIdToUserMap.delete(uid);
}

export {
    setUser,
    getUser,
    deleteUser,
}
const sessionIdToUserMap = new Map();

function setUser(uid, user){
    sessionIdToUserMap.set(uid, user);
}

function getUser(uid){
    return sessionIdToUserMap.get(uid);
}

export {
    setUser,
    getUser
}
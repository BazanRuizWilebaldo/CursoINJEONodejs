const { nanoid } = require('nanoid');
const TABLE = 'cursos';
let store;

//controllador del CRUD de Cursos
module.exports = function (storeInjected) {
    store = storeInjected;
    if (!store) {
        store = require('../../store/dummy');
    }

    function list() {
        return store.list(TABLE);
    }
    function get(id) {
        return store.get(TABLE, id);
    }

    async function insert(body) {
        const curso = {
            nombre_curso: body.nombre_curso,
            id: nanoid(),
            capacidad: body.capacidad,
            descripcion: body.descripcion,
        }

        return store.insert(TABLE, curso);
    }

    function update(data){
        return store.update(TABLE, data);
    }

    function remove(id){
        return store.remove(TABLE, id);
    }

    return {
        list,
        get,
        insert,
        update,
        remove,
    }
}
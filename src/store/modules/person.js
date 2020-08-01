import axios from 'axios';

export default{
    actions: {
        GET_PERSON_LIST({commit}, query=''){
            axios.get(`http://swapi.dev/api/people/?search=${query}`)
            .then((res)=>{
                const data = res.data.results.map((person)=>{
                    return {
                        ...person,
                        id: person.url.match(/\/([0-9]*)\/$/)[1]
                    }
                });
                commit('updatePersonList',data);
            })
            .catch(err=>console.error(err));
        },
        GET_PERSON_INFO({commit}, id){
            axios.get(`http://swapi.dev/api/people/${id}`)
            .then((res)=>{
                const data = {
                    ...res.data,
                    id: res.data.url.match(/\/([0-9]*)\/$/)[1]
                }
                commit('updatePersonInfo', data)
            })
            .catch((err)=>console.error(err));
        }
    },
    mutations: {
        updatePersonList(state, data){
            state.personList = data;
        },
        updatePersonInfo(state, personInfo){
            const id = state.history.findIndex((person)=>person.id === Number.parseInt(personInfo.id));
            if(id != -1){
                const historyItem = state.history[id];
                switch(id){
                    case 0:{
                        state.personInfo = personInfo;
                        break;
                    }
                    default:{
                        const newHistory=[
                            historyItem,
                            ...state.history.slice(0, id),
                            ...state.history.slice(id+1),
                        ];
                            state.personInfo = personInfo;
                            state.history = newHistory;
                    }
                }
            } else{
                const newHistoryItem = {
                    id: Number.parseInt(personInfo.id),
                    name: personInfo.name,
                };
                const newHistory=[
                    newHistoryItem,
                    ...state.history
                ];
                state.personInfo = personInfo;
                state.history = newHistory;
            }
        }
    },
    state: {
        personList:[],
        personInfo:{},
        history:[]
    },
    getters: {
        personList(state){
            return state.personList
        },
        personInfo(state){
            const personInfoFiltered = Object.assign({}, state.personInfo);
            const filter = ['films', 'homeworld', 'vehicles', 'starships', 'species', 'created', 'edited', 'url', 'id'];
            filter.forEach((e)=>delete personInfoFiltered[e]);
            return personInfoFiltered
        },
        history(state){
            return state.history
        }
    },
}
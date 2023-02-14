import { reactive } from "vue";

export const store = reactive({
    searchKey: "",
    docSearch: '',
    voto: 0,
    feedbackNumber: 0,
    loading: false,
    titleIndex: false,
    specializations: [],
})
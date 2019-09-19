const CommonsModule = {
    state: {
        isSidebarOpen: false
    },
    getters: {},
    mutations: {
        toggleSidebar(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit("toggleSidebar");
        }
    }
};

export default CommonsModule;

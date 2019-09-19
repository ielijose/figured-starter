const AuthModule = {
    state: {
        user: JSON.parse(localStorage.getItem("user")) || null
    },
    getters: {
        loggedIn(state) {
            return state.user !== null;
        },
        isAdmin(state) {
            return state.user !== null && state.user.role === "admin";
        }
    },
    mutations: {
        login(state, user) {
            state.user = user;
        },
        logout(state) {
            state.user = null;
        }
    },
    actions: {
        login(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/login", {
                        email: credentials.email,
                        password: credentials.password
                    })
                    .then(response => {
                        const user = JSON.stringify(response.data);

                        localStorage.setItem("user", user);
                        context.commit("login", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        console.error(error);
                        reject(error);
                    });
            });
        },
        register(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/register", credentials)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        logout(context) {
            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios
                        .post("/api/auth/logout")
                        .then(response => {
                            localStorage.removeItem("user");
                            context.commit("logout");
                            resolve(response);
                        })
                        .catch(error => {
                            localStorage.removeItem("user");
                            context.commit("logout");
                            reject(error);
                        });
                });
            }
        }
    }
};

export default AuthModule;

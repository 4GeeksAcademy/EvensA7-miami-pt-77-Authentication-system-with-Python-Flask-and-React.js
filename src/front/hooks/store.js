// Fetches the agenda from the API
export const signup = async (dispatch, payload) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup",{
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: {
            email: ,
            password:
        }
    });
    let data = await response.json();

    // error handling
    // if (data.detail == `Agenda "evensa7" doesn't exist.`) {
    //     createAgenda();
    // }
}

export const login = async (dispatch, payload) => {
    // let response = await fetch("https://playground.4geeks.com/contact/agendas/evensa7");
    // let data = await response.json();

    // error handling
    // if (data.detail == `Agenda "evensa7" doesn't exist.`) {
    //     createAgenda();
    // }

    dispatch({
        type: "set_user",
        payload: { user: data },
    });
}

// export const private = async (dispatch, payload) => {
//     // let response = await fetch("https://playground.4geeks.com/contact/agendas/evensa7");
//     // let data = await response.json();

//     // error handling
//     // if (data.detail == `Agenda "evensa7" doesn't exist.`) {
//     //     createAgenda();
//     // }

//     dispatch({
//         type: "set_agenda",
//         payload: { agenda: data.slug, contacts: data.contacts },
//     });
// }
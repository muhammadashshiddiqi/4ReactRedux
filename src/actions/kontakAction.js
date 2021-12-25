import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
    console.log("2. masuk action get list kontak");
    return (dispatch) => {

        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload : {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get api
        axios({
            method: 'GET',
            url: 'http://localhost:4000/kontaks',
            timeout: 1200000
        }).then((respon) => {
            console.log("3. berhasil dapet data getlist kontak: ", respon);
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: respon.data,
                    errorMessage: false
                }
            })
        }).catch((err) => {
            console.log("3. berhasil dapet data getlist kontak: ", err);
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        });
    }

}

export const addKontak = (data) => {
    console.log("2. masuk action add kontak");
    return (dispatch) => {

        //loading
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get api
        axios({
            method: 'POST',
            url: 'http://localhost:4000/kontaks',
            timeout: 1200000,
            data: data
        }).then((respon) => {
            console.log("3. berhasil dapet data add kontak : ", respon.data);
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: respon.data,
                    errorMessage: false
                }
            })
        }).catch((err) => {
            console.log("3. berhasil dapet data add kontak : ", err);
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        });
    }

}

export const deleteKontak = (id) => {
    console.log("2. masuk action delete kontak");
    return (dispatch) => {

        //loading
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get api
        axios({
            method: 'DELETE',
            url: 'http://localhost:4000/kontaks/'+id,
            timeout: 1200000
        }).then((respon) => {
            console.log("3. berhasil dapet data delete kontak : ", respon.data);
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: respon.data,
                    errorMessage: false
                }
            })
        }).catch((err) => {
            console.log("3. berhasil dapet data add kontak : ", err);
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        });
    }

}

export const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}


export const updateKontak = (data) => {
    console.log("2. masuk action update kontak");
    return (dispatch) => {

        //loading
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        });

        //get api
        axios({
            method: 'PUT',
            url: 'http://localhost:4000/kontaks/'+data.id,
            timeout: 1200000,
            data: data
        }).then((respon) => {
            console.log("3. berhasil dapet data update kontak : ", respon.data);
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: respon.data,
                    errorMessage: false
                }
            })
        }).catch((err) => {
            console.log("3. berhasil dapet data update kontak : ", err);
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        });
    }

}


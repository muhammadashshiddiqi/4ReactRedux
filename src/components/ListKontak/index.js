import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteKontak, DETAIL_KONTAK, getListKontak, detailKontak } from '../../actions/kontakAction';

function ListKontak() {
    
    const dispatch = useDispatch();
    const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer)

    useEffect(() => {
        //panggil actio getlistkontak
        console.log("1. use effect component did mount getlist kontak");
        dispatch(getListKontak());
        
    }, [dispatch]);
    
    useEffect(() => {
        if (deleteKontakResult) {
            console.log('5. masuk komponent did delete');
            dispatch(getListKontak());
        }
    }, [deleteKontakResult, dispatch])

    
    return (
        <div>
            <h5>List Kontak</h5>
            {getListKontakResult ? (getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}> 
                            {kontak.nama} - {kontak.nohp} 
                            <button onClick={() => dispatch(deleteKontak(kontak.id))} >Hapus</button> 
                            <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
                        </p>
                    )
                }) 
            ) : getListKontakLoading ? (
                <p>Loading ...</p>
            ) : (
                <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListKontak

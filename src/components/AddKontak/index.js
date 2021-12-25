import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction';

function AddKontak() {
    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [id, setId] = useState('');

    const dispatch = useDispatch();
    const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("1. masuk handle submit");

        if (id) {
            dispatch(updateKontak({ id:id, nama: nama, nohp: nohp }));
        }else{
            dispatch(addKontak({ nama: nama, nohp: nohp }));
        }
    };
    
    useEffect(() =>{
        if(addKontakResult){
            console.log('5. masuk komponent did add');
            dispatch(getListKontak());
            setNama('');
            setNohp('');
        }
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if (updateKontakResult) {
            console.log('5. masuk komponent did update');
            dispatch(getListKontak());
            setNama('');
            setNohp('');
            setId('');
        }
    }, [updateKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            console.log('5. masuk komponent did detail');
            setNama(detailKontakResult.nama);
            setNohp(detailKontakResult.nohp);
            setId(detailKontakResult.id);
        }
    }, [detailKontakResult])

    return (
        <div>
            <h5>{id ? "Edit Kontak" : "Add Kontak"}</h5>
            <form onSubmit={(ev) => handleSubmit(ev)}>
                <input type="text" name='nama' placeholder='Nama ....' value={nama} onChange={(ev) => setNama(ev.target.value)} />
                <input type="text" name='nohp' placeholder='NoHP ....' value={nohp} onChange={(ev) => setNohp(ev.target.value)} />

                <button type='submit'> SIMPAN </button>
            </form>
        </div>
    )
}

export default AddKontak

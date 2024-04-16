import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewMachine } from './utilitasMesinSlice'; // Action creator untuk menambahkan mesin baru

const AddUtilitasMesinModalBody = () => {
    const dispatch = useDispatch();
    const [nama, setNama] = useState('');
    const [status, setStatus] = useState('');
    const [fungsi, setFungsi] = useState('');

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch action untuk menambahkan mesin baru ke Redux store
        dispatch(addNewMachine({ nama, status, fungsi }));
        // Reset nilai input setelah submit
        setNama('');
        setStatus('');
        setFungsi('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nama">Nama Mesin:</label>
                    <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="fungsi">Fungsi:</label>
                    <input type="text" id="fungsi" value={fungsi} onChange={(e) => setFungsi(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddUtilitasMesinModalBody;

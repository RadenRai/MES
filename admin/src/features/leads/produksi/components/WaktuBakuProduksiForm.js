import React, { useState } from 'react';

const WaktuBakuProduksiForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        namaProduk: '',
        detailProses: '',
        waktu: 0,
        outputProses: 0,
        jumlahKebutuhanPerUnit: 0,
        waktuPerUnit: 0,
        keterangan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            namaProduk: '',
            detailProses: '',
            waktu: 0,
            outputProses: 0,
            jumlahKebutuhanPerUnit: 0,
            waktuPerUnit: 0,
            keterangan: ''
        });
    };

    return (
        <div className="waktu-baku-produksi-form">
            <h2>Add New Production</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="namaProduk">Nama Produk/Modul/Proses:</label>
                    <input type="text" id="namaProduk" name="namaProduk" value={formData.namaProduk} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="detailProses">Detail Proses:</label>
                    <input type="text" id="detailProses" name="detailProses" value={formData.detailProses} onChange={handleChange} required />
                </div>
                {/* Tambahkan input lain sesuai kebutuhan */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default WaktuBakuProduksiForm;

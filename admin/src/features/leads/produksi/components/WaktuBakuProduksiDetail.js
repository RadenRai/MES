import React from 'react';

const WaktuBakuProduksiDetail = ({ data }) => {
    return (
        <div className="waktu-baku-produksi-detail">
            <h2>Production Details</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <p>Nama Produk/Modul/Proses: {item.namaProduk}</p>
                        <p>Detail Proses: {item.detailProses}</p>
                        {/* Tambahkan tampilan untuk atribut lainnya */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WaktuBakuProduksiDetail;

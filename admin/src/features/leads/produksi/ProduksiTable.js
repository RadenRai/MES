import React from 'react';

const ProduksiTable = ({ data }) => {
    return (
        <div className="produksi-table">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Produk/Modul/Proses</th>
                        <th>Detail Proses</th>
                        <th>Waktu (m)</th>
                        <th>Output/Proses (unit)</th>
                        <th>Jlh Kebutuhan/Unit</th>
                        <th>Waktu/unit (m/unit)</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.namaProduk}</td>
                            <td>{item.detailProses}</td>
                            <td>{item.waktu}</td>
                            <td>{item.outputProses}</td>
                            <td>{item.jumlahKebutuhanPerUnit}</td>
                            <td>{item.waktuPerUnit}</td>
                            <td>{item.keterangan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProduksiTable;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import ProduksiMain from '../../features/produksi/ProduksiMain'; // Perbaiki jalur impor

function InternalPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Efektivitas Produksi" }));
    }, [dispatch]); // Tambahkan dispatch sebagai dependency

    return (    
        <ProduksiMain />
    );
}

export default InternalPage;

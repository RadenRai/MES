import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../common/headerSlice';
import { getWaktuBakuProduksiContent } from './waktuBakuProduksiSlice';
import TitleCard from '../../components/Cards/TitleCard';
import Loading from './components/Loading';
import Notification from './components/Notification';
import WaktuBakuProduksiForm from './components/WaktuBakuProduksiForm';
import WaktuBakuProduksiDetail from './components/WaktuBakuProduksiDetail';

const ProduksiMain = () => {
    const dispatch = useDispatch();
    const { waktuBakuProduksiData, isLoading, error } = useSelector(state => state.waktuBakuProduksi);

    useEffect(() => {
        dispatch(setPageTitle({ title: "Efektivitas Produksi" }));
        dispatch(getWaktuBakuProduksiContent());
    }, [dispatch]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <Notification message={error} />;
    }

    return (
        <div>
            <TitleCard title="Waktu Baku Produksi">
                <WaktuBakuProduksiForm />
                <WaktuBakuProduksiDetail data={waktuBakuProduksiData} />
            </TitleCard>
        </div>
    );
};

export default ProduksiMain;

import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import { openModal } from '../common/modalSlice';
import { deleteLead, getLeadsContent } from './leadSlice';
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';

const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: 'Add New ', bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }));
    };

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={openAddNewLeadModal}>Add New</button>
        </div>
    );
};

const Leads = () => {
    const { leads } = useSelector(state => state.lead);
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getLeadsContent());
    }, [dispatch]);

    useEffect(() => {
        // Lakukan sesuatu setelah data lead berubah, misalnya, log data lead
        console.log('Data lead berubah:', leads);
    }, [leads]); // Efek samping dijalankan setiap kali ada perubahan pada leads

    const deleteCurrentLead = (index) => {
        dispatch(openModal({
            title: 'Confirmation', bodyType: MODAL_BODY_TYPES.CONFIRMATION,
            extraObject: { message: 'Are you sure you want to delete this?', type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index }
        }));
    };

    return (
        <>
            <TitleCard title="Production Lead Time" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kode Produk</th>
                                <th>Nama Produk</th>
                                <th>Total Lead Time</th>
                                <th>Dok Production Lead Time</th>
                                <th>PIC PPC</th>
                                <th>Keterangan</th>
                                <th>ASSY MH</th>
                                <th>ASSY MCH</th>
                                <th>Testing MH</th>
                                <th>Testing MCH</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{lead.kode_produk}</td>
                                    <td>{lead.nama_produk}</td>
                                    <td>
                                        {lead.total_lead_time}
                                    </td>
                                    <td>{lead.dok_production_lead_time}</td>
                                    <td>{lead.pic_ppc}</td>
                                    <td>{lead.keterangan}</td>
                                    <td>{lead.assy_mh}</td>
                                    <td>{lead.assy_mch}</td>
                                    <td>{lead.testing_mh}</td>
                                    <td>{lead.testing_mch}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(index)}>
                                            <TrashIcon className="w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    );
};

export default Leads;

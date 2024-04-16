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
        dispatch(openModal({ title: 'Add New Lead', bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }));
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

    const getDummyStatus = (index) => {
        if (index % 5 === 0) return <div className="badge">Not Interested</div>;
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>;
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>;
        else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>;
        else return <div className="badge badge-ghost">Open</div>;
    };

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
                                <th>Tahapan Proses</th>
                                <th>Bagian</th>
                                <th>Lead Time (Hari)</th>
                                <th>Keterangan</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{lead.first_name}</td>
                                    <td>{lead.keterangan}</td>
                                    <td>
                                        {lead.startTime ? moment.duration(moment().diff(moment(lead.startTime))).asDays() : 'Not Started'}
                                    </td>
                                    <td>{getDummyStatus(index)}</td>
                                    <td>{lead.last_name}</td>
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

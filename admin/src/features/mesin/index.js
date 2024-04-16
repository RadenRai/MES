import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import TitleCard from '../../components/Cards/TitleCard';
import { openModal } from '../common/modalSlice';
import { deleteMachine, getUtilitasMesinContent } from './utilitasMesinSlice'; // Memperbaiki impor

import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';

const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewMachineModal = () => {
        dispatch(openModal({ title: 'Add New Machine', bodyType: MODAL_BODY_TYPES.MACHINE_ADD_NEW }));
    };

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={openAddNewMachineModal}>Add New</button>
        </div>
    );
};

const Machines = () => {
    const { machines } = useSelector(state => state.utilitasMesin); // Mengambil state dari utilitasMesinSlice
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUtilitasMesinContent()); // Memanggil action creator untuk mendapatkan konten mesin saat komponen dimuat
    }, [dispatch]);


    const deleteCurrentMachine = (index) => {
        dispatch(openModal({
            title: 'Confirmation', bodyType: MODAL_BODY_TYPES.CONFIRMATION,
            extraObject: { message: 'Are you sure you want to delete this machine?', type: CONFIRMATION_MODAL_CLOSE_TYPES.MACHINE_DELETE, index }
        }));
    };

    return (
        <>
            <TitleCard title="Machine Utilization" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Mesin</th>
                                <th>Status</th>
                                <th>Fungsi</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {machines.map((machine, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{machine.name}</td>
                                    <td>{machine.status}</td>
                                    <td>{/* Tampilkan fungsi mesin */}</td>
                                    <td>
                                        <button className="btn btn-square btn-ghost" onClick={() => deleteCurrentMachine(index)}>
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

export default Machines;

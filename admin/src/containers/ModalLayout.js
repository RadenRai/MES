import { useEffect, useCallback } from 'react';
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/common/modalSlice';
import AddLeadModalBody from '../features/leads/components/AddLeadModalBody';
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody';

function ModalLayout() {
    const { isOpen, bodyType, size, extraObject, title } = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const close = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch]);

    // Menutup modal ketika tombol "ESC" ditekan
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                close();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, close]);

    // Memastikan bodyType memiliki nilai yang valid
    const getModalBody = () => {
        switch (bodyType) {
            case MODAL_BODY_TYPES.LEAD_ADD_NEW:
                return <AddLeadModalBody closeModal={close} extraObject={extraObject} />;
            case MODAL_BODY_TYPES.CONFIRMATION:
                return <ConfirmationModalBody extraObject={extraObject} closeModal={close} />;
            default:
                return null;
        }
    };

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className={`modal-box ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={close}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
                {getModalBody()}
            </div>
        </div>
    );
}

export default ModalLayout;

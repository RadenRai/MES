import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputText from '../../../components/Input/InputText';
import ErrorText from '../../../components/Typography/ErrorText';
import { addNewLead } from '../../leads/leadSlice'; // Mengimpor addNewLead dari leadSlice

const INITIAL_LEAD_OBJ = {
    "Kode Produk": "",
    "Nama Produk": "",
    "Total Lead Time": "",
    "Dok Production Lead Time": "",
    "PIC PPC": "",
    "Keterangan": "",
    "ASSY MH": "",
    "ASSY MCH": "",
    "Testing MH": "",
    "Testing MCH": ""
};

function AddLeadModalBody({ closeModal, showNotification }) {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

    const saveNewLead = () => {
        const requiredFields = [
            "Kode Produk",
            "Nama Produk",
            "Total Lead Time",
            "Dok Production Lead Time",
            "PIC PPC",
            "Keterangan",
            "ASSY MH",
            "ASSY MCH",
            "Testing MH",
            "Testing MCH"
        ];

        for (const field of requiredFields) {
            if (!leadObj[field] || !leadObj[field].trim()) {
                setErrorMessage(`${field} is required!`);
                return;
            }
        }

        // Jika data valid, dispatch action untuk menambahkan lead baru
        dispatch(addNewLead(leadObj))
            .then(() => {
                // Tampilkan notifikasi jika lead berhasil ditambahkan
                if (showNotification) {
                    showNotification({ message: "New Lead Added!", status: 'success' });
                }
                // Tutup modal
                closeModal();
            })
            .catch(error => {
                // Tangani kesalahan jika gagal menambahkan lead baru
                console.error("Error adding new lead:", error);
                setErrorMessage("Failed to add new lead. Please try again later.");
            });
    };

    const updateFormValue = ({ updateType, value }) => {
        // Reset pesan kesalahan setiap kali nilai input diperbarui
        setErrorMessage("");
        // Perbarui objek lead dengan nilai input terbaru
        setLeadObj({ ...leadObj, [updateType]: value });
    };

    return (
        <>
            {/* Komponen input untuk setiap atribut lead */}
            <InputText type="text" value={leadObj["Kode Produk"]} updateType="Kode Produk" containerStyle="mt-4" labelTitle="Kode Produk" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["Nama Produk"]} updateType="Nama Produk" containerStyle="mt-4" labelTitle="Nama Produk" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["Total Lead Time"]} updateType="Total Lead Time" containerStyle="mt-4" labelTitle="Total Lead Time" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["Dok Production Lead Time"]} updateType="Dok Production Lead Time" containerStyle="mt-4" labelTitle="Dok Production Lead Time" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["PIC PPC"]} updateType="PIC PPC" containerStyle="mt-4" labelTitle="PIC PPC" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["Keterangan"]} updateType="Keterangan" containerStyle="mt-4" labelTitle="Keterangan" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["ASSY MH"]} updateType="ASSY MH" containerStyle="mt-4" labelTitle="ASSY MH" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["ASSY MCH"]} updateType="ASSY MCH" containerStyle="mt-4" labelTitle="ASSY MCH" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["Testing MH"]} updateType="Testing MH" containerStyle="mt-4" labelTitle="Testing MH" updateFormValue={updateFormValue} />
            <InputText type="text" value={leadObj["Testing MCH"]} updateType="Testing MCH" containerStyle="mt-4" labelTitle="Testing MCH" updateFormValue={updateFormValue} />

            {/* Tampilkan pesan kesalahan jika ada */}
            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            
            {/* Tombol untuk menyimpan lead baru */}
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>
        </>
    );
}

export default AddLeadModalBody;

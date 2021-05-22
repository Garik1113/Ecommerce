import classes from './addressModal.scss';
import React from 'react';
import Address from 'src/components/Address';
import Modal from 'src/components/Modal';
import { IAddress } from 'src/interfaces/address';

type Props = {
    handleCloseModal: any,
    handleSubmit: any,
    isOpenModal: boolean,
    editingAddress: IAddress | undefined
}

const AddressModal = (props: Props) => {
    const { handleCloseModal, handleSubmit, isOpenModal, editingAddress } = props;
    
    return (
        <Modal open={isOpenModal} onClose={handleCloseModal}>
                {
                    editingAddress
                    ?   <div className={classes.title}>
                            Փոփոխել հասցեն
                        </div>
                    :   <div className={classes.title}>
                            Ավելացնել նոր հասցե
                        </div>
                }
                <Address address={editingAddress} handleSubmit={handleSubmit}/>
        </Modal>
    )
}

export default AddressModal;
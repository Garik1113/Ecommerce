import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Address from 'src/components/Address';
import { IAddress } from 'src/interfaces/address';
import classes from './addressModal.scss';

type Props = {
    handleCloseModal: any,
    handleSubmit: any,
    isOpenModal: boolean,
    editingAddress: IAddress | undefined
}

const AddressModal = (props: Props) => {
    const { handleCloseModal, handleSubmit, isOpenModal, editingAddress } = props;

    return (
        <Modal onClose={handleCloseModal} open={isOpenModal}>
            <Modal.Header>
                <div>
                    Add New Address
                </div>
            </Modal.Header>
            <Modal.Content>
                <Address address={editingAddress} handleSubmit={handleSubmit}/>
            </Modal.Content>
        </Modal>
    )
}

export default AddressModal;
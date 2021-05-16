import React from 'react';
import { useAddresses } from 'src/talons/Account/useAddresses';
import Tabs from '../tabs';
import Address from './address';
import classes from './addresses.scss';
import AddressModal from './addressModal';

const Addresses:React.FC = () => {
    const { 
        addresses, 
        handleCloseModal, 
        handleOpenModal, 
        isOpenModal, 
        handleAddNewAddress,
        handleEditAddress,
        editingAddress,
        addNewAddress,
        handleDeleteAddress
    } = useAddresses();
    
    return (
            <div className={classes.body}>
                <div className={classes.tabs}>
                    <Tabs/>
                </div>
                <div className={classes.list}>
                        {
                           addresses && addresses.map((a, i) => (
                                <Address 
                                    address={a} 
                                    key={i} 
                                    handleDeleteAddress={handleDeleteAddress}
                                    handleEditAddress={handleEditAddress}
                                />
                            ))
                        }
                        
                        <div className={classes.addAddressField}>
                            <div className={classes.plusIconField} onClick={addNewAddress}>
                                <i className="fas fa-plus"></i>
                            </div>
                        </div>
                </div>
                {
                    isOpenModal
                    ?   <AddressModal
                            editingAddress={editingAddress}
                            handleCloseModal={handleCloseModal} 
                            handleSubmit={handleAddNewAddress}
                            isOpenModal={isOpenModal}
                        />
                    :   null
                }
            </div>
    )
}

export default Addresses
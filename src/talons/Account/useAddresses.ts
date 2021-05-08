import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAxiosClient } from '../Axios/useAxiosClient';
import { IAddress } from 'src/interfaces/address';

export const useAddresses = () => {
    const { axiosClient } = useAxiosClient();
    const [addresses, setAddresses] = useState<IAddress[]>([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [editingAddress, setEditingAddress] = useState<IAddress | undefined>(undefined)

    const handleCloseModal = useCallback(() => {
        setIsOpenModal(false)
    }, [isOpenModal, setIsOpenModal]);

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(true)
    }, [isOpenModal, setIsOpenModal]);

    const fetchAddresses = useCallback(async() => {
        const { data, status }:AxiosResponse = await axiosClient("GET", 'customers/');
        if (status == 200 && data.customer) {
            setAddresses(data.customer.addresses);
        }
    }, [addresses]);

    useEffect(() => {
        fetchAddresses();
    }, []);
    const handleAddNewAddress = useCallback(async(values: any) => {
        const method = editingAddress ? "PUT" : "POST";
        const url = editingAddress ? `customers/addresses/${editingAddress._id}` : "customers/addresses";
        await axiosClient(method, url, values);
        await fetchAddresses();
        handleCloseModal()
    }, [editingAddress, setEditingAddress])

    const handleEditAddress = useCallback((addressId) => {
        const editingAddress = addresses.find(a => a._id == addressId);
        if(editingAddress) {
            setEditingAddress(editingAddress);
            handleOpenModal()
        }
    }, [addresses, handleOpenModal]);

    const handleDeleteAddress = useCallback(async(addressId) => {
        await axiosClient("DELETE", `customers/addresses/${addressId}`);
        await fetchAddresses();
        handleCloseModal()
    }, [addresses, handleOpenModal]);

    const addNewAddress = useCallback(() => {
        setEditingAddress(undefined);
        handleOpenModal()
    }, [isOpenModal, setIsOpenModal, editingAddress, setEditingAddress])

    return {
        addresses,
        handleCloseModal,
        handleOpenModal,
        isOpenModal,
        handleAddNewAddress,
        editingAddress,
        handleEditAddress,
        handleDeleteAddress,
        addNewAddress
    }
}
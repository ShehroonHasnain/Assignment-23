import React from 'react'
import './LeftSideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function LeftSideBar() {
    return (
        <div className='leftSideBar-container'>
            <div>
                <div className='leftSideBar-items'>
                    <HomeIcon sx={{ fontSize: 30 }} /><p>Home</p>
                </div>
                <div className='leftSideBar-items'>
                    <PersonIcon sx={{ fontSize: 30 }} /><p>My Account</p>
                </div>
                <div className='leftSideBar-items'>
                    <GroupIcon sx={{ fontSize: 30 }} /><p>Groups</p>
                </div>
                <div className='leftSideBar-items'>
                    <ImportContactsIcon sx={{ fontSize: 30 }} /><p>Contacts</p>
                </div>
                <div className='leftSideBar-items'>
                    <PersonAddIcon sx={{ fontSize: 30 }} /><p>Friends</p>
                </div>
                <div className='leftSideBar-items'>
                    <GroupIcon sx={{ fontSize: 30 }} /><p>Groups</p>
                </div>
            </div>
            <hr />

            <div className='leftSideBar-items'>
                <AddPhotoAlternateIcon sx={{ fontSize: 30 }} /><p>Add Post</p>
            </div>
            
            <div className='leftSideBar-items'>
                <AccountBalanceWalletIcon sx={{ fontSize: 30 }} /><p>Balance</p>
            </div>


        </div>




    )
}

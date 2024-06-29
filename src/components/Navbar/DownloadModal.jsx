import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import downloadImage from "../../assets/images/Download.JPG";
import appStoreImage from "../../assets/images/AppStore.png";
import playStoreImage from '../../assets/images/PlayStore.png';

const DownloadModal = ({ showDownloadModal, handleClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        try{
            if (email.trim() === '') {
                toast.error('Please enter your email address.', { autoClose: 1000 });
                return;
            } else if (!emailRegex.test(email)) {
                toast.error('Please enter a valid email address.', { autoClose: 1000 });
                return;
            }
            toast.success('Link Sent successfully!', { autoClose: 1000 });
            handleClose();        
        }catch (error) {
            toast.error('Error sending link. Please try again.', { autoClose: 1000 });
        }
    };

    return (
        <>
            <Modal
                open={showDownloadModal}
                onClose={handleClose}
                aria-labelledby="credential-modal"
                style={{ backdropFilter: "blur(18px)" }}
                disablePortal // Added disablePortal prop
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: 320, lg: 700 },
                        height: { xs: 450 },
                        bgcolor: 'black',
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                    }}
                >
                    <Box
                        component="img"
                        src={downloadImage}
                        alt='Download'
                        sx={{
                            width: { xs: '100%', lg: '40%' },
                            height: '100%',
                            borderRadius: { lg: '16px 0 0 16px' },
                            display: { xs: 'none', lg: 'block' },
                        }}
                    />
                    <Box
                        sx={{
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: { xs: '100%', lg: '60%' },
                        }}
                    >
                        <IconButton
                            sx={{ alignSelf: 'flex-end', color: 'white' }}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h4" color="white" textAlign="center">
                            Take Wynk wherever you go
                        </Typography>
                        <Typography variant="body2" color="white" textAlign="center">
                            Get a message to download the mobile app
                        </Typography>
                        <TextField
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={{
                                backgroundColor: '#1b1b1c',
                                input: { color: 'white' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#2F3031',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: 'white',
                                color: 'black',
                                height: 40,
                                mt: 2,
                            }}
                            onClick={handleSubmit}
                        >
                            Get the Link
                        </Button>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 2,
                            }}
                        >
                            <Typography variant="body2" color="white" sx={{ mr: 1 }}>
                                Available on
                            </Typography>
                            <Box component="img" src={appStoreImage} alt='App Store' sx={{ height: 40, width: 80, mr: 1 }} />
                            <Box component="img" src={playStoreImage} alt='Play Store' sx={{ height: 40, width: 80 }} />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default DownloadModal;

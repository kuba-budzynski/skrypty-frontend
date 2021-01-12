import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/DropZone.module.scss'
import axios from 'axios'

const DropZone = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [validFiles, setValidFiles] = useState([]);
    const [unsupportedFiles, setUnsupportedFiles] = useState([]);

    const modalImageRef = useRef();
    const modalRef = useRef();
    const fileInputRef = useRef();
    const uploadModalRef = useRef();
    const uploadRef = useRef();
    const progressRef = useRef();

    useEffect(() => {
        let filteredArray = selectedFiles.reduce((file, current) => {
            const x = file.find(item => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setValidFiles([...filteredArray]);
    }, [selectedFiles]);

    //////////////////////////////////////////////////////////////////

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    ////////////////////////////////////////////////////////////////////

    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                files[i]['invalid'] = true;
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                setErrorMessage('File type not permitted');
                setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
            }
        }
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name) => {
        // find the index of the item
        // remove the item from array

        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
        const unsupportedFileIndex = unsupportedFiles.findIndex(e => e.name === name);
        if (unsupportedFileIndex !== -1) {
            unsupportedFiles.splice(unsupportedFileIndex, 1);
            // update unsupportedFiles array
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }

    const openImageModal = (file) => {
        const reader = new FileReader();
        modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
    }

    const closeModal = () => {
        modalRef.current.style.display = "none";
        modalImageRef.current.style.backgroundImage = 'none';
    }

    const fileInputClicked = () => {
        fileInputRef.current.click();
    }

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    }

    const uploadFiles = () => {
        uploadModalRef.current.style.display = 'block';
        uploadRef.current.innerHTML = 'File(s) Uploading...';
        for (let i = 0; i < validFiles.length; i++) {
            const formData = new FormData();
            formData.append('image', validFiles[i]);
            axios.post('URL', formData, {
            onUploadProgress: (progressEvent) => {
                const uploadPercentage = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
                progressRef.current.innerHTML = `${uploadPercentage}%`;
                progressRef.current.style.width = `${uploadPercentage}%`;
                if (uploadPercentage === 100) {
                    uploadRef.current.innerHTML = 'File(s) Uploaded';
                    validFiles.length = 0;
                    setValidFiles([...validFiles]);
                    setSelectedFiles([...validFiles]);
                    setUnsupportedFiles([...validFiles]);
                }
            }
        })
        .catch(() => {
            // If error, display a message on the upload modal
            uploadRef.current.innerHTML = `<span class=${styles.error}>Error Uploading File(s)</span>`;
            // set progress bar background color to red
            progressRef.current.style.backgroundColor = 'red';
        });
        }
    }

    const closeUploadModal = () => {
        uploadModalRef.current.style.display = 'none';
    }

    return (
        <>
            <div className="w-full mx-auto">
                <div
                    className={styles.dropContainer}
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                    onClick={fileInputClicked}
                >
                    <div className={styles.dropMessage}>
                        <div className={styles.uploadIcon}>

                        </div>
                       <span className="mt-4"> Drag & Drop files here or click to upload</span>
                    </div>
                    <input
                        ref={fileInputRef}
                        className={styles.fileInput}
                        type="file"
                        multiple
                        onChange={filesSelected}
                    />
                </div>
                <div className={styles.fileDisplayContainer}>
                    {
                        validFiles.map((data, i) =>
                            <div className={styles.fileStatusBar} key={i} >
                                <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                                    <div className={styles.fileTypeLogo}></div>
                                    <div className={styles.fileType}>{fileType(data.name)}</div>
                                    <span className={`${styles.fileName} ${data.invalid ? styles.fileError : ''}`}>{data.name}</span>
                                    <span className={styles.fileSize}>({fileSize(data.size)})</span> {data.invalid && <span className={styles.fileErrorMessage}>({errorMessage})</span>}
                                </div>
                                <div className={styles.fileRemove} onClick={() => removeFile(data.name)}>X</div>
                            </div>
                        )
                    }

                </div>
                {/* {unsupportedFiles.length === 0 && validFiles.length ? <button className={styles.fileUploadBtn} onClick={() => uploadFiles()}>Upload Files</button> : ''} 
                    {unsupportedFiles.length ? <p>Please remove all unsupported files.</p> : ''} */}
                <div className="container mx-auto flex ">
                    {
                        unsupportedFiles.length === 0 && validFiles.length ?
                        <button className="inline-block py-4 px-8 text-md text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded mx-auto my-4 disabled:opacity-50 disabled:bg-gray-300"
                            onClick={() => uploadFiles()}
                        >
                            UPLOAD {validFiles.length} NEW {validFiles.length == 1 ? "IMAGE" : "IMAGES"}
                        </button>:
                        <button className="inline-block py-4 px-8 text-md text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded mx-auto my-4 disabled:opacity-50 disabled:bg-gray-300">
                            ADD IMAGE TO UPLOAD FIRST
                        </button>
                    }                 
                </div>
            </div>
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.overlay}></div>
                <span className={styles.close} onClick={(() => closeModal())}>X</span>
                <div className={styles.modalImage} ref={modalImageRef}></div>
            </div>
            <div className={styles.uploadModal} ref={uploadModalRef}>
                <div className={styles.overlay}></div>
                <div className={styles.close} onClick={(() => closeUploadModal())}>X</div>
                <div className={styles.progressContainer}>
                    <span ref={uploadRef}></span>
                    <div className={styles.progress}>
                        <div className={styles.progressBar} ref={progressRef}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DropZone;
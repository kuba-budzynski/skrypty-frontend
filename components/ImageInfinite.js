import React from 'react'
import Image from 'next/image'
import styles from '../styles/ImageScroll.module.scss';
import Link from 'next/link'

function ImageInfinite({src, width, id, method, onClick}) {

    return (
        <div className={styles.container}>
            <Image 
                src={src}
                width={width}
                height={(width * 2) / 3}
                layout="responsive"
                style={{objectFit: 'cover'}}
                key={id}
                alt=""
                className={styles.image}
            />
            <div className={styles.middle}>
                <div className="flex space-x-6">
                    <a className="text-gray-600 hover:text-gray-400" onClick={onClick}>
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </a>
                    <Link href={`/results?image_id=${id}&method=${method}`}>
                        <a className="text-gray-600 hover:text-gray-400">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ImageInfinite
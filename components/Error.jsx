import React from 'react'
import {FaExclamationCircle} from "react-icons/fa";
import { ErrorMessage } from './Utils';

const Error = ({error }) => (
    <div
        className="flex items-center bold p-4 my-4 rounded-lg shadow-lg border-red-200 border bg-red-100 text-red-700">
        <FaExclamationCircle className="mr-3" size="1.25em"/>
        {error?.response?.data?.message ?? (
            <>
                Wystąpił błąd, prosimy spróbować ponownie. [{error}]
            </>
        )}
    </div>
)

export default Error

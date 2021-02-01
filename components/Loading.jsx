import React from 'react'
import {FaSpinner} from "react-icons/fa";

const Loading = () => (
  <div className="mx-auto p-2 align-center flex align-center justify-center flex-0">
    <FaSpinner size="12rem" className="animate-spin" />
  </div>
)

export default Loading

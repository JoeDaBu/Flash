import React from 'react'
import { renderIcon } from '../utils'

export const Tags = ({ isCourse, label }) => {
    const parseIcons = () => {
        if (isCourse) {
            const course = label.split(' ')[0]
            return renderIcon(true, course)
        } else {
            return renderIcon(false, label)
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center bg-primary-700 w-max rounded-full">
                <div className="mx-2 my-1 inline-flex">
                    <div className="mr-2 text-sm text-white">
                        {parseIcons()}
                    </div>
                    <p className="font-bold text-white text-xs">{label}</p>
                </div>
            </div>
        </div>
    )
}

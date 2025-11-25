import React from 'react'
import downIcon from '../../assets/Polygon 5.svg'
import upIcon from '../../assets/Polygon 4.svg'
import downIcondefault from '../../assets/Polygon 3.svg'
import upIcondefault from '../../assets/Polygon 5.svg'

const noneIcon = downIcondefault

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if(!sort)return down
    if(sort === down) return up
    if(sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={sort}
            />
        </span>
    )
}

export default SuperSort

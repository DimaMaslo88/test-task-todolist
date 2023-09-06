import React from 'react';

type TitleType = {
    title:string
    className:string
}
export const Title = ({title,className}:TitleType) => {
    return (
        <div className={className}>
            {title}
        </div>
    );
};


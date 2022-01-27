import React, {FC, useState} from 'react';

export enum CardVariant { // пропс с готовыми значениями которые сюда можно экспортировать из App.tsx
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void; //если void функция ничего не принимает и не возвращает, если нужно string || number укзываем
}

const Card: FC<CardProps> = ({ // указываем что это функциональный компонент из React
    width, 
    height,
    variant,
    onClick,
    children
            }) => {

                const [state, setState] = useState(0)


                    return (
                        <div  style={{width, height, 
                            border: variant === CardVariant.outlined? '1px solid gray' : 'none',
                            background: variant === CardVariant.primary? 'lightgray' : ''
                        }}
                            onClick = {() => onClick(state)}
                        >
                            {children}
                        </div>
                    );
    
}


export default Card;

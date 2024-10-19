import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children: any;
}

const TaskModal: FC<Props> = ({ children }) => {
    const elRef = useRef<HTMLDivElement | null>(null);

    console.log('cccccc');
    
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const modal = document.createElement('div')
        modal.id = 'modal';
        const modalRoot = document.getElementById('modal');
        modalRoot?.appendChild(elRef.current!);
    
        return () => {
            if (elRef.current) {
                modalRoot?.removeChild(elRef.current);
            }
        }
        }, []);

    return (
        createPortal(
            <div style={{ position: "fixed", left: 0, top: 0, background: "white" }}>
                {children}
            </div>, elRef.current
        )
    );
}

export default TaskModal;
import { FC, ReactNode } from 'react';
import { Menu } from './dropdown.style';

const Dropdown: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Menu>
            {children}
        </Menu>
    )
}

export default Dropdown;
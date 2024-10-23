import { UserDropdownOption, StyledHeader, Title, User } from './header.style';
import { ReactComponent as UserIcon } from '../../assets/header/user-avatar.svg';
import { ReactComponent as ArrowDown } from '../../assets/common/arrow-down-white.svg';
import { ReactComponent as ArrowUp } from '../../assets/common/arrow-up.svg';
import { useState } from 'react';
import Dropdown from '../common/dropdown';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const handleUserClick = () => {
        showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    };

    const profileOption = <UserDropdownOption>Profile</UserDropdownOption>;
    const logoutOption = <UserDropdownOption>Log Out</UserDropdownOption>;

    return (
        <StyledHeader>
            <Title>Awesome Kanban Board</Title>
            <User onClick={handleUserClick}>
                <UserIcon />
                {showDropdown ? <ArrowUp /> : <ArrowDown />}
                {showDropdown && (
                    <Dropdown children={[profileOption, logoutOption]} />
                )}
            </User>
        </StyledHeader>
    )
}

export default Header;
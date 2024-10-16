import { StyledHeader, Title, User } from './header.style';
import { ReactComponent as UserIcon } from '../../assets/header/user-avatar.svg';
import { ReactComponent as ArrowDown } from '../../assets/common/arrow-down-white.svg';

const Header = () => {
    return (
        <StyledHeader>
            <Title>Awesome Kanban Board</Title>
            <User>
                <UserIcon />
                <ArrowDown />
            </User>
        </StyledHeader>
    )
}

export default Header;
import styled from 'styled-components';
import Logoout from '../features/authentication/Logout';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
`;
function Header() {
  return (
    <StyledHeader>
      <Logoout />
    </StyledHeader>
  );
}

export default Header;

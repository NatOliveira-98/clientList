import styled from 'styled-components';

const Container = styled.button`
  position: relative;
  width: 100%;
  padding: 3rem 0;
  padding-left: 5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.light_gray_3};
  border-radius: 8px;

  box-shadow: 0 6px 1.8rem ${({ theme }) => theme.colors.desaturated_cyan_alpha};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.desaturated_cyan};
    outline-offset: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;

    width: 0px;
    height: 100%;
    transform: translateX(-1px);
    transition: all 0.3s;

    background-color: ${({ theme }) => theme.colors.desaturated_cyan};
    border-radius: 8px 0 0 8px;
  }

  &:hover::before {
    width: 5px;
    transform: translateX(0px);

    /* border: 4px solid red; */
  }

  img {
    width: 7rem;
    height: 7rem;

    border-radius: 50%;
    object-fit: cover;
  }

  .client-info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    strong,
    h2 {
      color: ${({ theme }) => theme.colors.desaturated_cyan};
      font-weight: 700;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  .client-contact-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    span {
      display: flex;
      align-items: center;
      gap: 5px;

      color: ${({ theme }) => theme.colors.dark_gray};
    }
  }
`;

export { Container };

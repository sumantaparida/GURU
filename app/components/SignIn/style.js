import styled from 'styled-components';
import globalStyle from 'Global/styles/base';
export const SignInContainer = styled.div`
  ${globalStyle.flex};
  ${globalStyle.column};
  margin-top: 20px;
  width: 100%;
  @media (min-width: ${globalStyle.small}) {
    max-width: 350px;
    align-items: center;
  }
  input {
    ${globalStyle.flex};
    margin-bottom: 12px;
    align-self: stretch;
    @media (max-width: ${globalStyle.small}) {
      background: #f7f7f7;
    }
  }
  button {
    margin-bottom: 12px;
    align-self: stretch;
  }
  .donthavetext {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    @media (min-width: ${globalStyle.small}) {
      color: #ffffff;
    }
  }
`;

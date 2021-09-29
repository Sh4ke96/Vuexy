import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;
  .heading {
    display: flex;
    align-items: center;
    .heading-logo {
      max-width: 100%;
      width: 32px;
      height: auto;
    }
    .heading-subtitle {
      font-size: 1.4rem;
      font-weight: bold;
      margin-left: 0.5rem;
      color: #7367f0;
    }
  }
  .heading-title {
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 1.2;
    margin: 1rem 0;
    color: #5e5873;
  }
  .heading-text {
    color: #6e6b7b;
    line-height: 1.5;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .heading-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(115, 103, 240, 0.12);
    border-radius: 10px;
    padding: 0.7rem 1rem;
    margin: 0.8rem 0;
    color: #7367f0;
    .heading-modal-title {
      font-size: 0.9rem;
      margin: 0.2rem 0;
    }
  }
  .heading-label-container {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    .heading-label {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      color: #5e5873;
    }
    .heading-input {
      padding: 0.4rem 1rem;
      font-size: 0.9rem;
      margin-top: 0.3rem;
      background-color: #fff;
      border: 1px solid #d8d6de;
      color: #6e6b7b;
      outline: none;
    }
    .heading-input:focus {
      outline: 1px solid #7367f0;
    }
    .heading-input::placeholder {
      font-size: 0.8rem;
    }
  }
  .heading-remember {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    .heading-remember {
      font-size: 0.9rem;
      color: #6e6b7b;
      .heading-remember-checkbox {
        height: 16px;
        width: 16px;
        margin-right: 0.4rem;
        accent-color: #7367f0;
        cursor: pointer;
      }
    }
  }
  .heading-button {
    margin: 1rem 0;
    width: 100%;
  }
  .heading-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    .heading-socials-title {
      color: #6e6b7b;
      font-size: 0.9rem;
      .heading-socials-link {
        color: #7367f0;
        text-decoration: none;
      }
    }
  }
  .heading-socials-divider {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 1.5rem 0 0.5rem 0;
    .heading-socials-divider-text {
      color: #6e6b7b;
      font-size: 0.9rem;
    }
    .heading-socials-divider-element {
      height: 1px;
      width: 100%;
      background-color: #ebe9f1;
      margin: 0 0.5rem;
    }
  }
  .heading-socials-container {
    display: flex;
    justify-content: center;
    .heading-socials-icon {
      font-size: 1.5rem;
      width: 30px;
      height: 30px;
      padding: 0.4rem;
      border-radius: 10px;
      margin: 0 0.5rem;
      background-color: #7367f0;
      color: #fff;
    }
    .heading-socials-icon:hover {
      cursor: pointer;
      box-shadow: 0 8px 25px -8px #7367f0;
    }
  }
`;
